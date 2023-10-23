




let colorLi = document.querySelectorAll('.color-list li');

const mainColor = localStorage.getItem('main-color');

if (mainColor) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    colorLi.forEach((listItem) => {
        if (listItem.dataset.color == mainColor) {
            removeAllActiveList(listItem);
            listItem.classList.add('active');
        }
    });
}


//change color
colorLi.forEach((element) => {
    element.addEventListener('click', function (e) {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem('main-color', e.target.dataset.color)
        removeAllActiveList(element);
        element.classList.add('active');
    });
});

function removeAllActiveList(element) {
    element.parentElement.querySelectorAll('.active').forEach((listItem) => {
        listItem.classList.remove('active');
    });
}


//toggle search box

let openCloseIcon = document.querySelector('.setting-icon .fa-gear');
let searchBox = document.querySelector('.search-box');

document.querySelector('.setting-icon').addEventListener('click', function () {
    toggleSearchBox();
    spinnerEffect();
});

function toggleSearchBox() {
    if (searchBox.classList.contains('open-close')) {
        console.log(searchBox.classList.contains('open-close'));
        searchBox.classList.remove('open-close');
    }
    else {
        searchBox.classList.add('open-close');
    }
}

function spinnerEffect() {
    openCloseIcon.classList.add('fa-spin');
    setTimeout(function () {
        openCloseIcon.classList.remove('fa-spin');
    }, 1000);
}


//changing images

let btnsRandomBackgrounds = document.querySelectorAll('.setting-option.background span');
let randomBackgroundInterval;

if (localStorage.getItem("isRandomBackground") == "yes") {
    runRandomBackgrounds("yes");
}

btnsRandomBackgrounds.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.target.parentElement.querySelector('span.active').classList.remove('active');
        e.target.classList.add('active');
        runRandomBackgrounds(e.target.dataset.background);
    });
});

let element = document.querySelector(".langing-page");

function runRandomBackgrounds(isRun) {
    if (isRun == "yes") {
        localStorage.setItem('isRandomBackground', "yes");
        randomBackgroundInterval = setInterval(() => {
            const random = Math.floor(Math.random() * 4);
            console.log('url("../imgs/' + random + '.jpg")');
            element.style.backgroundImage = 'url("../imgs/' + random + '.jpg")';
        }, 10000);
    }
    else {
        localStorage.setItem('isRandomBackground', "no");
        clearInterval(randomBackgroundInterval);
    }
}


let skills = document.querySelector('.skills');
let spans = document.querySelectorAll('.skills .skill-box .progress-bar span');

window.onscroll = function () {
    if (this.pageYOffset > (skills.offsetTop + skills.offsetHeight - window.innerHeight) - 100) {
        spans.forEach((spanItem) => {
            spanItem.style.width = spanItem.dataset.progress;
        });
    }
}


// make imgs clickable

let imgsBox = document.querySelectorAll('.images-box img');

imgsBox.forEach((img) => {

    img.addEventListener('click', function () {
        let overlay = document.createElement('div');
        overlay.className = 'overlay-popup';
        document.body.appendChild(overlay);

        let popupImage = document.createElement('div');
        popupImage.className = 'img-popup';

        let header = document.createElement('h1');
        header.innerHTML = img.alt;
        popupImage.appendChild(header);

        let closebtn = document.createElement('span');
        closebtn.innerHTML = 'X';
        popupImage.appendChild(closebtn);

        let dynamicImage = document.createElement('img');
        dynamicImage.style.width = '1000px';
        dynamicImage.style.height = '300px';
        dynamicImage.src = img.src;
        popupImage.appendChild(dynamicImage);

        document.body.appendChild(popupImage);

        closebtn.addEventListener('click',function(e){
             e.target.parentNode.remove();
             document.querySelector('.overlay-popup').remove();
        });

    });

});