let showOrHidePhotoButton = document.querySelector(".js-showOrHidePhotoButton");
console.log(showOrHidePhotoButton);
let hiddenPhoto = document.querySelector(".image--hiddenPhoto");
let photoState = document.querySelector(".js-photoState");

showOrHidePhotoButton.addEventListener("click", () => {

    hiddenPhoto.classList.toggle("image--hiddenPhoto");

    photoState.innerText = hiddenPhoto.classList.contains("image--hiddenPhoto") ? "Pokaż" : "Ukryj";
    
});

