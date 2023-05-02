
let trailer = document.getElementById("trailer");
let bigTrailer = document.getElementById("bigTrailer");



window.addEventListener("mousemove", (e) => {
	console.log(e)
	const x = e.clientX - trailer.clientWidth / 2,
	y = e.clientY - trailer.clientHeight / 2;
const a = e.clientX - bigTrailer.clientWidth / 2,
	b = e.clientY - bigTrailer.clientHeight / 2;

trailer.style.transform = `translate(${x}px, ${y}px)`;
bigTrailer.style.transform = `translate(${a}px, ${b}px)`;

const keyframes = {
	transform: `translate(${a}px, ${b}px)`,
};
bigTrailer.animate(keyframes, {
	duration: 800,
	fill: "forwards",
});
})

