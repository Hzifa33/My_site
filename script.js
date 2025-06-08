/*
==========================================================================
    PORTFOLIO SCRIPT FOR HZIFA33 - "THE DIGITAL COSMOS" THEME
    AUTHOR: GEMINI AI
    VERSION: 1.0
==========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. PARTICLE.JS BACKGROUND INITIALIZATION ---
    // This creates the interactive, starry background effect.
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100, // Number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // Particle color
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.8,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2, // Line opacity
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5, // Particle movement speed
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // 'grab' or 'repulse' or 'bubble'
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // 'push' or 'remove'
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_opacity": 0.5
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    // --- 2. CUSTOM CURSOR MOVEMENT ---
    // This script makes the custom cursor follow the mouse pointer.
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorDot = document.querySelector('.cursor-dot');

    // Check if the device is a touch device
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice()) {
        window.addEventListener('mousemove', e => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Animate glow with a slight delay for a trailing effect
            cursorGlow.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });

            // Dot follows precisely
            cursorDot.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 100, fill: "forwards" });
        });
    }


    // --- 3. SCROLL-BASED FADE-IN ANIMATIONS ---
    // This makes sections and elements appear as the user scrolls down.
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Optional: stop observing once visible
            }
        });
    }, {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // triggers when 10% of the element is visible
    });

    // Observe all sections with the 'experience-section' and 'languages-section' classes
    document.querySelectorAll('.experience-section, .languages-section').forEach(section => {
        scrollObserver.observe(section);
    });
    
    // Observe language skill items for staggered animation
    const languageSkillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // trigger when 50% of the item is visible
    });
    
    document.querySelectorAll('.language-skill').forEach(skill => {
        languageSkillObserver.observe(skill);
    });

    // --- 4. 3D TILT EFFECT FOR EXPERIENCE CARDS ---
    // Adds a subtle 3D perspective effect on hover.
    const experienceCards = document.querySelectorAll('.experience-card');

    if (!isTouchDevice()) {
        experienceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const { width, height } = rect;
                const rotateX = (y / height - 0.5) * -15; // Max rotation 7.5deg
                const rotateY = (x / width - 0.5) * 15;   // Max rotation 7.5deg

                card.style.transition = 'transform 0.1s ease-out';
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.5s ease-in-out';
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // --- 5. SMOOTH SCROLL FOR ANY # ANCHOR LINKS (Optional) ---
    // If you add more internal links, this will handle the smooth scroll.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                 targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log("Hzifa33's Digital Cosmos Portfolio Initialized Successfully.");
    console.log("Feel free to explore the code and the universe.");

});
