
document.addEventListener("DOMContentLoaded", () => {


  const typingElement = document.getElementById("typing-text");

  const words = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git & GitHub"
  ];

  if (typingElement) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingElement.textContent =
        currentWord.substring(0, charIndex);

      let typingSpeed = isDeleting ? 70 : 120;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

});


  // 2. Dark Mode Toggle
  const themeBtn = document.getElementById("theme-toggle");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      themeBtn.setAttribute("aria-pressed", String(isDark));
    });
  }

  // 3. Mobile Navigation Menu
  const menuBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 4. Active Navigation Link Highlight
  const navLinks = document.querySelectorAll(
    '#nav-links a[href^="#"]'
  );

  function updateActiveLink() {
    const currentHash = window.location.hash || "#home";

    navLinks.forEach(link => {
      const isActive = link.getAttribute("href") === currentHash;
      link.classList.toggle("active-link", isActive);
    });
  }

  window.addEventListener("hashchange", updateActiveLink);
  updateActiveLink();

  // 5. Contact Form Validation
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name || !email || !message) {
        console.error("Contact form fields are missing.");
        return;
      }

      if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
      ) {
        alert("Please fill in all fields.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Your message has been validated successfully!");
      contactForm.reset();
    });
  }
