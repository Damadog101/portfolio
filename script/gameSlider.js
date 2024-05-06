const gameSlidesContainer = document.getElementById("gameSlidesContainer");
const gameSlide = document.querySelector(".gameSlide");
const gameBackButton = document.getElementById("gameSlideArrowBack");
const gameNextButton = document.getElementById("gameSlideArrowNext");

gameNextButton.addEventListener("click", () => {
	const gameSlideWidth = gameSlide.clientWidth;
	gameSlidesContainer.scrollLeft += gameSlideWidth;
});
gameBackButton.addEventListener("click", () => {
	const gameSlideWidth = gameSlide.clientWidth;
	gameSlidesContainer.scrollLeft -= gameSlideWidth;
});
