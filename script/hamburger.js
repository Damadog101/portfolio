let mobile = document.getElementById("mobileLayout");
let normal = document.getElementById("normalLayout");
let hamburger = document.getElementById("hamburger");

function showHamburger() {
	let width = window.innerWidth;
	if (width >= 500) {
		hamburger.classList.add("noDisplay");
		mobile.classList.add("noDisplay");

		normal.classList.remove("noDisplay");

		return;
	} else {
		hamburger.classList.remove("noDisplay");
		mobile.classList.remove("noDisplay");

		normal.classList.add("noDisplay");
	}
}
window.addEventListener("load", () => {
	showHamburger();
});
window.addEventListener("resize", () => {
	showHamburger();
});
