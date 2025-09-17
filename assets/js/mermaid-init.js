(function () {
  function transformAndRender() {
    if (!document.querySelectorAll) return;

    // Find fenced code blocks (common output: <pre><code class="language-mermaid">...</code></pre>)
    var codes = document.querySelectorAll('pre > code.language-mermaid, code.language-mermaid');
    if (codes.length === 0) return;

    codes.forEach(function (code) {
      var pre = code.parentNode;
      var container = document.createElement('div');
      container.className = 'mermaid';
      // keep textContent (not innerHTML) to avoid HTML escaping issues
      container.textContent = code.textContent.trim();
      // Replace the <pre> with the mermaid div
      pre.parentNode.replaceChild(container, pre);
    });

    // Try to initialize / render mermaid across versions
    try {
      if (window.mermaid) {
        // v8/v9/v10 variants
        if (typeof window.mermaid.initialize === 'function') {
          // common initialize
          window.mermaid.initialize({ startOnLoad: false });
        }
        if (typeof window.mermaid.init === 'function') {
          // Some versions expose init
          window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
        } else if (typeof window.mermaid.run === 'function') {
          // older helper
          window.mermaid.run();
        } else if (window.mermaid.mermaidAPI && typeof window.mermaid.mermaidAPI.render === 'function') {
          // low-level render fallback
          document.querySelectorAll('.mermaid').forEach(function (el, i) {
            var id = 'mermaid-svg-' + i + '-' + Date.now();
            var code = el.textContent;
            window.mermaid.mermaidAPI.render(id, code, function (svg) {
              var wrapper = document.createElement('div');
              wrapper.innerHTML = svg;
              el.parentNode.replaceChild(wrapper, el);
            });
          });
        }
      }
    } catch (err) {
      console.error('Mermaid render error:', err);
    }
  }

  // If mermaid loads after DOMContentLoaded, use a MutationObserver + timeout fallback
  function waitForMermaidThenRender() {
    if (window.mermaid) {
      transformAndRender();
      return;
    }
    var mo = new MutationObserver(function (mutations, obs) {
      if (window.mermaid) {
        obs.disconnect();
        transformAndRender();
      }
    });
    mo.observe(document.documentElement || document.body, { childList: true, subtree: true });
    // fallback after 2s
    setTimeout(transformAndRender, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForMermaidThenRender);
  } else {
    waitForMermaidThenRender();
  }
})();
