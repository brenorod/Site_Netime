const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog.button")

button.onclick = function () {
    modal.showModal()
}

var player = document.getElementsByClassName("video-screen")[0];

function play(){
    player.Call(k);
}

function pause(){
    player.requestPause();
}


function retroceder(){
    player.currentTime -= 10;
}

function avancar(){
    player.currentTime += 10;
}

function fullscreen(){
    player.requestFullscreen();
}