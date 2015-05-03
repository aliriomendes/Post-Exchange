function StartUPView() {
    var module = require('ui/PlatformStyles');
    var styles = new module().getStyles();
	var mainWindow = Ti.UI.createWindow({
	    exitOnClose : true
	});
	
	var mainView = Ti.UI.createView({
	    top : styles.mainViewTop,
	    backgroundImage : styles.backgroundImage,
	    width : Ti.UI.FILL,
	    height : Ti.UI.FILL
	});
	
	var titleLabel = Ti.UI.createLabel({
	    text: "Post Exchange",
	    top : 15,
	    font : {
	       fontSize: "20dp",      
	    },
	    color : "white"
	});
	var backBtn = Ti.UI.createImageView({
        image : styles.backBtnImage,
        top : 10,
        left : 10,
        //width : 40,
    });
    
    var latestLabel = Ti.UI.createButton({
        title: "Latest",
        top : 150,
        font : {
           fontSize: "25dp",      
        },
        color : "brown",
        backgroundColor :"transparent",
    });
    
    var addLabel = Ti.UI.createButton({
        title: "Add",
        top : 200,
        font : {
           fontSize: "25dp",      
        },
        color : "brown",
        backgroundColor :"transparent",
    });
    
    var mypostLabel = Ti.UI.createButton({
        title: "My Posts",
        top : 250,
        font : {
           fontSize: "25dp",      
        },
        color : "brown",
        backgroundColor :"transparent",
    });
    
    var helpLabel = Ti.UI.createButton({
        title: "Help",
        top : 300,
        font : {
           fontSize: "25dp",      
        },
        color : "brown",
        backgroundColor :"transparent",
    });
    
    latestLabel.addEventListener("click", function(e){
        var newWindow = require('ui/LatestView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
    });
    
    addLabel.addEventListener("click", function(e){
        var newWindow = require('ui/AddPostView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
    });
    
    mypostLabel.addEventListener("click", function(e){
        var newWindow = require('ui/MyPostsView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
    });
    
    helpLabel.addEventListener("click", function(e){
        var newWindow = require('ui/HelpView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
    });
    
	backBtn.addEventListener("click", function(e){
        var Window = require('ui/LoginView');
        new Window().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
    
    mainView.add(latestLabel);
    mainView.add(addLabel);
    mainView.add(mypostLabel);
    mainView.add(helpLabel);
    
	mainView.add(backBtn);
	mainView.add(titleLabel);
    mainWindow.add(mainView);
	return mainWindow;
}

module.exports = StartUPView;