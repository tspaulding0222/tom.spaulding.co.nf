var React = require('react');
var ExperienceGridItem = require('./ExperienceGridItem');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var LastContainerBottomMargin = require("../styles/CustomStyles").LastContainerBottomMargin;

var Main = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="container jumbotron">
                    <h3>Home of Thomas Spaulding</h3>
                </div>
                <div className="container">
                    <h4>About Me</h4>
                    <p>
                        I came to appreciate the field of Development while working as an engineering technician at
                        AFIT.
                        The differences that I could make and potential within the field astounded me.
                        I love constantly being presented with the opportunity to ascertain new information and increase
                        my knowledge.
                        My work history has allowed me to hone my programming skills, taught me how to work as a team on
                        a
                        large project and gave me insight as to what is expected within this field and industry.
                    </p>
                </div>

                <div style={LastContainerBottomMargin} className="container">
                    <h4>Experience</h4>

                    <Col xs={12} md={8}>
                        <ExperienceGridItem
                            icon={require("file-loader!../img/realart.png")}
                            title="Real Art"
                            job="Web Developer/Mobile Developer"
                            timePeriod="October 2014 - Current"
                            desc="Responsible for each assigned project's look-and-feel, and is expected to uphold the company's high standard of design and execution."/>
                        <ExperienceGridItem
                            icon={require("file-loader!../img/sogeti.png")}
                            title="Sogeti"
                            job="Consultant/Developer"
                            timePeriod="January 2013 - October 2014"
                            desc="Work in partnership with various clients, advising them how to use information technology in order to meet their business goals and objectives. As a consultant with a strong development background I work to improve many various applications and mobile apps to improve the structure and efficiency of an organization."/>
                        <ExperienceGridItem
                            icon={require("file-loader!../img/morgan.png")}
                            title="Morgan AM&T"
                            job="Java Developer"
                            timePeriod="April 2011 - December 2012"
                            desc="Developer Java Web-Apps that aided in production of various carbon products."/>
                        <ExperienceGridItem
                            icon={require("file-loader!../img/afit.png")}
                            title="Air Force Institute of Technology"
                            job="Engineering Technician"
                            timePeriod="April 2009 - August 2010"
                            desc="Aid in the development of various software packages that enhanced the student experience.afi"/>
                    </Col>
                </div>
            </div>
        )
    }
});

module.exports = Main;