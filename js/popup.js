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
var nameField = document.querySelector("#contact-name");
var emailField = document.querySelector("#e-mail");
var sliderButtons1 = document.querySelectorAll(".slider1-on");
var sliderButtons2 = document.querySelectorAll(".slider2-on");
var sliderButtons3 = document.querySelectorAll(".slider3-on");
var slider1 = document.querySelector(".slider");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");

var deliveryButton = document.querySelector(".delivery-button");
var warrantyButton = document.querySelector(".warranty-button");
var creditButton = document.querySelector(".credit-button");
var delivery = document.querySelector(".delivery-service");
var warranty = document.querySelector(".warranty-service");
var credit = document.querySelector(".credit-service");

 window.onload = function() {
     slider2.classList.add("hidden");
     slider3.classList.add("hidden");
     deliveryButton.classList.add("service-button-active");
     warranty.classList.add("hidden");
     credit.classList.add("hidden");
 }

sliderButtons1.forEach.call(sliderButtons1, function(sliderButton1) {
    sliderButton1.addEventListener("click", function (evt) {
        slider1.classList.remove("hidden");
        slider2.classList.add("hidden");
        slider3.classList.add("hidden");
    })
});

sliderButtons2.forEach.call(sliderButtons2, function(sliderButton2) {
    sliderButton2.addEventListener("click", function (evt) {
        slider2.classList.remove("hidden");
        slider1.classList.add("hidden");
        slider3.classList.add("hidden");
    })
});

sliderButtons3.forEach.call(sliderButtons3, function(sliderButton3) {
    sliderButton3.addEventListener("click", function (evt) {
        slider3.classList.remove("hidden");
        slider1.classList.add("hidden");
        slider2.classList.add("hidden");
    })
});

// ___________________


deliveryButton.addEventListener("click", function (evt) {
    deliveryButton.classList.add("service-button-active");
    delivery.classList.remove("hidden");
    warrantyButton.classList.remove("service-button-active");
    warranty.classList.add("hidden");
    creditButton.classList.remove("service-button-active");
    credit.classList.add("hidden");

})

warrantyButton.addEventListener("click", function (evt) {
    warrantyButton.classList.add("service-button-active");
    warranty.classList.remove("hidden");
    deliveryButton.classList.remove("service-button-active");
    delivery.classList.add("hidden");
    creditButton.classList.remove("service-button-active");
    credit.classList.add("hidden");
})

creditButton.addEventListener("click", function (evt) {
    creditButton.classList.add("service-button-active");
    credit.classList.remove("hidden");
    deliveryButton.classList.remove("service-button-active");
    delivery.classList.add("hidden");
    warrantyButton.classList.remove("service-button-active");
    warranty.classList.add("hidden");
})

// ------------

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
    if (!contactName.value) {
        contactName.classList.add("empty-field");
    }
    if (!email.value) {
        emailField.classList.add("empty-field");
    }
    if (!message.value) {
        message.classList.add("empty-field");
    }

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
