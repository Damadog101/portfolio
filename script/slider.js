const slidesContainer = document.getElementById("slidesContainer");
const slide = document.querySelector(".slide");
const backButton = document.getElementById("slideArrowBack");
const nextButton = document.getElementById("slideArrowNext");

nextButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});
backButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});
