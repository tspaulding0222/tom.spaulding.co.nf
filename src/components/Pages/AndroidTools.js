var React = require('react');
var LastContainerBottomMargin = require("../styles/CustomStyles").LastContainerBottomMargin;

var AndroidTools = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">
                    <h1>Android Tools</h1>
                    <ul>
                        <li><a href="#animationLibraries">Animation Libraries</a></li>
                        <li><a href="#activitys">Activity(s)</a></li>
                        <li><a href="#views">Views</a></li>
                        <li><a href="#images">Images</a></li>
                        <li><a href="#emulators">Emulators</a></li>
                        <li><a href="#performance">Performance</a></li>
                        <li><a href="#debugging">Debugging</a></li>
                        <li><a href="#androidStudioPlugins">Android Studio Plugins</a></li>
                        <li><a href="#miscUnknown">Misc/Unknown</a></li>
                    </ul>
                </div>

                <div id="animationLibraries" className="container">
                    <h3>Animation Libraries</h3>
                    <ul>
                        <li><a href="https://github.com/ybq/Android-SpinKit" target="_blank">Spinkit</a> - Loading Animations</li>
                        <li><a href="https://github.com/tspaulding0222/AnimatedPathView/tree/master" target="_blank">Animated Path View</a> - Path Animation by Myself</li>
                        <li><a href="https://github.com/takahirom/PreLollipopTransition" target="_blank">Pre-Lollipop Transitions</a> - Transition Animations for Pre-Lollipop devices</li>
                        <li><a href="https://github.com/jakob-grabner/Circle-Progress-View" target="_blank">Circular Progress Bar</a></li>
                        <li><a href="https://github.com/daimajia/AndroidViewAnimations" target="_blank">Android View Animations</a></li>
                        <li><a href="https://github.com/ozodrukh/CircularReveal" target="_blank">Circular Reveal</a> - Lollipop ViewAnimationUtils.createCircularReveal for everyone 2.3+</li>
                        <li><a href="https://github.com/AutSoft/CircularTools" target="_blank">Circular Tools</a> - Circle based animations for Android (min. API 11)</li>
                        <li><a href="https://github.com/cimi-chen/EaseInterpolator" target="_blank">Easing/Interpolators</a> - Thirty different easing animation interpolators for Android</li>
                    </ul>
                </div>

                <div id="activitys" className="container">
                    <h3>Activity(s)</h3>
                    <ul>
                        <li><a href="https://github.com/Ereza/CustomActivityOnCrash" target="_blank">Custom Activity on Crash</a> - Shows a custom made screen when the app crashes</li>
                    </ul>
                </div>

                <div id="views" className="container">
                    <h3>Views</h3>
                    <ul>
                        <li><a href="https://github.com/mmin18/FlexLayout" target="_blank">Flex Layout</a> - Layout allowing Percentages</li>
                        <li><a href="https://github.com/dupengtao/BubbleTextView" target="_blank">Bubble Text View</a> - Android Bubble View. (Chat Bubble)</li>
                        <li><a href="https://github.com/jimcoven/JCropImageView" target="_blank">JCrop Image View</a> - Provides a lightweight implementation to support top/left/right/bottom/center crop views of based on the imageview class.</li>
                    </ul>
                </div>

                <div id="images" className="container">
                    <h3>Views</h3>
                    <ul>
                        <li><a href="https://github.com/square/picasso" target="_blank">Picasso</a> - A powerful image downloading and caching library for Android</li>
                        <li><a href="https://github.com/nostra13/Android-Universal-Image-Loader" target="_blank">Android Universal Image Loader</a> - Powerful and flexible library for loading, caching and displaying images on Android.</li>
                        <li><a href="http://frescolib.org/" target="_blank">Fresco</a> - Fresco is a powerful system for displaying images in Android applications. It takes care of image loading and display so you don't have to. Uses placeholder image until image is loaded</li>
                    </ul>
                </div>

                <div id="emulators" className="container">
                    <h3>Emulators</h3>
                    <ul>
                        <li><a href="https://appetize.io/" target="_blank">Appetize</a> - Stream iOS & Android Simulators in the Browser</li>
                        <li><a href="https://www.genymotion.com/" target="_blank">Genymotion</a> - The Best Andorid Emulator. Period.</li>
                    </ul>
                </div>

                <div id="performance" className="container">
                    <h3>Performance</h3>
                    <ul>
                        <li><a href="https://github.com/square/leakcanary" target="_blank">Leak Canary</a> - A memory leak detection library for Android and Java</li>
                        <li><a href="https://github.com/facebook/device-year-class" target="_blank">device-year-class</a> - A library that analyzes an Android device's specifications and calculates which year the device would be considered "high end”.</li>
                    </ul>
                </div>

                <div id="debugging" className="container">
                    <h3>Debugging</h3>
                    <ul>
                        <li><a href="https://github.com/JakeWharton/hugo" target="_blank">Hugo</a> - Very very lazy easy way to log in Android</li>
                        <li><a href="http://facebook.github.io/stetho/" target="_blank">Stetho</a> - Chrome Developer Tools Debugging</li>
                    </ul>
                </div>

                <div id="androidStudioPlugins" className="container">
                    <h3>Android Studio Plugins</h3>
                    <ul>
                        <li><a href="https://github.com/pbreault/adb-idea" target="_blank">adb-idea</a> - A plugin for Android Studio and Intellij IDEA that speeds up your day to day android development.</li>
                        <li><a href="https://github.com/winterDroid/android-drawable-importer-intellij-plugin" target="_blank">Android Drawable Importer</a> - Adds option to Android Studio to inport drawables in different resolutions.</li>
                        <li><a href="http://developer.android.com/tools/help/adb.html#wireless" target="_blank">adb Wireless</a> - Wireless ADB</li>
                    </ul>
                </div>

                <div id="miscUnknown" className="container" style={LastContainerBottomMargin}>
                    <h3>Misc/Unknown</h3>
                    <ul>
                        <li><a href="https://jitpack.io/" target="_blank">JitPack</a> - Github Package Repo</li>
                        <li><a href="https://android-arsenal.com/" target="_blank">Android Arsenal</a> - A categorized directory of free libraries and tools for Android.</li>
                        <li><a href="https://github.com/jonfinerty/Once" target="_blank">Once</a> - A small Android library to manage one-off operations.</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = AndroidTools;