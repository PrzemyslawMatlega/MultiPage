const carouselContainer = document.querySelector('.carousel__container')
const slides = document.querySelectorAll('.proofSlide');

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let counter= 1;
let size = () => {
     return slides[0].clientWidth;
}

carouselContainer.style.transform = `translateX(${(-size()*counter)}px)`;

nextBtn.addEventListener('click', () =>{
    if (counter >= slides.length -1) return;
    carouselContainer.style.transition = "transform 0.4s ease"
    counter++;
    carouselContainer.style.transform = `translateX(${(-size()*counter)}px)`;
});
function nextSlide (){
    if (counter <= 0) return;
    carouselContainer.style.transition = "transform 0.4s ease"
    counter--;
    carouselContainer.style.transform = `translateX(${(-size()*counter)}px)`;
}

prevBtn.addEventListener('click', nextSlide);


carouselContainer.addEventListener('transitionend',()=>{

    if(slides[counter].classList.contains('lastClone')){
        carouselContainer.style.transition = "none";
        counter=slides.length-2;
        carouselContainer.style.transform = `translateX(${(-size()*counter)}px)`;
    }
})
carouselContainer.addEventListener('transitionend',()=>{
    if(slides[counter].classList.contains('firstClone')){
        carouselContainer.style.transition = "none";
        counter=slides.length-counter;
        carouselContainer.style.transform = `translateX(${(-size()*counter)}px)`;
    }
})

window.addEventListener('resize', ()=>{
    carouselContainer.style.transition = "none";
    carouselContainer.style.transform = `translateX(${(-size()*counter)}px)`;
})

// window.setInterval(nextSlide,3000)