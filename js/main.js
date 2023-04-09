// VARIABLES
const elLoader = document.querySelector(".js-loader"),
elFormWrapper = document.querySelector(".js-form-wrapper"),
elForm = document.querySelector(".js-form"),
elInput = document.querySelector(".js-input"),
elButton = document.querySelector(".js-button"),
elTitle = document.querySelector(".js-title");

// LOADER
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none")
  }, 2000);
});

// FORM
elForm.addEventListener("submit", (e) => {
  authorName = elInput.value;
  e.preventDefault();
  elTitle.innerHTML = authorName;
  elFormWrapper.classList.add("submit");
});