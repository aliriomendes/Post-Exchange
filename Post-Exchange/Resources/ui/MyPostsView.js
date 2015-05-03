function MyPostsView() {
    var module = require('ui/PlatformStyles');
    var styles = new module().getStyles();
    var mainWindow = Ti.UI.createWindow({
        
    });
    
    var mainView = Ti.UI.createView({
        top : styles.mainViewTop,
        backgroundImage : styles.backgroundImage,
        width : Ti.UI.FILL,
        height : Ti.UI.FILL
    });
    
    var titleLabel = Ti.UI.createLabel({
        text: "My Posts",
        top : 5,
        font : {
           fontSize: "34dp", 
           fontFamily:"Always In My Heart" 
        },
        shadowColor:"black",
        shadowOffset:{x:1,y:1},
        color : "white"
    });
    var backBtn = Ti.UI.createImageView({
        image : styles.backBtnImage,
        top : 10,
        left : 10,
        //width : 40,
    });
    
    
    backBtn.addEventListener("click", function(e){
        var newWindow = require('ui/StartUpView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
    
    
    mainView.add(backBtn);
    mainView.add(titleLabel);
    mainWindow.add(mainView);
    return mainWindow;
}

module.exports = MyPostsView;