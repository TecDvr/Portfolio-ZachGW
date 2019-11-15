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
    one();
    two();
    three();
}

$(runPortfolio);