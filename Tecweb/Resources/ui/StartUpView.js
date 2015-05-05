function StartUpView () {
  var mainWindow = Ti.UI.createWindow({
      backgroundImage :"images/bg1_5.jpg"
  });
  
  var backBtn = Ti.UI.createImageView({
      backgroundImage :"images/back.png",
      width : 40,
      height : 30,
      top : 10,
      left : 10,
  });
  
  var titleLabel = Ti.UI.createLabel({
      text : "Start UP",
      color : "white",
      font:{
          fontSize : "30"
      },
      top : "10dp"
  });
  
  backBtn.addEventListener("click", function() {
    var login = require("ui/LoginView");
    new login().open({transition : Titanium.UI.iPhone.AnimationStyle.CURL_DOWN}); 
  });
  
  mainWindow.add(backBtn);
  mainWindow.add(titleLabel);
  return mainWindow;
}

module.exports = StartUpView;