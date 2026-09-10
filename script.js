document.addEventListener("DOMContentLoaded", () => {

  const card = document.querySelector(".profile-card");

  if (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(15px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";

    setTimeout(() => {

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }, 100);

  }


  const socialCards = document.querySelectorAll(".social-card");

  socialCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";

    setTimeout(() => {

      card.style.transition =
        "opacity .4s ease, transform .4s ease";

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }, 100 + index * 35);

  });


  const images = document.querySelectorAll(
    ".gallery img, .main-photo"
  );

  images.forEach(image => {

    image.addEventListener("mouseenter", () => {
      image.style.transform = "scale(1.03)";
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)";
    });

  });

});