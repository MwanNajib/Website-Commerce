$(document).ready(function () {
    $('.navbar').hide().slideDown('smooth');

    $('.order-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#produk').offset().top
        }, 500);
    });

    $('.promo-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#layanan-kami').offset().top
        }, 500);
    });

    $(".card-promo").hover(
        function() {
            $(this).css("border-color", "#ffc107"); 
            $(this).css("box-shadow", "0 0 20px rgba(0, 0, 0, 0.1)"); 
        },
        function() {
            $(this).css("border-color", ""); 
            $(this).css("box-shadow", ""); 
        }
    );
    
    $('.btn-promo').click(function() {
        $('html, body').animate({
            scrollTop: $('#produk').offset().top
        }, 500);
    });

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
});

