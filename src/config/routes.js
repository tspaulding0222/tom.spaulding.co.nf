var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var FrontEndTools = require('../components/FrontEndTools');
var AndroidTools = require('../components/AndroidTools');
var CodeEditor = require('../components/CodeMirrorEditor');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}/>
            <Route path="frontEndTools" header="Front End Tools" component={FrontEndTools}/>
            <Route path="androidTools" header="Android Tools" component={AndroidTools}/>
            <Route path="codeEditor" header="Code Editor" component={CodeEditor}/>
        </Route>
    </Router>
);

module.exports = routes;