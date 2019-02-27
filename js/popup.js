var link = document.querySelector(".contact-us-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var contactName = popup.querySelector("[name=contact-name]");
var form = popup.querySelector(".login-form");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    contactName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
})

form.addEventListener("submit", function () {
    console.log("работает")
})
