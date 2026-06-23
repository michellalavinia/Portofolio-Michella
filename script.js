// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}

// ===============================
// SMOOTH SCROLL
// ===============================

const navButtons = document.querySelectorAll(
    "[data-section]"
);

navButtons.forEach(button => {
    button.addEventListener("click", () => {

        const sectionId =
            button.getAttribute("data-section");

        const target =
            document.getElementById(sectionId);

        if (!target) return;

        const offset = 80;

        const targetPosition =
            target.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        if (mobileMenu) {
            mobileMenu.classList.remove("show");
        }
    });
});

// ===============================
// ACTIVE MENU SECTION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveSection() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.dataset.section === current
        ) {
            link.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    setActiveSection
);

setActiveSection();

// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {
            element.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ===============================
// SKILL BAR ANIMATION
// ===============================

const progressBars =
    document.querySelectorAll(
        ".progress-fill"
    );

let skillAnimated = false;

function animateSkills() {

    const skillsSection =
        document.getElementById("skills");

    if (!skillsSection) return;

    const top =
        skillsSection.getBoundingClientRect().top;

    if (
        top < window.innerHeight - 150 &&
        !skillAnimated
    ) {

        progressBars.forEach(bar => {

            const width =
                bar.getAttribute("data-width");

            bar.style.width =
                width + "%";

        });

        skillAnimated = true;
    }
}

window.addEventListener(
    "scroll",
    animateSkills
);

animateSkills();

// ===============================
// FOOTER YEAR
// ===============================

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}

// ===============================
// HERO BUTTONS
// ===============================

const projectBtn =
    document.getElementById(
        "view-projects-btn"
    );

const contactBtn =
    document.getElementById(
        "contact-btn"
    );

if (projectBtn) {

    projectBtn.addEventListener(
        "click",
        () => {

            const target =
                document.getElementById(
                    "projects"
                );

            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    );
}

if (contactBtn) {

    contactBtn.addEventListener(
        "click",
        () => {

            const target =
                document.getElementById(
                    "contact"
                );

            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    );
}