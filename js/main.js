/* ============================================
   Cogninance — Interactions
   ============================================ */

(function () {
    'use strict';

    // --- Smooth scroll for nav links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Scroll reveal ---
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
    });

    // --- Chat message animation ---
    var chatBody = document.getElementById('chatBody');
    if (chatBody) {
        var chatObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var msgs = entry.target.querySelectorAll('.chat-msg');
                    msgs.forEach(function (msg, i) {
                        setTimeout(function () {
                            msg.classList.add('visible');
                        }, i * 450);
                    });
                    chatObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        chatObserver.observe(chatBody);
    }

    // --- FRI score counter ---
    var friScore = document.getElementById('friScore');
    if (friScore) {
        var friAnimated = false;
        var friObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !friAnimated) {
                    friAnimated = true;
                    var target = 847;
                    var count = 0;
                    var increment = target / 120;
                    var counter = setInterval(function () {
                        count += increment;
                        if (count >= target) {
                            friScore.textContent = target;
                            clearInterval(counter);
                        } else {
                            friScore.textContent = Math.floor(count);
                        }
                    }, 16);
                }
            });
        }, { threshold: 0.5 });

        friObserver.observe(friScore);
    }

    // --- Stats counter ---
    var statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
        var statsAnimated = false;
        var statsObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    var accents = entry.target.querySelectorAll('.accent');
                    accents.forEach(function (el) {
                        var target = parseFloat(el.dataset.target);
                        var isDecimal = el.dataset.decimal === 'true';
                        var count = 0;
                        var increment = target / 80;
                        var counter = setInterval(function () {
                            count += increment;
                            if (count >= target) {
                                el.textContent = isDecimal ? target.toFixed(1) : target;
                                clearInterval(counter);
                            } else {
                                el.textContent = isDecimal ? count.toFixed(1) : Math.floor(count);
                            }
                        }, 16);
                    });
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsBar);
    }

    // --- Nav background on scroll ---
    var nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
            } else {
                nav.style.borderBottomColor = '';
            }
        }, { passive: true });
    }

})();
