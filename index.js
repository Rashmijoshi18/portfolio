const typingText = document.querySelector(".typing-text");
const words = ["Frontend Developer", "Web Designer", "Creative Thinker", "Problem Solver"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        typingText.textContent = words[wordIndex].substring(0, letterIndex--);
    } else {
        typingText.textContent = words[wordIndex].substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex - 1 === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();


const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number!");
        return;
    }


    alert("Thank you, " + name + "! Your message has been sent successfully.");
    contactForm.reset();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 100;
    navbarLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

const footer = document.querySelector(".footer");
footer.innerHTML += `<p>&copy; ${new Date().getFullYear()} Rashmi Joshi | Connect with me:</p>`;

const linkedinLink = "https://www.linkedin.com/in/rashmi-joshi-148850320/";
const githubLink = "https://github.com/Rashmijoshi18";
const emailLink = "https://rashmijoshi3699@gmail.com";


document.querySelector(".social-icons").innerHTML = `
    <a href="${linkedinLink}" target="_blank">
        <img src="linkedin.jpg" alt="LinkedIn" height="30px" width="30px">
    </a>
    <a href="${githubLink}" target="_blank">
        <img src="images.png" alt="GitHub" height="30px" width="30px">
    </a>
    <a href="${emailLink}" target="_blank">
        <img src="images (1).png" alt="Email" height="30px" width="30px">
    </a>
`;


const observerOptions = {
    threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedSections = document.querySelectorAll(".section, .card");
animatedSections.forEach(section => observer.observe(section));


document.querySelectorAll(".button, .button2").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0px 8px 15px rgba(0, 255, 255, 0.6)";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
    });
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});


document.getElementById("currentYear").textContent = new Date().getFullYear();
