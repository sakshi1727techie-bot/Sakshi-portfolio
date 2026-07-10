// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

// Menu close after clicking a link

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    });

});


/* ==========================================
   TYPING ANIMATION
========================================== */

const roles = [
    "Full Stack Developer",
    "Python Developer",
    "React Developer",
    "Django Developer",
    ".NET Developer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;
            setTimeout(typeEffect, 1800);
            return;

        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

window.addEventListener("load", typeEffect);


/* ==========================================
   HERO ANIMATION
========================================== */

window.addEventListener("load", () => {

    const content = document.querySelector(".hero-content");
    const image = document.querySelector(".hero-image");
    const buttons = document.querySelector(".hero-action-wrapper");

    if (content) {

        content.style.opacity = "0";
        content.style.transform = "translateX(-40px)";
        content.style.transition = "all .9s ease";

        setTimeout(() => {

            content.style.opacity = "1";
            content.style.transform = "translateX(0)";

        }, 200);

    }

    if (image) {

        image.style.opacity = "0";
        image.style.transform = "translateX(40px)";
        image.style.transition = "all .9s ease";

        setTimeout(() => {

            image.style.opacity = "1";
            image.style.transform = "translateX(0)";

        }, 500);

    }

    if (buttons) {

        buttons.style.opacity = "0";
        buttons.style.transform = "translateY(30px)";
        buttons.style.transition = "all .8s ease";

        setTimeout(() => {

            buttons.style.opacity = "1";
            buttons.style.transform = "translateY(0)";

        }, 800);

    }

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   ABOUT SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".reveal").forEach((item)=>{
    observer.observe(item);
});

console.log("Reveal Script Running...");

const reveals = document.querySelectorAll(".reveal");

function reveal() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        console.log("Element Top:", elementTop);

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
            console.log("Active Added");
        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* ==========================================
   SKILLS LEFT TO RIGHT ANIMATION
========================================== */

const revealLeftElements = document.querySelectorAll(".reveal-left");

function revealLeft() {

    const windowHeight = window.innerHeight;

    revealLeftElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.classList.add("active-left");

        }

    });

}

window.addEventListener("scroll", revealLeft);
window.addEventListener("load", revealLeft);



// /* ==========================================
//    SKILL CARD STAGGER ANIMATION
// ========================================== */

const skillCards = document.querySelectorAll(".skill-item");

function animateSkillCards() {

    const windowHeight = window.innerHeight;

    skillCards.forEach((card, index) => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 80) {

            setTimeout(() => {

                card.classList.add("show-card");

            }, index * 120);

        }

    });

}

window.addEventListener("scroll", animateSkillCards);
window.addEventListener("load", animateSkillCards);

/* ==========================================
   EDUCATION TIMELINE ANIMATION
========================================== */

const educationItems = document.querySelectorAll(".timeline-item");

const educationObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            educationObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

educationItems.forEach((item,index)=>{

    item.style.transitionDelay = `${index * 0.25}s`;

    educationObserver.observe(item);

});

/* ==========================================
   EXPERIENCE REVEAL ANIMATION
========================================== */

const experienceCards = document.querySelectorAll(".reveal-up");

const experienceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            experienceObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

experienceCards.forEach((card) => {
    experienceObserver.observe(card);
});

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{
                entry.target.classList.add("show");
            },index*150);

            projectObserver.unobserve(entry.target);
        }

    });

},{
    threshold:0.2
});

projectCards.forEach(card=>{
    projectObserver.observe(card);
});

/* ==========================================
   ACHIEVEMENT ANIMATION
========================================== */

const achievementCard = document.querySelector(".achievement-card");

const achievementObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            achievementObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.25
});

if (achievementCard) {

    achievementObserver.observe(achievementCard);

}

/* ==========================================
   CERTIFICATES LEFT & RIGHT ANIMATION
========================================== */

const certificateCards = document.querySelectorAll(".certificate-card");

const certificateObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            if (entry.target.classList.contains("reveal-left")) {

                entry.target.classList.add("active-left");

            }

            if (entry.target.classList.contains("reveal-right")) {

                entry.target.classList.add("active-right");

            }

            // Animation sirf ek baar chalegi
            certificateObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

certificateCards.forEach((card)=>{

    certificateObserver.observe(card);

});

/* ==========================================
   CONTACT SECTION ANIMATION
========================================== */

const contactSection = document.querySelector(".contact-container");

const contactObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            // Animation sirf ek baar chalegi
            contactObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

if(contactSection){

    contactObserver.observe(contactSection);

}

/* ==========================================
        FOOTER ANIMATION
========================================== */

const footer = document.querySelector(".footer-container");

const footerObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            footerObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

if(footer){

    footerObserver.observe(footer);

}
