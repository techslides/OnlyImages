chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.tabs.executeScript({
    	code: 'var body=document.getElementsByTagName("body")[0];var images=document.images;var div=document.createElement("div");function clickevent(img){var h=img.target.style.height;if(h==""){img.target.style.height=window.innerHeight+"px";window.body.scrollTop=img.target.offsetTop;console.log(img.target.offsetTop);}else{img.target.style.height="";}}for(var i=0;i<images.length;i++){var img=document.createElement("img");img.src=images.item(i).src;img.addEventListener("click",clickevent,false);div.appendChild(img);};body.innerHTML="";body.appendChild(div);'
  	});
});