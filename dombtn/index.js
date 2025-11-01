var len = document.querySelectorAll(".btn").length;
for (let i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}
