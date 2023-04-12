const SLIDER_IMG = document.querySelector(".slider__img")
const SLIDER_FORWARD = document.querySelector(".slider__forwardButton")
const SLIDER_BACK = document.querySelector(".slider__backButton")

const S_IMAGES = ["https://placekitten.com/300", "https://picsum.photos/300/300", "https://loremflickr.com/300/300"]

var slider_index = 0
SLIDER_IMG.src = S_IMAGES[slider_index]

SLIDER_FORWARD.addEventListener("click", shuffleSlideForward)
SLIDER_BACK.addEventListener("click", shuffleSlideBack)

SLIDER_FORWARD.addEventListener("click", slideMover)
SLIDER_BACK.addEventListener("click", slideMoverBack)

function shuffleSlideForward(event){
    slider_index++
    if (S_IMAGES.length === slider_index){
        slider_index = 0;
    }
    SLIDER_IMG.src = S_IMAGES[slider_index]
}

function shuffleSlideBack(event){
    slider_index--
    if (slider_index < 0){
        slider_index = S_IMAGES.length - 1
    }

    SLIDER_IMG.src = S_IMAGES[slider_index]
}

// ANIMATION

 function slideMover(event){

     if (SLIDER_IMG.classList.contains("animatedSlide--moved")) {
         SLIDER_IMG.classList.remove("animatedSlide--moved")
     } else {
         SLIDER_IMG.classList.add("animatedSlide--moved")
     }

 }

 console.log(slideMover);
function slideMoverBack (event){
    if (SLIDER_IMG.classList.contains("animatedSlide--movedBack")) {
        SLIDER_IMG.classList.remove("animatedSlide--movedBack")
    } else {
        SLIDER_IMG.classList.add("animatedSlide--movedBack")
    }

}






//   setTimeout (slideMover, 1000);
//   setTimeout (slideMoverBack, 1000);



// const SLIDER_DIV = document.querySelector(".slider__img")
// const SLIDER_BACKBUTTON = document.querySelector(".slider__backButton")
// const SLIDER_FORWARDBUTTON = document.querySelector(".slider__forwardButton")

// SLIDER_FORWARDBUTTON.addEventListener("click", slideMover)
// SLIDER_BACKBUTTON.addEventListener("click", slideMoverBack )