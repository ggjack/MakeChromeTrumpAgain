var state=false;
var followImg= document.createElement("img");
followImg.src="images/trump.png";

function toggle(){
	state=!state;
	if(state){
		chrome.browserAction.setIcon({path: "images/icon128.png"});		
	}
	else{
		chrome.browserAction.setIcon({path: "images/icon128off.png"});
	}
}
//		().appendChild(followImg);


/*chrome.webNavigation.onCompleted.addListener(function(){
	chrome.tabs.getCurrent(function (tab) {
    var tablink = tab.url;
	});
    if (state && !(tablink.indexOf("Trump") > -1 || tablink.indexOf("trump") > -1)){
	var src=document.createElement("div");
	//src.appendChild(followingImg); 
}
});
*/
/*
$(document).mousemove(function(e) {
    	$(followImg).css({left:e.pageX, top:e.pageY});
});
*/
	chrome.tabs.onMoved.addListener(function(){
	if(state){
		//var rand= Math.random();
		//if (rand<0.3) 	chrome.tabs.update(null,{url : "http://www.trump.com/"});
		//if (rand>=0.3 && rand<0.6)	chrome.tabs.update(null,{url : "https://www.donaldjtrump.com/"});
		//if (rand>=0.6 && rand<0.9)	chrome.tabs.update(null,{url : "https://en.wikipedia.org/wiki/Donald_Trump"});
		//if (rand>=0.9)	
		chrome.tabs.update(null,{url : "DonaldTrump/donaldtrump.html"});

}
});

chrome.browserAction.onClicked.addListener(toggle);
/*chrome.webRequest.onBeforeRequest.addListener(
function(e){
	if(state){return{
        redirectUrl : chrome.extension.getURL("DonaldTrump/donaldtrump.html")
	 };}
	else{ return;
		}
	 },
   {
 //      urls: ["*://*///*"]
//},
 //  ["blocking"]

//);



