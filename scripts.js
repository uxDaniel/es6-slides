(function() {
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        // keyboard: true,
        // overview: true, // Enable the slide overview mode
        center: true, // Vertical centering of slides
        // touch: true,
        // loop: false,
        // rtl: false,
        // shuffle: false,
        fragments: true,
        embedded: false,
        help: true,
        // showNotes: false, // Flags if speaker notes should be visible to all viewers
        // autoSlide: 0,
        // autoSlideStoppable: true,
        // autoSlideMethod: Reveal.navigateNext,
        // mouseWheel: false,
        hideAddressBar: true, // Hides the address bar on mobile devices

        previewLinks: true, // Opens links in an iframe preview overlay

        transition: 'default', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'fast', // default/fast/slow

        // Transition style for full page slide backgrounds
        backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

        // Number of slides away from the current that are visible
        viewDistance: 3,

        dependencies: [
            // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
            { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

            { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

            // // Zoom in and out with Alt+click
            { src: 'plugin/zoom-js/zoom.js', async: true },
            //
            // // Speaker notes
            // { src: 'plugin/notes/notes.js', async: true },
            //
            // // MathJax
            // { src: 'plugin/math/math.js', async: true }
        ]
    });
})();
