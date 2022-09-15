//! SLider-header_________________________________________________________________
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 1,
    spaceBetween: 70,
    // loop: true,

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20
    //     },
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 26
    //     },
    //     1020: {
    //         slidesPerView: 2,
    //         spaceBetween: 70,
    //         loop: true,
    //     }
    // },
});

//! SLider-examples________________________________________________________________________
const swiper2 = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    slidesPerView: 1,
    spaceBetween: 70,
    // loop: true,

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20
    //     },
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 26
    //     },
    //     1020: {
    //         slidesPerView: 2,
    //         spaceBetween: 70,
    //         loop: true,
    //     }
    // },
});

// //! Features______________________________________________________________
const togglePlus = document.querySelector('.toggle__plus');
const togglePlus2 = document.querySelector('.toggle__plus2');
const togglePlus3 = document.querySelector('.toggle__plus3');
const togglePlus4 = document.querySelector('.toggle__plus4');
const toggleMinus = document.querySelector('.toggle__minus');
const toggleMinus2 = document.querySelector('.toggle__minus2');
const toggleMinus3 = document.querySelector('.toggle__minus3');
const toggleMinus4 = document.querySelector('.toggle__minus4');
const arrow = document.querySelector('.arrow');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const arrow4 = document.querySelector('.arrow4');
const fPi = document.querySelector('.features__properties__item1');
const fPi2 = document.querySelector('.features__properties__item2');
const fPi3 = document.querySelector('.features__properties__item3');
const fPi4 = document.querySelector('.features__properties__item4');


//! 1
togglePlus.onclick = (event) => {
    toggleMinus.classList.toggle('none');
    togglePlus.classList.toggle('none');
    fPi.classList.toggle('none');
    arrow.classList.toggle('none');
};

toggleMinus.onclick = (event) => {
    togglePlus.classList.toggle('none');
    toggleMinus.classList.toggle('none');
    fPi.classList.toggle('none');
    arrow.classList.toggle('none');
};

//! 2
togglePlus2.onclick = (event) => {
    toggleMinus2.classList.toggle('none');
    togglePlus2.classList.toggle('none');
    fPi2.classList.toggle('none');
    arrow2.classList.toggle('none');
};

toggleMinus2.onclick = (event) => {
    togglePlus2.classList.toggle('none');
    toggleMinus2.classList.toggle('none');
    fPi2.classList.toggle('none');
    arrow2.classList.toggle('none');
};

//! 3
togglePlus3.onclick = (event) => {
    toggleMinus3.classList.toggle('none');
    togglePlus3.classList.toggle('none');
    fPi3.classList.toggle('none');
    arrow3.classList.toggle('none');
};

toggleMinus3.onclick = (event) => {
    togglePlus3.classList.toggle('none');
    toggleMinus3.classList.toggle('none');
    fPi3.classList.toggle('none');
    arrow3.classList.toggle('none');
};

//! 4
togglePlus4.onclick = (event) => {
    toggleMinus4.classList.toggle('none');
    togglePlus4.classList.toggle('none');
    fPi4.classList.toggle('none');
    arrow4.classList.toggle('none');
};

toggleMinus4.onclick = (event) => {
    togglePlus4.classList.toggle('none');
    toggleMinus4.classList.toggle('none');
    fPi4.classList.toggle('none');
    arrow4.classList.toggle('none');
};

