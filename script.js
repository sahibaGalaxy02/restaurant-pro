// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// CLOSE MOBILE MENU AFTER LINK CLICK

const navLinks = document.querySelectorAll("#mobile-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// FADE-IN ANIMATION 

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    },
    {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    }
);

// Observe all elements with fade-in class
fadeElements.forEach(element => {
    observer.observe(element);
});

// CONTACT FORM 

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting Golden Spoon! We will get back to you soon.");
    this.reset();
});

// NAVBAR SHADOW ON SCROLL

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-2xl");
    } else {
        navbar.classList.remove("shadow-2xl");
    }
});
