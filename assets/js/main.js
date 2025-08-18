(function () {
  "use strict";

  /**
   * Smooth scroll helper
   */
  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // adjust for fixed header
        behavior: "smooth",
      });
    }
  };

  /**
   * Back to Top button
   */
  const backToTop = document.querySelector('[aria-label="Back to top"]');
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 200) {
        backToTop.classList.add("opacity-100");
        backToTop.classList.remove("opacity-0");
      } else {
        backToTop.classList.remove("opacity-100");
        backToTop.classList.add("opacity-0");
      }
    };
    window.addEventListener("scroll", toggleBackToTop);
    window.addEventListener("load", toggleBackToTop);
  }

  /**
   * Mobile Navigation Toggle
   */
  const navToggle = document.getElementById("mobile-nav-toggle");
  const header = document.getElementById("header");

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      header.classList.toggle("-translate-x-full");
    });
  }

  /**
   * Smooth scroll for nav links
   */
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("href");
      if (target && target.startsWith("#") && document.querySelector(target)) {
        e.preventDefault();
        smoothScrollTo(target);
        // Close mobile nav on link click
        if (!header.classList.contains("-translate-x-full")) {
          header.classList.add("-translate-x-full");
        }
      }
    });
  });

  /**
   * Typing Effect (Typed.js required)
   */
  const typedElement = document.getElementById("typed-text");
  if (typedElement) {
    new Typed("#typed-text", {
      strings: ["UI/UX Designer", "Software Developer", "Photographer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
  }
})();
