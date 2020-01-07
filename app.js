function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`) 
};

window.addEventListener('resize', function () {
    setDocHeight();
});

window.addEventListener('orientationchange', function () {
    setDocHeight();
});
    
setDocHeight();

function hamburgerOpen() {
    let element = document.getElementById("myDIV");

    if (element.classList == 'burger burger-rotate') {
        element.classList.add('open')
        document.getElementById("myNav").style.width = "100%";
    } else {
        element.classList.remove('open')
        document.getElementById("myNav").style.width = "0%";
    }
}

function noScroll() {
    $('body').on('click', '.burger', (e) => {
        e.preventDefault();
        $('body').toggleClass('noScroll');
    })
}

function one() {
    $('body').on('click', '.One', function(e) {
        e.preventDefault();
        $('#overlayOne').fadeToggle(500).toggleClass('display');
    })
}

function two() {
    $('body').on('click', '.Two', function(e) {
        e.preventDefault();
        $('#overlayTwo').fadeToggle(500).toggleClass('display');
    })
}

function three() {
    $('body').on('click', '.Three', function(e) {
        e.preventDefault();
        $('#overlayThree').fadeToggle(500).toggleClass('display');
    })
}

function runPortfolio() {
    noScroll();
    one();
    two();
    three();
}

$(runPortfolio);