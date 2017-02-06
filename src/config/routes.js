var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Pages/Home/Home');
var FrontEndTools = require('../components/Pages/FrontEndTools');
var AndroidTools = require('../components/Pages/AndroidTools');
var CodeEditor = require('../components/Pages/CodeMirrorEditor');
var PastProjects = require('../components/Pages/PastProjects/PastProjects');
var GreensockAnimations = require('../components/Pages/GreensockAnimations/GreensockAnimations');
var Weather = require('../components/Pages/Weather/Weather');
var raader = require('../components/Pages/RSSReader');
var Unsplash = require('../components/Pages/Unsplah/Unsplash');
var ThreeJS = require('../components/Pages/ThreeJS/ThreeJS');
var Chapter1 = require('../components/Pages/LearningThreeJS/Chapter1');
var Chapter2 = require('../components/Pages/LearningThreeJS/Chapter2');
var Chapter2A = require('../components/Pages/LearningThreeJS/Chapter2A');
var Chapter2CustomGeometry = require('../components/Pages/LearningThreeJS/Chapter2CustomGeometry');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}/>
            <Route path="frontEndTools" header="Front End Tools" component={FrontEndTools}/>
            <Route path="androidTools" header="Android Tools" component={AndroidTools}/>
            <Route path="codeEditor" header="Code Editor" component={CodeEditor}/>
            <Route path="pastProjects" header="Past Projects" component={PastProjects}/>
            <Route path="greensockAnimations" header="Greensock GSAP Animations" component={GreensockAnimations}/>
            <Route path="weather" header="Weather" component={Weather}/>
            <Route path="rssReader" header="RSS Reader" component={raader}/>
            <Route path="unsplash" header="Unsplash Images" component={Unsplash}/>
            <Route path="threeJs" header="Three JS" component={ThreeJS}/>
            <Route path="chapter1" header="Learning Three.js Chapter 1" component={Chapter1}/>
            <Route path="chapter2" header="Learning Three.js Chapter 2" component={Chapter2}/>
            <Route path="chapter2a" header="Learning Three.js Chapter 2 Geometrys" component={Chapter2A}/>
            <Route path="chapter2b" header="Learning Three.js Chapter 2 Custom Geometry" component={Chapter2CustomGeometry}/>
        </Route>
    </Router>
);

module.exports = routes;