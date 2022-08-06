// const prev = document.querySelector(".btnDown");
// let num = 0;
// let active = 0;

// prev.addEventListener("click", function(e) {
//     frame.style.transform = `rotateY(${deg * ++num}deg)`;

//     if(active === 0) {
//         active = len - 1;
//     }else {
//         active--;
//     }

//     for(let el of list) {
//         el.classList.remove("on");
//     }
//     list[active].classList.add("on");
// })

const frame = document.querySelector("slider");
const down = document.querySelector(".btnDown");
const len = list.length;
const deg = 360 / len;
const names = ["planet1","planet2","planet3","planet4","planet5","planet6","planet7","planet8"]

for(let i = 0; i < len; i++) {
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
}

let num = 0;
let active = 0;

down.addEventListener("click",function(e) {
    frame.style.transfrom = `rotateY(${deg* ++num}deg)`;

    if (active === 0) {
        active = len -1;
    }else {
        active--;
    }

    for(let el of list) {
        el.classlist.remove("on");
    }
    list[active].classlist.add("on");
})
