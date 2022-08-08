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
})
