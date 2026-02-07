// ===== Navbar scroll shadow =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});

// ===== Scroll reveal =====
const revealElements = document.querySelectorAll(
  ".section-title, .about-grid, .skill-card, .project-card, .contact-wrapper"
);

revealElements.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

// ===== Newsletter form (demo) =====
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = newsletterForm.querySelector("button");
  btn.textContent = "Subscribed!";
  btn.style.background = "#2ecc71";
  btn.style.borderColor = "#2ecc71";
  setTimeout(() => {
    btn.textContent = "Subscribe";
    btn.style.background = "";
    btn.style.borderColor = "";
    newsletterForm.reset();
  }, 2500);
});

// ===== Contact form (demo) =====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button");
  btn.textContent = "Message Sent!";
  btn.style.background = "#2ecc71";
  btn.style.borderColor = "#2ecc71";
  setTimeout(() => {
    btn.textContent = "Send Message";
    btn.style.background = "";
    btn.style.borderColor = "";
    contactForm.reset();
  }, 2500);
});
