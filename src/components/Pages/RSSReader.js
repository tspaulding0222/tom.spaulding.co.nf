var React = require('react');

var RssReader = React.createClass({
    setReaderIframeHeight: function(){
        var windowHeight = $(window).height();
        var navBarHeight = $(".navbar").height();

        var remainingHeight = windowHeight - navBarHeight;
        $(".rssReaderContainer").height(remainingHeight);
    },
    startWindowDetectionResize: function(){
        $(window).resize(this.setReaderIframeHeight());
    },
    componentDidMount: function(){
        this.setReaderIframeHeight();
        this.startWindowDetectionResize();
    },
    render: function () {
        return (
            <div className="rssReaderContainer" style={styles.container}>
                <iframe style={styles.iframe} src="https://digg.com/reader"></iframe>
            </div>
        )
    }
});

module.exports = RssReader;

var styles = {
    container:{
        width: '100%',
        display: 'flex',
        marginTop: '-21px',
        overflow: 'hidden'
    },
    iframe: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        flexGrow: '1',
        overflow: 'hidden'
    }
};