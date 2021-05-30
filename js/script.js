{
    const welcome = () => {
        console.log("Hello everyone");
    }

    welcome();

    const onShowOrHidePhotoClick = () => {
        const hiddenPhoto = document.querySelector(".image--hiddenPhoto");
        const photoState = document.querySelector(".js-photoState");
        hiddenPhoto.classList.toggle("image--hiddenPhoto");
        photoState.innerText = hiddenPhoto.classList.contains("image--hiddenPhoto") ? "Pokaż" : "Ukryj";
    }

    const init = () => {
        const showOrHidePhotoButton = document.querySelector(".js-showOrHidePhotoButton");
        showOrHidePhotoButton.addEventListener("click", onShowOrHidePhotoClick);
    }

    init()
}



