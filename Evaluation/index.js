fetch("http://localhost:3000/movies")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  //get myData div
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    //create a new div in myData
    var div = document.createElement("div");
    div.className = "movie-container";
    mainContainer.appendChild(div);
    const img = document.createElement("img");
    img.src = `${data[i].imgUrl}`; //add img to the newly created div
    div.appendChild(img);
    var mdiv = document.createElement("p");
    mdiv.innerHTML = "Movie: " + data[i].name; //add p to the newly created div
    div.appendChild(mdiv);

    var iDiv = document.createElement("p");
    iDiv.innerHTML = "Info: " + data[i].outlineInfo; //add p to the newly created div
    div.appendChild(iDiv);
  }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
