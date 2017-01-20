var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavItem = require('react-bootstrap/lib/NavItem');
var Nav = require('react-bootstrap/lib/Nav');
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var LinkContainer = require('react-router-bootstrap/lib/LinkContainer');
var IndexLinkContainer = require('react-router-bootstrap/lib/IndexLinkContainer');

var NavBar = React.createClass({
    render: function () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={require('file-loader!../img/logo.png')}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <IndexLinkContainer to={{pathname: '/', query:{}}}>
                            <NavItem eventKey={1}>Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to={{pathname: '/pastProjects', query:{}}}>
                            <NavItem eventKey={2}>Projects</NavItem>
                        </LinkContainer>
                        <LinkContainer to={{pathname: '/frontEndTools', query:{}}}>
                            <NavItem eventKey={3}>Front End Tools</NavItem>
                        </LinkContainer>
                        <LinkContainer to={{pathname: '/androidTools', query:{}}}>
                            <NavItem eventKey={4}>Android Tools</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={10} title="Just for Fun" id="justForFunDropdown">
                            <LinkContainer to={{pathname: '/greensockAnimations', query: {}}}>
                                <MenuItem eventKey={11}>Greensock Animations</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to={{pathname: '/codeEditor', query:{}}}>
                            <NavItem eventKey={5}>Code Editor</NavItem>
                        </LinkContainer>
                        <NavItem className="navbar-no-hover-bg" href="mailto:t.spaulding11@gmail.com" eventKey={6}>
                            <img className="navbar-image-link" src={require('file-loader!../img/gmail.png')} />
                        </NavItem>
                        <NavItem className="navbar-no-hover-bg" href="mailto:t.spaulding11@gmail.com" eventKey={7}>
                            <img className="navbar-image-link" src={require('file-loader!../img/hangouts.png')} />
                        </NavItem>
                        <NavItem className="navbar-no-hover-bg" href="https://www.facebook.com/tspaulding2" eventKey={8}>
                            <img className="navbar-image-link" src={require('file-loader!../img/facebook.png')} />
                        </NavItem>
                        <NavItem className="navbar-no-hover-bg" href="https://www.linkedin.com/in/tspaulding" eventKey={9}>
                            <img className="navbar-image-link" src={require('file-loader!../img/linkedin.png')} />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
});

module.exports = NavBar;