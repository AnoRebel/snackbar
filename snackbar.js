const snackbar = document.querySelector(".snack");
const click = document.querySelector("#snack");
const speed = 3000;
var seconds = speed / 1000;

function removeFadeOut(el, speed) {
    el.style.transition = "opacity " + seconds + "s ease";

    el.style.opacity = 0;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, speed);
}

click.addEventListener("click", function () {
    snackbar.style.transition = "opacity " + seconds + "s ease";
    snackbar.style.visibility = "visible";
    snackbar.style.opacity = 1;
    setTimeout(function () {
        removeFadeOut(snackbar, speed);
    }, 8000);
});

snackbar.addEventListener("click", function(e) {
    var div = e.target.parentNode;
    div.style.transition = "opacity " + seconds + "s ease";
    div.style.opacity = 0;
    setTimeout(function() {
        div.parentNode.removeChild(div);
    }, speed);
});