const tutorsContainer = document.querySelector(".tutors");
  
tutorsData.forEach(tutor => {
  const tutorElement = document.createElement("div");
  tutorElement.classList.add("tutor");

  const imageElement = document.createElement("img");
  imageElement.src = tutor.image;
  imageElement.alt = tutor.name;
  tutorElement.appendChild(imageElement);

  const nameAndRatingContainer = document.createElement("div");
  nameAndRatingContainer.classList.add("name-and-rating-container");

  const nameElement = document.createElement("h2");
  nameElement.classList.add("name");
  nameElement.textContent = tutor.name;

  const ratingElement = document.createElement("p");
  ratingElement.classList.add("rating");
  ratingElement.textContent = tutor.rating;

  nameAndRatingContainer.appendChild(nameElement);
  nameAndRatingContainer.appendChild(ratingElement);
  tutorElement.appendChild(nameAndRatingContainer);

  const languageElement = document.createElement("p");
  languageElement.classList.add("language");
  languageElement.textContent = tutor.language;
  tutorElement.appendChild(languageElement);

  tutorsContainer.appendChild(tutorElement);
});
