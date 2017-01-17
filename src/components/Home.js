var React = require('react');

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
                        I came to appreciate the field of Development while working as an engineering technician at AFIT.
                        The differences that I could make and potential within the field astounded me.
                        I love constantly being presented with the opportunity to ascertain new information and increase my knowledge.
                        My work history has allowed me to hone my programming skills, taught me how to work as a team on a
                        large project and gave me insight as to what is expected within this field and industry.
                    </p>
                </div>

                <div className="container">
                    <h4>Experience</h4>

                    <div className="container">
                        <h5>Real Art</h5>
                    </div>

                </div>
            </div>
        )
    }
});

module.exports = Main;