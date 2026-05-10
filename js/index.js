// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.style.boxShadow = "0px 4px 20px rgba(0,0,0,0.3)";

  }else{

    navbar.style.boxShadow = "none";

  }

});


// =========================
// BUTTON CLICK ALERTS
// =========================

const startBtn = document.querySelector(".primary-btn");
const demoBtn = document.querySelector(".secondary-btn");

startBtn.addEventListener("click", () => {

  alert("Welcome to AdPulse AI 🚀");

});

demoBtn.addEventListener("click", () => {

  alert("Demo Coming Soon 😎");

});


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".analytics-box h2");

counters.forEach(counter => {

  let target = counter.innerText;

  // REMOVE SYMBOLS
  let numericValue = parseInt(
    target.replace(/[^0-9]/g, "")
  );

  let count = 0;

  let speed = numericValue / 100;

  const updateCounter = () => {

    count += speed;

    if(count < numericValue){

      // KEEP ORIGINAL SYMBOLS
      if(target.includes("$")){

        counter.innerText = "$" + Math.floor(count);

      }
      else if(target.includes("%")){

        counter.innerText = "+" + Math.floor(count) + "%";

      }
      else{

        counter.innerText = Math.floor(count);

      }

      requestAnimationFrame(updateCounter);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});


// =========================
// SMOOTH SCROLL
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const targetId = link.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if(targetSection){

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// =========================
// DYNAMIC YEAR
// =========================

const footer = document.querySelector(".footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML = `© ${currentYear} AdPulse AI. All rights reserved.`;


// =========================
// FAKE LIVE USERS
// =========================

const dashboardCard = document.querySelector(".dashboard-card");

const liveUsers = document.createElement("p");

liveUsers.style.marginTop = "20px";
liveUsers.style.color = "#38bdf8";
liveUsers.style.fontWeight = "600";

dashboardCard.appendChild(liveUsers);

setInterval(() => {

  let randomUsers = Math.floor(Math.random() * 5000);

  liveUsers.innerText = `🔥 ${randomUsers} Active Users Right Now`;

}, 2000);

// =========================
// END OF SCRIPT
// =========================

// This script adds interactivity to the AdPulse AI landing page, including navbar shadow on scroll, button click alerts, counter animations, smooth scrolling, dynamic year in footer, and fake live user count on the dashboard.

// Developed by Muhammad Dawood - 2026

// For any questions or feedback, please contact me at:
// Email:
// LinkedIn: https://www.linkedin.com/in/muhammad-dawood-123456789/
// GitHub:
// Twitter: https://twitter.com/muhammaddawood

// Thank you for visiting AdPulse AI!   🚀

// End of index.js