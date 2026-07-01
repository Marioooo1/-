/**
 * Resume Website — 许益诚 | Mario Alfando
 * Lightweight, vanilla JavaScript
 */

(function () {
    'use strict';

    // === DOM Elements ===
    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');

    // === Mobile Nav Toggle ===
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close nav when clicking a link
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // === Nav Shadow on Scroll ===
    function onScroll() {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial

    // === Scroll Reveal Animation ===
    var observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all major cards
    var revealTargets = document.querySelectorAll(
        '.timeline-card, .edu-card, .highlight-card, .contact-card, .skill-category, .about-text, .section-title'
    );

    revealTargets.forEach(function (el) {
        el.classList.add('fade-in');
        observer.observe(el);
    });

})();
