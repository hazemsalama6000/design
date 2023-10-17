

let openCloseIcon = document.querySelector('.setting-icon .fa-gear');
let searchBox = document.querySelector('.search-box');

document.querySelector('.setting-icon').addEventListener('click', function () {
    toggleSearchBox();
    spinnerEffect();
});

function toggleSearchBox(){
    if(searchBox.classList.contains('open-close')){
        console.log(searchBox.classList.contains('open-close'));
        searchBox.classList.remove('open-close');
    }
    else{
        searchBox.classList.add('open-close');
    }
}

function spinnerEffect() {
    openCloseIcon.classList.add('fa-spin');
    setTimeout(function () {
        openCloseIcon.classList.remove('fa-spin');
    }, 1000);
}

let element = document.querySelector(".langing-page");

setInterval(() => {
    const random = Math.floor(Math.random() * 4);
    console.log('url("../imgs/' + random + '.jpg")');
    element.style.backgroundImage = 'url("../imgs/' + random + '.jpg")';
}, 10000);