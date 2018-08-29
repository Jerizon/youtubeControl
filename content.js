console.log("Chrome Extension Ready to Go");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, response) {
  let videoSpeed = document.getElementsByTagName("video")[0].playbackRate;
  if(message === "faster"){
    document.getElementsByTagName("video")[0].playbackRate = videoSpeed + .25;
  } else if (message === "slower") {
    if(videoSpeed >0) {
      document.getElementsByTagName("video")[0].playbackRate = videoSpeed - .25;
    }
  } else if (message === "standard") {
    document.getElementsByTagName("video")[0].playbackRate = 1;
  } 
  response(document.getElementsByTagName("video")[0].playbackRate);
}