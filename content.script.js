chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle();
    }
})

var iframe = document.createElement('iframe'); 
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.transition = "width 1s";
iframe.frameBorder = "none";
iframe.src = chrome.extension.getURL("popup.html");
document.body.style.transition = "padding 1s";

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
        document.body.style.paddingRight ="400px";
    }
    else{
        iframe.style.width="0px";
        document.body.style.paddingRight ="0px";
    }
}

//;-moz-transition:width 2s;-webkit-transition:width 2s;-o-transition:width 2s;