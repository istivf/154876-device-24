var link = document.querySelector(".contact-us-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".login-form");
var contactName = popup.querySelector("[name=contact-name]");
var email = popup.querySelector("[name=e-mail]");
var message = popup.querySelector("[name=message]");
var map = document.querySelector(".map-img");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("contactName");
} catch {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        contactName.value = storage;
        password.focus();
    } else {
        contactName.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!contactName.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("contactName", "contactName.value");

        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27)  {
        if (popup.classList.contains("modal-show") || mapPopup.classList.contains("modal-show")) {
             evt.preventDefault();
             popup.classList.remove("modal-show");
             mapPopup.classList.remove("modal-show");
        }
    }
});

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});
