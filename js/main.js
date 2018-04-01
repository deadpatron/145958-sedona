var formOn = document.querySelector(".form-container");
var seachButton = document.querySelector(".rooms-search-button");

formOn.classList.add("show-off");

seachButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  formOn.classList.toggle("show-off");
})
