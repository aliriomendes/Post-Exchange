var PlatformStyles = function() {
    var osname = Ti.Platform.osname,
        version = Ti.Platform.version,
        height = Ti.Platform.displayCaps.platformHeight,
        width = Ti.Platform.displayCaps.platformWidth;

    var iphone5Styles = {
        backgroundImage : '/images/bg1_5.jpg',
        textFieldtbackgroundImage : '/images/textfieldBG.png',
        backBtnImage : '/images/back.png',
        textAreatbackgroundImage : '/images/textareaBG@2x.png',
        cameraImage : '/images/cameraImage@2x.png',
        mainViewTop: 20,
    };

    var ipadStyles = {
        backgroundImage : '/images/bg1_5.jpg',
        textFieldtbackgroundImage : '/images/textfieldBG.png',
        backBtnImage : '/images/back.png',
        textAreatbackgroundImage : '/images/textareaBG@2x.png',
        cameraImage : '/images/cameraImage@2x.png',
        mainViewTop: 20,
    };

    var androidStyles = {
        backgroundImage : '/images/bg1_5.jpg',
        textFieldtbackgroundImage : '/images/textfieldBG.png',
        backBtnImage : '/images/back.png',
        textAreatbackgroundImage : '/images/textareaBG@2x.png',
        cameraImage : '/images/cameraImage@2x.png',
        mainViewTop: 0,
    };

    function getPlatform() {
        return osname;
    }
    PlatformStyles.platformHeight = height;
    PlatformStyles.platformWidth = width;
    
    PlatformStyles.getStyles = function() {
        var platform = getPlatform();
        console.log(height);
        switch(platform) {
        case 'iphone':
            return iphone5Styles;
        case 'ipad':
            return ipadStyles;
        case 'android':
            return androidStyles;
        }
    };

    return PlatformStyles;
};

module.exports = PlatformStyles;

