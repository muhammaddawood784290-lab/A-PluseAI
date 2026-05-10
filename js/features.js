// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow =
      window.scrollY > 50 ? "0px 4px 20px rgba(0,0,0,0.3)" : "none";
  });
}

// =========================
// FEATURE CARD HOVER EFFECT
// =========================

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-15px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// =========================
// RANDOM LIVE STATS
// =========================

const stats = [
  "\uD83D\uDD25 12,482 campaigns optimized",
  "\u26A1 5,203 active marketers online",
  "\uD83D\uDCC8 89% average conversion increase",
  "\uD83E\uDD16 AI generated 45K+ insights",
  "\uD83D\uDCB0 $2.4M revenue tracked today",
];

const heroText = document.querySelector(".hero-text");
let currentStat = 0;

if (heroText) {
  setInterval(() => {
    currentStat = (currentStat + 1) % stats.length;
    heroText.textContent = stats[currentStat];
  }, 3000);
}

// =========================
// SCROLL REVEAL EFFECT
// =========================

const revealElements = document.querySelectorAll(".feature-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================
// DYNAMIC FOOTER YEAR
// =========================

const footer = document.querySelector(".footer p");

if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = `\u00A9 ${currentYear} AdPulse AI. All rights reserved.`;
}

// =========================
// FAKE LOADING EFFECT
// =========================

window.addEventListener("load", () => {
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "1";
  }, 200);
});
