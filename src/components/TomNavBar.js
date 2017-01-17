var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavItem = require('react-bootstrap/lib/NavItem');
var Nav = require('react-bootstrap/lib/Nav');
var LinkContainer = require('react-router-bootstrap/lib/LinkContainer');
var IndexLinkContainer = require('react-router-bootstrap/lib/IndexLinkContainer');

var NavBar = React.createClass({
    render: function () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Tom Spaulding
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to={{pathname: '/', query:{}}}>
                            <NavItem eventKey={1}>Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to={{pathname: '/frontEndTools', query:{}}}>
                            <NavItem eventKey={2}>Front End Tools</NavItem>
                        </LinkContainer>
                        <LinkContainer to={{pathname: '/androidTools', query:{}}}>
                            <NavItem eventKey={3}>Android Tools</NavItem>
                        </LinkContainer>
                        <LinkContainer to={{pathname: '/codeEditor', query:{}}}>
                            <NavItem eventKey={4}>Code Editor</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
});

module.exports = NavBar;