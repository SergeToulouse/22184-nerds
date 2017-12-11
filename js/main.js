var link = document.querySelector(".write-us-open");
        
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".btn-close");

var login = popup.querySelector("[name=Your-name]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("write-us-show")) {
            popup.classList.remove("write-us-show");
        }
    }
});