const movies = [];
const dataPanel = document.querySelector("#data-panel");

const prevButton = document.querySelector(".card__prev");
const nextButton = document.querySelector(".card__next");

function renderMovies(data) {
  let rawHTML = "";

  for (let i = 0; i < 9; i++) {
    rawHTML += `
       <li class="movie__card slide${i}">
          <img src="${data[i].imgUrl}" alt="" />
          <div class="card__title">${data[i].name}</div>
          <div class="card__info">${data[i].outlineInfo}</div>  
        </li>
    `;
  }

  dataPanel.innerHTML = rawHTML;
}
// GET data
fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((json) => {
    movies.push(...json);
    renderMovies(movies);
    console.log(movies);
  })
  .catch((err) => console.log(err));

nextButton.addEventListener("click", (e) => {
  if (e.target.matches(".card__next")) {
    console.log("next clicled");
  }
  const currentSlideForNext = dataPanel.querySelector(".slide3");
  const previous3 = dataPanel.querySelector(".slide2");
  const previous2 = dataPanel.querySelector(".slide1");
  const previous1 = dataPanel.querySelector(".slide0");
  const nextSlide = currentSlideForNext.nextElementSibling;
  const movement = currentSlideForNext.style.left;
  const movementPre3 = previous3.style.left;
  const movementPre2 = previous2.style.left;
  const movementPre1 = previous1.style.left;
  currentSlideForNext.style.transform = "translateX(- " + movement + ")";
  previous3.style.transform = "translateX(- " + movement + ")";
  previous2.style.transform = "translateX(- " + movement + ")";
  previous1.style.transform = "translateX(- " + movement + ")";
  previous3.remove("slide2");
  previous3.classList.add("slide1");
  previous2.remove("slide1");
  previous2.classList.add("slide0");
  previous1.remove("slide0");

  currentSlideForNext.remove("slide3");
  nextSlide.classList.add("slide3");
});

prevButton.addEventListener("click", (e) => {
  if (e.target.matches(".card__prev")) {
    console.log("prev clicled");
  }
  const currentSlideForNext = dataPanel.querySelector(".slide3");
  const previous3 = dataPanel.querySelector(".slide2");
  const previous2 = dataPanel.querySelector(".slide1");
  const previous1 = dataPanel.querySelector(".slide0");
  const nextSlide = currentSlideForNext.previousElementSibling;
  const movement = currentSlideForNext.style.left;
  const movementPre3 = previous3.style.left;
  const movementPre2 = previous2.style.left;
  const movementPre1 = previous1.style.left;
  currentSlideForNext.style.transform = "translateX(- " + movement + ")";
  previous3.style.transform = "translateX(- " + movement + ")";
  previous2.style.transform = "translateX(- " + movement + ")";
  previous1.style.transform = "translateX(- " + movement + ")";
  previous3.remove("slide2");
  previous3.classList.add("slide1");
  previous2.remove("slide1");
  previous2.classList.add("slide0");
  previous1.remove("slide0");

  currentSlideForNext.remove("slide3");
  nextSlide.classList.add("slide3");
});
const slides = Array.from(dataPanel.children);

console.log(slides[0]);
