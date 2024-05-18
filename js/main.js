gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none reverse none",
});

let svgElement = document.querySelector("svg");
let mainElement = document.querySelector("main");

const tlSvg = gsap.timeline();
tlSvg.to(svgElement, {
    y: '9.9rem',
    scale: 0.15,
    scrollTrigger: {
        trigger: svgElement,
        scrub: 2,
        start: 1,
        endTrigger: mainElement,
        end: 'top top',
    },
}).to(svgElement, {
    scrollTrigger: {
        trigger: mainElement,
        pin: svgElement,
        pinSpacing: false,
        start: 'top top',
        endTrigger: mainElement,
        end: 'bottom top',
    }
});

let goodsRowElements = document.querySelectorAll(".goods__row");
let lastGoodsRowElement = document.querySelector(".goods__row:last-of-type");

goodsRowElements.forEach((row) => {
    gsap.to(row, {
        y: 350,
        scrollTrigger: {
            trigger: row,
            pin: true,
            pinSpacing: false,
            scrub: 2,
            start: 'top 20%',
            endTrigger: lastGoodsRowElement,
            end: 'bottom',
        },
    });
});

let couchImgElement = document.querySelector(".goods__image");
let goodsCouchElement = document.querySelector(".goods__couch");
let goodsNavbarElement = document.querySelector(".goods__navbar");
let goodsContainerElement = document.querySelector(".goods__container");
let bodyElement = document.querySelector("body");

gsap.to(couchImgElement, {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    scrollTrigger: {
        trigger: goodsCouchElement,
        start: `top ${goodsNavbarElement.clientHeight}`,
        end: 'bottom top',
        scrub: 3,
        pin: true,
        pinSpacing: true,
    },
})
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: goodsCouchElement,
        start: `top ${goodsNavbarElement.clientHeight}`,
        end: 'bottom top',
        scrub: 3,
    }
});
tl.to(bodyElement, {
    backgroundColor: '#e8e2da',
    color: '#2e2a27',
}).to(goodsContainerElement, {
    backgroundColor: '#e8e2da',
}, 0).to(goodsNavbarElement, {
    backgroundColor: '#e8e2da',
    borderBottom: '#2e2a27 1px solid'
}, 0).to(goodsRowElements, {
    backgroundColor: '#e8e2da',
}, 0);

let goodsTitleElements = document.querySelectorAll(".goods__title");

gsap.to(goodsTitleElements, {
    scale: 1,
    stagger: {
        amount: 2,
        from: 0,
    },
    scrollTrigger: {
        trigger: goodsTitleElements,
        toggleActions: 'play resume none reverse',
        start: 'top bottom',
        end: 'bottom top',
    },
});

let flowTitleElement = document.querySelector(".flow__title");

gsap.to(flowTitleElement, {
    scrollTrigger: {
        trigger: flowTitleElement,
        start: `${flowTitleElement.offsetHeight - 50} bottom`,
        endTrigger: bodyElement,
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
    },
});

let flowImagesElements = document.querySelectorAll(".flow__images");

gsap.utils.toArray(flowImagesElements).forEach((flowImage) => {
    let flowImageElements = flowImage.children;
    gsap.to(flowImageElements, {
        y: -400,
        scrollTrigger: {
            trigger: flowImage,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
        },
    });
});

setInterval(function () {
    let flowImagesElements = document.querySelectorAll(".flow__images");
    var idx = 0;
    let titles = ['Furniture', 'Decor', 'Office', 'Tech'];
    flowImagesElements.forEach((image) => {
        if (flowTitleElement.getBoundingClientRect().top + flowTitleElement.offsetHeight - 50 >= 
            image.getBoundingClientRect().bottom) {
            idx++;
        }
    });
    flowTitleElement.textContent = titles[idx];
});