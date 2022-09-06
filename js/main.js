$(function () {
  $(".tab__btn-1").on("click", function () {
    document.getElementById(
      "demo"
    ).innerHTML = `<img src="images/slide-feature-img.png" />`;
  });
  $(".tab__btn-2").on("click", function () {
    document.getElementById(
      "demo"
    ).innerHTML = `<img src="images/tab-img.png">`;
  });
  $(".tab__btn-3").on("click", function () {
    document.getElementById(
      "demo"
    ).innerHTML = `<img src="images/slide-feature-img.png" />`;
  });
  $(".tab__btn-4").on("click", function () {
    document.getElementById(
      "demo"
    ).innerHTML = `<img src="images/tab-img.png">`;
  });
  $(".comment__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinity: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 31,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  let acc = document.getElementsByClassName("accordion-item-btn");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      console.log(panel.style.height);
      if (panel.style.height === "0px" || panel.style.height === "") {
        panel.style.height = "100px";
      } else {
        panel.style.height = "0px";
      }
    });
  }
  const menu = document.querySelector(".menu__list");
  const burger = document.querySelector(".menu__btn");
  burger.onclick = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  };
});
