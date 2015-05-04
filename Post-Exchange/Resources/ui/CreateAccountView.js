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
	    top : 5,
        font : {
           fontSize: "34dp", 
           fontFamily:"Always In My Heart" 
        },
        shadowColor:"black",
        shadowOffset:{x:1,y:1},
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
    var CreateBtn = Ti.UI.createButton({
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
        width : styles.backBtnWidth,
    });
    backBtn.addEventListener("click", function(e){
        var Window = require('ui/LoginView');
        new Window().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
    
    
    CreateBtn.addEventListener("click", function(e){
        if(usernameTF.value !== '' && passwordTF.value !== ''){ 
           var loginCheck = 1;
           var username = usernameTF.value ;
           var password = passwordTF.value ;
            
            //check login credentials   
               var xhr = Titanium.Network.createHTTPClient(); 
                xhr.open("GET", "http://aliriomendes.com/workshop/api.php?mode=checkusercreate&user="+username);
                xhr.onload = function () {                      
                    loginCheck = this.responseText;         
                };
                xhr.send();
            
            
            setTimeout(function() {
                    if(loginCheck >0){
                        //user exists
                        alert('That username is already in use');
                    }else{
                        //create this new user
                         //create user then close this window
                            xhr = Titanium.Network.createHTTPClient(); 
                            xhr.open("GET", "http://aliriomendes.com/workshop/api.php?mode=createuser&user="+username+"&pass="+password);
                            xhr.onload = function () {                      
                                userID = this.responseText;         
                            };
                            xhr.send();
                            
                        setTimeout(function() {                         
                            //success
                                alert('account created!');
                        }, 500);
                        
                    }
                    
            }, 1500);
            
        }else{          
            alert('no user or pass');
        }
        /*var Window = require('ui/LoginView');
        new Window().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});*/
    });
	centerViewsContainer.add(CreateBtn);
	centerViewsContainer.add(passwordTF);
	centerViewsContainer.add(usernameTF);
	mainView.add(centerViewsContainer);
	mainView.add(backBtn);
	mainView.add(titleLabel);
    mainWindow.add(mainView);
	return mainWindow;
}

module.exports = CreateAccountView;
