function AddPostView() {
    var module = require('ui/PlatformStyles');
    var styles = new module().getStyles();
    var mainWindow = Ti.UI.createWindow({
    });

    var mainView = Ti.UI.createView({
        top : styles.mainViewTop,
        backgroundImage : styles.backgroundImage,
        width : Ti.UI.FILL,
        height : Ti.UI.FILL,
    });

    var titleLabel = Ti.UI.createLabel({
        text : "Add A Post",
        top : 5,
        font : {
            fontSize : "34dp",
            fontFamily : "Always In My Heart"
        },
        shadowColor : "black",
        shadowOffset : {
            x : 1,
            y : 1
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
        backgroundImage : styles.textAreatbackgroundImage,
        top : 170,
        width : "80%",
        height : 200
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
        width : styles.backBtnWidth,
    });
    var photoBtn = Ti.UI.createImageView({
        image : styles.cameraImage,
        bottom : 60,
        right : 30,
        font : {
            fontSize : "20dp",
        },
        color : "brown",
        backgroundColor : 'transparent'
    });
    
    
    var actInd = Ti.UI.createActivityIndicator({
        height:50, 
        width:50, 
        style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN,  
        top:250,
        left:130
    });
    var label = Titanium.UI.createLabel({
        text: "upload in progress",
        color: '#FFFFFF',
        left: 90, 
        top:200,  
        height:50
    });
    
    photoBtn.addEventListener("click", function(e) {
        if (postTitleTF.value !== '' && postCommentTA.value !== '') {
            Titanium.Media.openPhotoGallery({
                success : function(event) {

                    if (event.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {

                        //the image
                        image = event.media;
                        tempImageView = Titanium.UI.createImageView({
                            image : image
                        });
                        image2 = tempImageView.toImage();

                        //info to post
                        dataToSend = {
                            media : image2,
                            title : postTitleTF.value,
                            tip : postCommentTA.value,
                            uid : Ti.App.Properties.getString('userID')
                        };
                        
                        xhr = Titanium.Network.createHTTPClient();
                        xhr.open("POST", "http://aliriomendes.com/workshop/api.php?mode=upload");
                        xhr.onload = function() {
                            alert(this.responseText);
                            

                            postTitleTF.value = '';
                            postCommentTA.value = '';
                        };
                        xhr.send(dataToSend);
                    }

                },
                cancel : function() {
                    alert('cancelled');
                },
                error : function(e) {
                    alert('error');
                },
                mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
                allowEditing : true

            });
        }
    });

    var addImageBtn = Ti.UI.createButton({
        title : "Add Image",
        bottom : 60,
        left : 30,
        font : {
            fontSize : "20dp",
        },
        color : "brown",
        backgroundColor : 'transparent'
    });

    backBtn.addEventListener("click", function(e) {
        var newWindow = require('ui/StartUpView');
        new newWindow().open({
            transition : Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
        });
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