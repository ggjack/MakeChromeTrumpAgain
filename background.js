var state=false;
var url=window.location.href;
url.toLoweCase();
var followImg= document.createElement("img");
img.src="images/trump.png"

var src=document.getElementById("header");

function toggle(){
	state=!state;
	if(state){
		chrome.browserAction.setIcon({path: "icon128.png"});		
	}
	else{
		chrome.browserAction.setIcon({path: "icon128off.png"});
	}
}


if (state && !url.includes("trump")){

}

$(document).mousemove(function(e) {
    	followImg.offset({
        left: e.pageX,
        top: e.pageY
    });
});


chrome.browserAction.onClicked.addListener(toggle);



