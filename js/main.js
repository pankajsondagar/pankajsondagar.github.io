(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);


// HERO IMAGE ANIMATION - #changingImage
const changingImageElement = document.getElementById("changingImage");

if (changingImageElement) {
  const images1 = [
    "img/Insurance-bro.svg",
    "img/Insurance-pana.svg",
    "img/Insurance-amico.svg",
  ];
  let index1 = 0;

  setInterval(() => {
    changingImageElement.classList.add("fade-out");
    setTimeout(() => {
      index1 = (index1 + 1) % images1.length;
      changingImageElement.src = images1[index1];
      changingImageElement.classList.remove("fade-out");
    }, 1000);
  }, 4000);
}

// SECOND IMAGE ANIMATION - #rotatingImage
const rotatingImageElement = document.getElementById("rotatingImage");

if (rotatingImageElement) {
  const images2 = [
    "img/Insurance-bro.svg",
    "img/Insurance-pana.svg",
    "img/Insurance-amico.svg",
  ];
  let index2 = 0;

  setInterval(() => {
    rotatingImageElement.classList.add("fade-out");
    setTimeout(() => {
      index2 = (index2 + 1) % images2.length;
      rotatingImageElement.src = images2[index2];
      rotatingImageElement.classList.remove("fade-out");
    }, 1000);
  }, 4000);
}


    // Apply margin-top on mobile only
    if (window.innerWidth <= 768) {
        document.getElementById("aboutUsBadge").style.marginTop = "1rem";
      }

    // Get the paragraph element
    const insuranceText = document.getElementById('insurance-text');

    // Get full text content
    const fullText = insuranceText.textContent;
  
    // Split into words
    const words = fullText.trim().split(/\s+/);
  
    // Limit to 20 words
    const maxWords = 8;
  
    // Select all elements with class 'insurance-text'
    const elements = document.querySelectorAll('.insurance-text');
  
    elements.forEach(el => {
      const fullText = el.textContent.trim();
      const words = fullText.split(/\s+/);
  
      if(words.length > maxWords) {
        el.textContent = words.slice(0, maxWords).join(' ') + '...';
      }
    });