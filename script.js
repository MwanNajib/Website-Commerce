$(document).ready(function () {
    $('.navbar').hide().slideDown('smooth');
});

document.querySelector('.order-btn').addEventListener('click', function() {
    document.querySelector('#order-section').scrollIntoView({
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var fadeoutValue = Math.min(scrollTop / 500, 1); // Adjust the value based on your preference

    if (fadeoutValue < 1) {
        document.getElementById('heroes').classList.remove('fadeout');
        document.getElementById('heroes').style.background = 'linear-gradient(180deg, #FFFF00 0%, #ffffff 100%)';
    } else {
        document.getElementById('heroes').classList.add('fadeout');
    }
});

$(document).ready(function() {
    $('.order-btn').click(function() {
        var produkTop = $('#produk').offset().top;

        $('html, body').animate({
            scrollTop: produkTop
        }, 800);
    });
});


$(document).ready(function () {
    $("#fadeInDiv").hide().fadeIn(1000);
});

$('.testimonials-container').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: true
        },
        768: {
            items: 2
        },
    }
})

