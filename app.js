const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

const navMarker = () => {
  const marker = document.querySelector("#marker");
  let item = document.querySelectorAll("nav a");

  function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
  }

  item.forEach((link) => {
    link.addEventListener("click", (e) => {
      indicator(e.target);
    });
  });
};

const app = () => {
  navSlide();
  navMarker();
};

app();
