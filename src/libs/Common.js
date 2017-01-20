var TweenMax = require('./TweenMax.min.js');

var Common = {
    pageFadeIn: function(page){
        TweenMax.to(page, 1, {opacity: 1, ease: Power4.easeIn});
    }
};

module.exports = Common;