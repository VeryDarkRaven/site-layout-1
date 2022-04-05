//Слайдер
let slideIndex = 1;
let pages = document.getElementsByClassName("portfolio_block_container");

let currentPage = document.getElementById("currentPage");
let lastPage = document.getElementById("lastPage");

function showSlides(n) {
    if (n < 1) {
        slideIndex = pages.length;
    };
    if (n > pages.length) {
        slideIndex = 1;
    };

    for (let page of pages) {
        page.style.display = "none"
    };

    pages[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

//Ссылки перелистывания слайдера
currentPage.innerText = slideIndex;
lastPage.innerText = pages.length;

function showCurrentPage() {
    currentPage.innerText = slideIndex;
};

function previousSlide() {
    showSlides(slideIndex -= 1);
    showCurrentPage();
};

function nextSlide() {
    showSlides(slideIndex += 1);
    showCurrentPage();
};

function currentSlide(n) {
    showSlides(slideIndex = n);
    showCurrentPage();
};