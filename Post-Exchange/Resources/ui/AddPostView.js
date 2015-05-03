function AddPostView() {
    var module = require('ui/PlatformStyles');
    var styles = new module().getStyles();
	var mainWindow = Ti.UI.createWindow({
	    exitOnClose : true
	});
	
	var mainView = Ti.UI.createView({
	    top : styles.mainViewTop,
	    backgroundImage : styles.backgroundImage,
	    width : Ti.UI.FILL,
	    height : Ti.UI.FILL,
	});
	
	var titleLabel = Ti.UI.createLabel({
	    text: "Add A Post",
	    top : 15,
	    font : {
	       fontSize: "20dp",      
	    },
	    color : "white"
	});
	
	var postTitleTF = Ti.UI.createTextField({
        hintText : "Post Title",
        width : "80%",
        top : 100,
        height : 40,
        color : "black",
        backgroundImage : styles.textFieldtbackgroundImage,
    });
    var postContainer = Ti.UI.createView({
            backgroundImage: styles.textAreatbackgroundImage,
            top: 170,
            width : "80%",
            height: 200
        });
    
    var postCommentTA = Ti.UI.createTextArea({
        hintText : "Post Comment",
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
        color : "black",
        backgroundColor : "transparent"
    });
	var backBtn = Ti.UI.createImageView({
        image : styles.backBtnImage,
        top : 10,
        left : 10,
        //width : 40,
    });
    var photoBtn = Ti.UI.createImageView({
        image: styles.cameraImage,
        bottom : 60,
        right : 30,
        font : {
           fontSize: "20dp",      
        },
        color : "brown",
        backgroundColor : 'transparent'
    });
    
    var addImageBtn = Ti.UI.createButton({
        title: "Add Image",
        bottom : 60,
        left : 30,
        font : {
           fontSize: "20dp",      
        },
        color : "brown",
        backgroundColor : 'transparent'
    });
    
	backBtn.addEventListener("click", function(e){
        var newWindow = require('ui/StartUpView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
    mainView.add(photoBtn);
    mainView.add(addImageBtn);
    postContainer.add(postCommentTA);
    mainView.add(postTitleTF);
    mainView.add(postContainer);
	mainView.add(backBtn);
	mainView.add(titleLabel);
    mainWindow.add(mainView);
	return mainWindow;
}

module.exports = AddPostView;