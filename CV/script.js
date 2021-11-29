const vievBtn = document.querySelector(".viev-modal")
popup = document.querySelector(".popup")
close = document.querySelector(".close")

vievBtn.onclick =()=>{
    popup.classList.toggle("show")
}
close.onclick =()=>{
    vievBtn.click()
}
