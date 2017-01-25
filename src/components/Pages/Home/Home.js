var React = require('react');
var ExperienceGridItem = require('./ExperienceGridItem');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var LastContainerBottomMargin = require("../../../styles/CustomStyles").LastContainerBottomMargin;

var Main = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>Home of Thomas Spaulding</h6>
                    <h3>About Me</h3>
                </div>

                <div className="container">
                    <Col xs={12} sm={3} md={2}>
                        <img style={styles.profileImage} className="profileImage" src={require('file-loader!../../../img/me.jpg')}/>
                    </Col>
                    <Col xs={12} sm={9} md={10}>
                        <p>
                            I came to appreciate the fields of Mobile/Web Development while working as an Assistant Web Enginerring Technician
                            with the Air Force Institute of Technology. The things I could make and do within the field astounded me. I love
                            constantly being presented with the opportunity to ascertain new information, increase my knowledge, and find a
                            new challenge. Since my time with the Air Force Institute of Technology I have honed my programming skills, learned
                            how to work with small and large teams and work with several different industries such as Carbon Manufacturing, Consulting,
                            Data Warehousing, Education, and Marketing.
                        </p>
                        <p>
                            Outside my professional life I enjoy snowboarding, mountain biking, backpacking, camping, and hiking. My immediate
                            family consists of my wife who is also my best friend, a Beagle named Nugget and two cats named Milo and Lucy.
                        </p>
                    </Col>
                </div>

                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>What I Have Been Up To</h6>
                    <h3>Work History</h3>
                </div>

                <div style={LastContainerBottomMargin}>
                    <Col xs={12} sm={6} md={4}>
                        <ExperienceGridItem
                            icon={require("file-loader!../../../img/ra.png")}
                            title="Real Art"
                            job="Web & Mobile Developer"
                            timePeriod="October 2014 - Current"
                            desc="Responsible for each assigned project's look-and-feel, and is expected to uphold the company's high standard
                            of design and execution."
                            buttonColor="#DA291C"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <ExperienceGridItem
                            icon={require("file-loader!../../../img/sogeti.jpg")}
                            title="Sogeti"
                            job="Consultant/Developer"
                            timePeriod="January 2013 - October 2014"
                            desc="Work in partnership with various clients, advising them how to use information technology in order to meet
                            their business goals and objectives. As a consultant with a strong development background I work to improve many
                            various applications and mobile apps to improve the structure and efficiency of an organization."
                            buttonColor="#EC4630"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <ExperienceGridItem
                            icon={require("file-loader!../../../img/morgan.jpg")}
                            title="Morgan AM&T"
                            job="Java Developer"
                            timePeriod="April 2011 - December 2012"
                            desc="Developed Java Web-Apps that aided in production of various carbon products."
                            buttonColor="#A9DB44"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <ExperienceGridItem
                            icon={require("file-loader!../../../img/afit_cover.jpg")}
                            title="Air Force Institute of Technology"
                            job="Engineering Technician"
                            timePeriod="April 2009 - August 2010"
                            desc="Aid in the development of various software packages that enhanced the student experience."
                            buttonColor="#94938E"/>
                    </Col>
                </div>
            </div>
        )
    }
});

module.exports = Main;

var styles = {
    profileImage: {
        width: '100%',
        height: 'auto',
    }
};