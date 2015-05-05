function LatestView() {
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
        text: "Latest Posts",
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
        width : styles.backBtnWidth,
    });
    
    actInd = Ti.UI.createActivityIndicator({
            height:50, 
            width:50, 
            style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,  
            top:100,
            
    });
    mainView.add(actInd);
    actInd.show();
    //The table view
    LatestTable = Ti.UI.createTableView({
        width:250,
        left:30,
        top: 70,
        height:390,
        backgroundColor:'transparent', 
        color: '#83B93B',
        separatorColor:'transparent',
        style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
        editable:false
    });
    //load table row data
    data = require('/ui/latestApi').loadLatest(LatestTable,actInd);
    
    
    backBtn.addEventListener("click", function(e){
        var newWindow = require('ui/StartUpView');
        new newWindow().open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
    });
    
    mainView.add(LatestTable);
    mainView.add(backBtn);
    mainView.add(titleLabel);
    mainWindow.add(mainView);
    return mainWindow;
}

module.exports = LatestView;