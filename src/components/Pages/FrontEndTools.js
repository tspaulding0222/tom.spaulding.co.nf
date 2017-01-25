var React = require('react');
var LastContainerBottomMargin = require("../../styles/CustomStyles").LastContainerBottomMargin;

var FrontEndTools = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">
                    <h1>Front End Tools</h1>
                    <ul>
                        <li><a href="#blogNews">Blogs/News</a></li>
                        <li><a href="#developerTools">Developer Tools</a></li>
                        <li><a href="#frameworks">Frameworks</a></li>
                        <li><a href="#freeTemplates">Free Templates</a></li>
                        <li><a href="#imagesGalleriesSlideshows">Images/Galleries/Slideshows</a></li>
                        <li><a href="#video">Video</a></li>
                        <li><a href="#lazyLoading">Lazy-Loading</a></li>
                        <li><a href="#scrolling">Scrolling</a></li>
                        <li><a href="#animations">Animation</a></li>
                        <li><a href="#uiElements">UI Elements</a></li>
                        <li><a href="#miscJavascriptTools">Misc. Javascript Tools</a></li>
                        <li><a href="#inspiration">Inspiration</a></li>
                        <li><a href="#tutorialsLearning">Tutorials/Learning</a></li>
                        <li><a href="#canvas">Canvas</a></li>
                        <li><a href="#other">Other</a></li>
                    </ul>
                </div>

                <div id="blogNews" className="container">
                    <h3>Blogs/News</h3>
                    <ul>
                        <li><a href="http://www.smashingmagazine.com/" target="_blank">Smashing Magazine</a></li>
                        <li><a href="http://www.webdesignerdepot.com/" target="_blank">Web Designer Depot</a></li>
                        <li><a href="http://www.vandelaydesign.com/blog/" target="_blank">Vandelay Design</a></li>
                        <li><a href="http://frontendfront.com/" target="_blank">Front End Front</a></li>
                        <li><a href="https://dribbble.com/" target="_blank">Dribble</a></li>
                        <li><a href="http://tympanus.net/codrops/" target="_blank">codrops</a></li>
                        <li><a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a></li>
                        <li><a href="http://codyhouse.co/" target="_blank">Cody House</a></li>
                        <li><a href="http://www.reddit.com/r/frontend" target="_blank">/r/frontend</a></li>
                    </ul>
                </div>

                <div id="developerTools" className="container">
                    <h3>Developer Tools</h3>
                    <ul>
                        <li><a href="http://www.initializr.com/" target="_blank">Boilerplates</a></li>
                        <li><a href="http://embed.ly/" target="_blank">Embedly</a></li>
                        <li><a href="http://devdocs.io/" target="_blank">Dev Docs</a></li>
                        <li><a href="http://caniuse.com/" target="_blank">Can I Use...</a></li>
                        <li><a href="http://tympanus.net/codrops/css_reference/" target="_blank">codrops CSS Reference</a></li>
                        <li><a href="https://tinypng.com/" target="_blank">TinyPNG</a></li>
                        <li><a href="https://tinyjpg.com/" target="_blank">TinyJPG</a></li>
                        <li><a href="https://c9.io/" target="_blank">Cloud 9</a></li>
                        <li><a href="https://regex101.com/" target="_blank">RegEx Tester</a></li>
                        <li><a href="https://github.com/NamPNQ/You-Dont-Need-Javascript" target="_blank">You don't need Javascript</a></li>
                    </ul>
                </div>

                <div id="frameworks" className="container">
                    <h3>Frameworks</h3>
                    <ul>
                        <li><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                        <li><a href="http://materializecss.com/>Materialize" target="_blank">Materialize</a></li>
                        <li><a href="http://fluidable.com/>Fluidable" target="_blank">Fluidable</a></li>
                        <li><a href="http://spacebase.space150.com/" target="_blank">SpaceBase</a></li>
                        <li><a href="http://flexible.gs/" target="_blank">Flexible</a></li>
                        <li><a href="http://getskeleton.com/" target="_blank">Skeleton</a></li>
                        <li><a href="https://facebook.github.io/react/" target="_blank">React JS</a></li>
                    </ul>
                </div>

                <div id="freeTemplates" className="container">
                    <h3>Free Templates</h3>
                    <ul>
                        <li><a href="http://webdesigncone.com/2014/free-bootstrap-templates/" target="_blank">35 Bootstrap Templates</a></li>
                        <li><a href="http://mokaine.com/beetle-free-html/" target="_blank">Beetie</a></li>
                        <li><a href="http://tympanus.net/Freebies/Boxify/" target="_blank">Boxify</a></li>
                        <li><a href="http://spacebase.space150.com/" target="_blank">EX Machina</a></li>
                        <li><a href="http://themeforces.com/item/arcadia-portfolio-template/" target="_blank">Arcadia Profile</a></li>
                    </ul>
                </div>

                <div id="imagesGalleriesSlideshows" className="container">
                    <h3>Images/Galleries/Slideshows</h3>
                    <ul>
                        <li><a href="http://jquery.malsup.com/cycle2/" target="_blank">Cycle 2</a></li>
                        <li><a href="http://scottjehl.github.io/picturefill/" target="_blank">Picturefill</a></li>
                        <li><a href="http://sarasoueidan.com/blog/s-gallery/" target="_blank">S Gallery</a></li>
                        <li><a href="http://joeyvandijk.github.io/rimg/" target="_blank">Rimg</a></li>
                    </ul>
                </div>

                <div id="video" className="container">
                    <h3>Video</h3>
                    <ul>
                        <li><a href="http://www.videojs.com/" target="_blank">VideoJS</a></li>
                    </ul>
                </div>

                <div id="lazyLoading" className="container">
                    <h3>Lazy Loading</h3>
                    <ul>
                        <li><a href="https://github.com/ByNathan/jQuery.loadScroll" target="_blank">jQuery Load Scroll</a></li>
                        <li><a href="http://www.newmediacampaigns.com/blog/lazyytjs-a-jquery-plugin-to-lazy-load-youtube-videos" target="_blank">Lazy YT</a></li>
                        <li><a href="http://ressio.github.io/lazy-load-xt/" target="_blank">Lazy XT</a></li>
                    </ul>
                </div>

                <div id="scrolling" className="container">
                    <h3>Scrolling</h3>
                    <ul>
                        <li><a href="http://wicky.nillia.ms/headroom.js/" target="_blank">Headroom</a></li>
                        <li><a href="https://github.com/ByNathan/jQuery.loadScroll" target="_blank">jQuery Load Scroll</a></li>
                        <li><a href="http://scrollmagic.io/" target="_blank">ScrollMagic</a></li>
                    </ul>
                </div>

                <div id="animation" className="container">
                    <h3>Scrolling</h3>
                    <ul>
                        <li><a href="https://greensock.com/gsap" target="_blank">Greensock</a></li>
                        <li><a href="https://cssanimation.rocks/twitter-fave/" target="_blank">Fave Animation</a></li>
                        <li><a href="http://bouncejs.com/" target="_blank">Bounce.js</a></li>
                        <li><a href="http://interactjs.io/" target="_blank">Interact.js</a></li>
                        <li><a href="http://maxwellito.github.io/vivus/" target="_blank">Vivus.js</a></li>
                        <li><a href="http://daneden.github.io/animate.css/" target="_blank">Animate.css</a></li>
                    </ul>
                </div>

                <div id="uiElements" className="container">
                    <h3>UI Elements</h3>
                    <ul>
                        <li><a href="http://fntneves.github.io/jquery-labelauty/" target="_blank">Labelauty</a></li>
                        <li><a href="http://jellekralt.github.io/Responsive-Tabs/" target="_blank">Responsive Tabs</a></li>
                        <li><a href="http://mango.github.io/slideout/" target="_blank">Slideout.js</a></li>
                        <li><a href="https://github.com/louisremi/background-size-polyfill" target="_blank">Fullscreen BG Polyfill</a></li>
                    </ul>
                </div>

                <div id="miscJavascriptTools" className="container">
                    <h3>Misc. Javascript Tools</h3>
                    <ul>
                        <li><a href="http://detectmobilebrowsers.com/" target="_blank">Detect Mobile Browsers</a></li>
                        <li><a href="https://parall.ax/products/jspdf" target="_blank">jsPDF</a></li>
                        <li><a href="http://sarasoueidan.com/tools/circulus/" target="_blank">Circulus</a></li>
                    </ul>
                </div>

                <div id="inspiration" className="container">
                    <h3>Inspiration</h3>
                    <ul>
                        <li><a href="http://matthew.wagerfield.com/flat-surface-shader/" target="_blank">Flat Surface Shader</a></li>
                        <li><a href="http://tympanus.net/Development/TextInputEffects/index2.html" target="_blank">Text Input Effects</a></li>
                        <li><a href="http://tympanus.net/Development/TooltipStylesInspiration/" target="_blank">Tooltip Styles</a></li>
                        <li><a href="http://tympanus.net/Development/NotificationStyles/attached-flip.html" target="_blank">Notification Styles</a></li>
                    </ul>
                </div>

                <div id="tutorialsLearning" className="container">
                    <h3>Tutorials Learning</h3>
                    <ul>
                        <li><a href="https://medium.com/@thomascullen92/building-ui-components-with-css-b3cdd9a7abdf" target="_blank">Building UI with CSS</a></li>
                        <li><a href="http://philipwalton.com/articles/css-architecture/" target="_blank">CSS Architecture</a></li>
                        <li><a href="https://online.reacttraining.com/courses/enrolled/reactjsfundamentals" target="_blank">React JS Intro</a></li>
                    </ul>
                </div>

                <div id="other" className="container" style={LastContainerBottomMargin}>
                    <h3>Canvas</h3>
                    <ul>
                        <li><a href="https://stocksnap.io/" target="_blank">Stock Snap</a></li>
                        <li><a href="https://unsplash.com/" target="_blank">Unsplash</a></li>
                    </ul>
                </div>

            </div>
        )
    }
});

module.exports = FrontEndTools;