const CAROUSEL_IMG = document.querySelector(".carousel__img")
const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
const CAROUSEL_BACK = document.querySelector(".carousel__backButton")

const IMAGES = ["https://placekitten.com/300", "https://picsum.photos/300/300", "https://loremflickr.com/300/300", "https://baconmockup.com/300/300", "https://placebeard.it/300x300", "https://placebear.com/300/300"]


var index = 0
CAROUSEL_IMG.src = IMAGES[index]

CAROUSEL_FORWARD.addEventListener("click", shuffleForward)
CAROUSEL_BACK.addEventListener("click", shuffleBack)

function shuffleForward(event){
    index++
    if (IMAGES.length === index){
        index = 0
    }

    
    CAROUSEL_IMG.src = IMAGES[index]
}

function shuffleBack(event){
    index--
    if (index < 0){
        index = IMAGES.length - 1
    }

    CAROUSEL_IMG.src = IMAGES[index]
}