let scrollYpos;
window.addEventListener("scroll", function() {
    scrollYpos = window.scrollY;
    console.log(scrollYpos);

    if(scrollYpos > 400) {
        const sunAnimate = document.querySelector(".sun");
        sunAnimate.classList.add("animate");
        console.log(sunAnimate);
    }

    if(scrollYpos > 800) {
        const sunAnimate = document.querySelector(".wrapper");
        sunAnimate.classList.add("on");
        console.log(sunAnimate);
    }

    if(scrollYpos > 830) {
        const sunAnimate = document.querySelector(".spaceship");
        sunAnimate.classList.add("on");
        console.log(sunAnimate);
    }

})

// function link() {
//     setTimeout(function() {
//         location.href = './mypage.html';
//     }, 8000);
// }

const btn = document.querySelector(".earth");
const img = document.querySelector(".img4>img");
console.log(img);
btn.addEventListener("click", function(){
    img.setAttribute("transform", "scale(3.0)");
    setTimeout(function() {
        location.href = './mypage.html';
    }, 8000);
    

});