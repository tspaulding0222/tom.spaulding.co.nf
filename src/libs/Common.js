var TweenMax = require('./TweenMax.min.js');

var Common = {
    pageFadeIn: function(page){
        TweenMax.to(page, 1, {opacity: 1, ease: Power4.easeIn});
    },
    classFadeIn: function(componentClass, callback){
        TweenMax.to(componentClass, 1, {opacity: 0, ease: Power4.easeOut, onComplete: function(){
            if(callback){
                callback();
            }
        }});
    },
    componentFadeOut: function(componentClass, callback){
        TweenMax.to(componentClass, 1, {opacity: 0, ease: Power4.easeOut, onComplete: function(){
            if(callback){
                callback();
            }
        }});
    }
};

module.exports = Common;