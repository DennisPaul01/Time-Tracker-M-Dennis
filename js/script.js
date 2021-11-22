const ctaDaily = document.querySelector(".cta__list-daily");
const ctaWeekly = document.querySelector(".cta__list-weekly");
const ctaMonthly = document.querySelector(".cta__list-monthly");
const typeTitle = document.querySelectorAll(".data-card__title");
const hours = document.querySelectorAll(".data-card__hours");
const history = document.querySelectorAll(".data-card__history");

let typeTime = "daily";
let typeTempo = "Day";

ctaDaily.addEventListener("click", function () {
  typeTime = "daily";
  typeTempo = "Day";
  getData();
});

ctaWeekly.addEventListener("click", function () {
  typeTime = "weekly";
  typeTempo = "Week";
  getData();
});

ctaMonthly.addEventListener("click", function () {
  typeTime = "monthly";
  typeTempo = "Month";
  getData();
});

const getData = function () {
  try {
    fetch(`./data.json`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < typeTitle.length; i++) {
          typeTitle[i].innerHTML = `${data[i].title}`;
          hours[i].innerHTML = `${data[i].timeframes[typeTime].current} hrs`;
          history[
            i
          ].innerHTML = `Last ${typeTempo} - ${data[i].timeframes[typeTime].previous} hrs`;
        }
      });
  } catch (err) {
    console.log(err);
  }
};
getData();
