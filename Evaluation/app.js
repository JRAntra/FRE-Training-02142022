const movies = [];
const dataPanel = document.querySelector("#data-panel");
const prevButton = document.querySelector(".card__prev");
const nextButton = document.querySelector(".card__next");
const scrollPerClick = 260;
const movieCard = document.querySelector(".row");
showData();

function renderMovies(data) {
  for (let i = 0; i < data.length; i++) {
    document.getElementById("data-panel").insertAdjacentHTML(
      "beforeend",
      `
       <li class="movie__card slide${i}">
          <img src="${data[i].imgUrl}" alt="" />
          <div class="card__title">${data[i].name}</div>
          <div class="card__info">${data[i].outlineInfo}</div>  
        </li>
    `
    );
  }

  // dataPanel.innerHTML = rawHTML;
}
// GET data
async function showData() {
  fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((json) => {
      movies.push(...json);
      renderMovies(movies);
      console.log(movies);
    })
    .catch((err) => console.log(err));
}

let scrollAmount = 0;

nextButton.addEventListener("click", (e) => {
  movieCard.scrollTo({
    left: (scrollAmount += scrollPerClick),
    behavior: "smooth",
  });
});

prevButton.addEventListener("click", (e) => {
  movieCard.scrollTo({
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
});
