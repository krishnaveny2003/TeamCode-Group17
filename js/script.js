
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
