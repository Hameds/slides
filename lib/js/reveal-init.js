 Reveal.initialize({
    dependencies: [    
        { src: '../../plugin/external.js', condition: function() { return !!document.querySelector( '[data-external]' ); } }
    ],
    rtl: true
});