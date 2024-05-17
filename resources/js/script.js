document.addEventListener("DOMContentLoaded", function () {
  /* For the sticky navigation */
  var sectionFeatures = document.querySelector(".js--section-features");
  var nav = document.querySelector("nav");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          nav.classList.add("sticky");
        } else {
          nav.classList.remove("sticky");
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(sectionFeatures);
  /* Scroll on buttons */
  document
    .querySelector(".js--scroll-to-plans")
    .addEventListener("click", function () {
      document
        .querySelector(".js--section-plans")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".js--scroll-to-start")
    .addEventListener("click", function () {
      document
        .querySelector(".js--section-features")
        .scrollIntoView({ behavior: "smooth" });
    });

  /* Navigation scroll */
  // This part requires a custom function to replace jQuery's animate method

  /* Animations on scroll */
  var animateElements = document.querySelectorAll(
    ".js--wp-1, .js--wp-2, .js--wp-3, .js--wp-4"
  );
  animateElements.forEach(function (element) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            element.classList.add("animated", "fadeIn");
          } else {
            element.classList.remove("animated", "fadeIn");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(element);
  });
  /* Mobile Navigation */
  document
    .querySelector(".js--nav-icon")
    .addEventListener("click", function () {
      var nav = document.querySelector(".js--main-nav");
      var icon = document.querySelector(".js--nav-icon i");

      nav.style.display = nav.style.display === "none" ? "block" : "none";

      if (icon.classList.contains("ion-navicon-round")) {
        icon.classList.add("ion-close-round");
        icon.classList.remove("ion-navicon-round");
      } else {
        icon.classList.add("ion-navicon-round");
        icon.classList.remove("ion-close-round");
      }
    });
});
