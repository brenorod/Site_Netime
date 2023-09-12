
const button = document.querySelectorAll("button")
const modal = document.querySelectorAll("dialog")
const spanClose = document.querySelectorAll("span")

button.onclick = function () {
    modal.showModal()
}
spanClose.onclick = function (){
    modal.close()
}

