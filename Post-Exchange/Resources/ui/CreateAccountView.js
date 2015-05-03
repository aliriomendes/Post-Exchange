function CreateAccountView() {
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
	var centerViewsContainer = Ti.UI.createView({
	    width : 260,
	    height : 140,
	    bottom : 200,
	    //borderColor : "red"
	});
	
	var titleLabel = Ti.UI.createLabel({
	    text: "Create Account",
	    top : 15,
	    font : {
	       fontSize: "20dp",      
	    },
	    color : "white"
	});
	
	var usernameTF = Ti.UI.createTextField({
	    hintText : "Username",
	    width : Ti.UI.FILL,
	    top : 0,
	    height : 40,
	    color : "black",
	    autocapitalization : false,
	    backgroundImage : styles.textFieldtbackgroundImage,
	});
	var passwordTF = Ti.UI.createTextField({
        hintText : "Password",
        passwordMask : true,
        width : Ti.UI.FILL,
        top : 60,
        height : 40,
        color : "black",
        autocapitalization : false,
        backgroundImage : styles.textFieldtbackgroundImage,
    });
    var loginBtn = Ti.UI.createButton({
        title: "Create",
        bottom : 0,
        right : 0,
        font : {
           fontSize: "20dp",      
        },
        color : "brown",
        backgroundColor : 'transparent'
    });
    var backBtn = Ti.UI.createImageView({
        image : styles.backBtnImage,
        top : 10,
        left : 10,
        //width : 40,
    });
    backBtn.addEventListener("click", function(e){
        var Window = require('ui/LoginView');
        new Window().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
    
    
    loginBtn.addEventListener("click", function(e){
        var Window = require('ui/LoginView');
        new Window().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
	centerViewsContainer.add(loginBtn);
	centerViewsContainer.add(passwordTF);
	centerViewsContainer.add(usernameTF);
	mainView.add(centerViewsContainer);
	mainView.add(backBtn);
	mainView.add(titleLabel);
    mainWindow.add(mainView);
	return mainWindow;
}

module.exports = CreateAccountView;