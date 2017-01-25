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
        </Route>
    </Router>
);

module.exports = routes;