function BaseRequest( requestString , callback ){
    var xhr = Titanium.Network.createHTTPClient();   
        xhr.open("GET", "http:/aliriomendes.com/workshop/api.php?" + requestString);
        xhr.onload = function () { 
            callback(this.responseText);                
        };
        xhr.send();
}
module.exports = BaseRequest;