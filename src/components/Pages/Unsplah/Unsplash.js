var React = require('react');
var UnsplashHelpers = require('../../../Utils/UnsplashHelpers');
var UnsplashImageContainer = require('./UnsplashImageContainer');
var Common = require('../../../libs/Common');

var Unsplash = React.createClass({
    getInitialState : function(){
        return {
            imageList: [],
            numImages: 9
        }
    },
    unsplashImagePreUrl: "https://unsplash.it/400/600?image=",
    getUnsplashList: function(callback){
        UnsplashHelpers.getUnsplashList().then(function(data){
            callback(data);
        });
    },
    grabRandomImageFromList(data){
        var min = 0;
        var max = data.length;

        var rand = Math.floor((Math.random() * max) + min);

        return data[rand];
    },
    getUnsplashImageList(data){
        var imageList = [];

        for(var i=0; i<this.state.numImages; i++){
            var rand = this.grabRandomImageFromList(data);
            imageList.push(this.unsplashImagePreUrl + rand.id);
        }

        this.setState({
            imageList: imageList
        });
    },
    componentDidMount: function(){
        Common.pageFadeIn(document.querySelector(".UnsplashPage"));
        this.getUnsplashList(function(data){
            this.getUnsplashImageList(data);
        }.bind(this));
    },
    render: function(){
        var imageGrid = [];

        for(var i=0; i<this.state.imageList.length; i++){
            imageGrid.push(<UnsplashImageContainer key={i} source={this.state.imageList[i]}/>);
        }

        return(
            <div style={styles.container} className="UnsplashPage container">
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>Grab a new Desktop Background Here</h6>
                    <h3>Unsplash Images</h3>
                </div>

                <p style={{textAlign: 'center', color: '#1761A0', marginBottom: '60px', fontWeight: 'bold', fontSize: '1.1em'}}>
                    Click an image to see a larger version
                </p>

                {imageGrid}
            </div>
        )
    }
});

module.exports = Unsplash;

var styles = {
    container: {
        opacity: '0'
    }
}