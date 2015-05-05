function LoginView () {
  var mainWindow = Ti.UI.createWindow({
      backgroundImage :"images/bg1_5.jpg"
  });
  
  var titleLabel = Ti.UI.createLabel({
      text : "Post Exchange",
      color : "white",
      font:{
          fontSize : "30"
      },
      top : "10dp"
  });
  
  var centerView = Ti.UI.createView({
      top:200,
      width :250,
      height : 150,
      borderColor : "red",
      layout : "vertical"
  });
  var usernameTf = Ti.UI.createTextField({
      hintText : "Username",
      backgroundImage : "images/textFieldBG.png",
      width : Ti.UI.FILL,
      height : 40
  });
  var passwordTf = Ti.UI.createTextField({
      hintText : "Password",
      backgroundImage : "images/textFieldBG.png",
      width : Ti.UI.FILL,
      passwordMask : true,
      top: 10,
      height : 40
  });
  
  
  var button = Ti.UI.createButton({
      title : "Login",
      height : 40,
      width : 80,
      right :10,
      color : "brown"
  });
  
  
  button.addEventListener("click", function(){
      var startUp = require("ui/StartUpView");
      new startUp().open({transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP});
  });
  
  
  centerView.add(usernameTf);
  centerView.add(passwordTf);
  centerView.add(button);
  
  mainWindow.add(centerView);
  mainWindow.add(titleLabel);
  return mainWindow;
}

module.exports = LoginView;