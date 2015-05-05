function loadLatest(CurrentTable, actInd){ 
	

	var xhr, jsonObject, userId, title,tipTitle, tip, id, data, i, image,TipContainer,imageContainer, Star;
	
	//Create the request
	xhr = Titanium.Network.createHTTPClient();
	// Set the URL 
	xhr.open("GET", "http://aliriomendes.com/workshop/api.php?mode=latest");
	//On success do this
	xhr.onload = function () {
	//initialize array
	data = [];
	
	try {
		    
	    jsonObject = JSON.parse(this.responseText);
	    //Ti.API.info(jsonObject);	    
		
	    //create table rows
	    for (i = 0; i < jsonObject.Result.length; i += 1) {
	       
	        //get info from the json
	        id = jsonObject.Result[i].id;
	        userId = jsonObject.Result[i].userId;
	        title = jsonObject.Result[i].title;
	        tip = jsonObject.Result[i].tip;
	        image = jsonObject.Result[i].image;
			
			//the image
			imageContainer = Ti.UI.createImageView({
				width:250,
				height:250,
				top:0,
				left:0,
				image: 'http://aliriomendes.com/workshop/images/'+image
			});
			//title container
			TipContainer = Ti.UI.createView({
				width:250,
				height:85,
				backgroundColor: '#000',
				opacity: 0.6,
				bottom:30,
				left:0
			});
			//the title
			tipTitle = Ti.UI.createLabel({
				width:245,
				height:80,
				text: title+'   \n View Tip '	,
				backgroundColor: 'transparent',				
				bottom:30,
				left:0,
				font: { fontSize: 32, fontFamily:"Always In My Heart" },				
				color: '#FFFFFF',
				shadowColor:'#000',
				textAlign: 'center',
				shadowOffset:{x:1,y:1},
				opacity: 0.9								
			});
			//the row
			data[i] = Ti.UI.createTableViewRow({		
				height:280,
				width:250,
				color:'#000000',
				backgroundColor:'transparent',
				customId: id,
				customTitle: title,
				customTip: tip,
				customImage: image
			});
			data[i].add(imageContainer);			
			data[i].add(TipContainer);
			data[i].add(tipTitle);
			actInd.hide();
		}//for
		
		//load more row
		data[i+1] = Ti.UI.createTableViewRow({
				title: 'Load More',//title , 
				height:45,
				width:200,
				color:'#FFF',
				backgroundColor:'#666',
				customId: '0'				
		});
		
		
		CurrentTable.setData(data); 
				
	} catch (e) {
	   
	   //Ti.API.info(e);
	   data[0] = Ti.UI.createTableViewRow({
				title: 'ERROR',//title , 
				height:45,
				width:200,
				color:'#000000',
				backgroundColor:'#990000'
		});
		CurrentTable.setData(data);
		actInd.hide();
	    
	}
	
};
	//send the request	
	xhr.send();

	
}
exports.loadLatest = loadLatest;



