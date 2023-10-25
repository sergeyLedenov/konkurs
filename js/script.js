//animation arrow
const arr1 = document.querySelector(".js-arr1");
const arr2 = document.querySelector(".js-arr2");

arr1.addEventListener("mouseenter", () => {
    arr1.src = "./img/arr2.png"

});
arr1.addEventListener("mouseleave", () => {
    arr1.src = "./img/arr2Use.png"
});

arr2.addEventListener("mouseenter", () => {
    arr2.src = "./img/arr.png"

});
arr2.addEventListener("mouseleave", () => {
    arr2.src = "./img/arrUse.png"
});

//change film
const fimmsArr = [
    {
        name: "kazaki",
        src: "./img/hq720.jpg",
        link: "https://sweet.tv/movie/21012-bezslavni-kripaki"
    }, 
    {
        name: "mstiteli",
        src: "./img/mstiteli.png",
        link: "https://uaserials.pro/2380-mesnyky.html"
    },
    {
        name: "transformeri",
        src: "./img/1300h820__2__1_1200x675.jpg",
        link: "https://sweet.tv/movie/26182-transformeri-chas-zvirobotiv"
    },
    {
        name: "nomeri",
        src: "./img/nomery-11-1.jpg",
        link: "https://sweet.tv/movie/20972-nomeri"
    }, 
    {
        name: "shidnyak",
        src: "./img/shidnyak-2.jpg",
        link: "https://sweet.tv/movie/20571-shidnyak"
    }, 
    {
        name: "dusha",
        src: "./img/1622322165_dusha.jpg",
        link: "https://uaserial.tv/movie-soul/ag"
    }
];
const changeImg = document.querySelector(".js-img");
const changeLink = document.querySelector(".js-link")
let isNow = 0

function goForward() {
    isNow++;
    if (isNow == fimmsArr.length) {
        isNow = 0
    }
    changeImg.src = fimmsArr[isNow].src;
    changeLink.href = fimmsArr[isNow].link;
}

function goBack() {
    isNow--;
    if (isNow == -1) {
        isNow = fimmsArr.length - 1
    }
    changeImg.src = fimmsArr[isNow].src;
    changeLink.href = fimmsArr[isNow].link;
}