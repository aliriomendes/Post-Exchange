function LoginView() {
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
	    text: "Post Exchange",
	    top : 5,
	    font : {
	       fontSize: "34dp", 
	       fontFamily: styles.fontFamelyAlways
	    },
	    shadowColor:"black",
	    shadowOffset:{x:1,y:1},
	    color : "white",
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
        title: "Login",
        bottom : 0,
        right : 0,
        font : {
           fontSize: "30dp",
           fontFamily: styles.fontFamelyAlways       
        },
        color : "brown",
        backgroundColor : 'transparent'
    });
    
    var createAccountBtn = Ti.UI.createButton({
        title: "Create Account",
        bottom : 20,
        left : 30,
        font : {
           fontSize: "30dp",
           fontFamily: styles.fontFamelyAlways       
        },
        color : "brown",
        backgroundColor : 'transparent',
    });
    loginBtn.addEventListener("click", function(e){
        var Login = require('ui/StartUpView');
        new Login().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
        
    });
    
    createAccountBtn.addEventListener("click", function(e){
        var CreateAccount = require('ui/CreateAccountView');
        new CreateAccount().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
        
    });
	centerViewsContainer.add(loginBtn);
	centerViewsContainer.add(passwordTF);
	centerViewsContainer.add(usernameTF);
	mainView.add(centerViewsContainer);
	mainView.add(createAccountBtn);
	mainView.add(titleLabel);
    mainWindow.add(mainView);
	return mainWindow;
}

module.exports = LoginView;

