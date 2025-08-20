// Enable Strict Mode
'use strict';

// ScrollReveal Animations
(function () {
    const e = document.documentElement;
    e.classList.remove('no-js');
    e.classList.add('js');

    if (document.body.classList.contains('has-animations')) {
        const sr = ScrollReveal();

        sr.reveal('.hero-title, .hero-paragraph, .hero-cta', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'left',
            interval: 150
        });

        sr.reveal('.hero-illustration', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'right',
            interval: 150
        });

        sr.reveal('.feature', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            interval: 100,
            origin: 'bottom',
            scale: 0.9,
            viewFactor: 0.5
        });

        document.querySelectorAll('.pricing-table').forEach((table) => {
            const headers = [].slice.call(table.querySelectorAll('.pricing-table-header'));
            const features = [].slice.call(table.querySelectorAll('.pricing-table-features li'));
            const ctas = [].slice.call(table.querySelectorAll('.pricing-table-cta'));
            const elements = headers.concat(features).concat(ctas);

            sr.reveal(elements, {
                duration: 600,
                distance: '20px',
                easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
                interval: 100,
                origin: 'bottom',
                viewFactor: 0.5
            });
        });
    }
})();

// Preloader
$(window).on('load', function () {
    $('.preloader').fadeOut(100);
});

// Document Ready Functions
$(document).ready(function () {

    // Shuffle.js Filter and Masonry
    const containerEl = document.querySelector('.shuffle-wrapper');
    if (containerEl) {
        const Shuffle = window.Shuffle;
        const myShuffle = new Shuffle(containerEl, {
            itemSelector: '.shuffle-item',
            buffer: 1
        });

        $('input[name="shuffle-filter"]').on('change', function (evt) {
            const input = evt.currentTarget;
            if (input.checked) {
                myShuffle.filter(input.value);
            }
        });
    }

    // Slick Slider Initialization
    $('.portfolio-single-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.clients-logo').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Magnific Popup for Portfolio
    $('.portfolio-popup').magnificPopup({
        type: 'image',
        removalDelay: 160, // Delay removal for animation
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: true,
        fixedBgPos: true
    });

    // Count Up Animation
    function counter() {
        let oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                const $this = $(this);
                const countTo = $this.attr('data-count');
                $({ countNum: $this.text() }).animate(
                    { countNum: countTo },
                    {
                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
    });
});
