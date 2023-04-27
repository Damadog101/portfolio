String.fromCharCode(97 + ~~(Math.random() * 26));

let names = document.getElementById("name");
const letters = "abcdefghijklmnopqrstuvwxyz";

names.addEventListener("mouseover", () => {
	let original = names.innerText;
	let iterations = 0;

	const interval = setInterval(() => {
		names.innerText = names.innerText
			.split("")
			.map((letter, index) => {
				if (index < iterations) {
					return original[index];
				}
				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");
		if (iterations >= original.length) {
			clearInterval(interval);
		}

		iterations += 2 / 3;
	}, 30);
});

let trailer1 = document.getElementById("trailer1");
let bigTrailer1 = document.getElementById("bigTrailer1");

window.onmousemove = (e) => {
	const x = e.clientX - trailer1.clientWidth / 2,
		y = e.clientY - trailer1.clientHeight / 2;
	const a = e.clientX - bigTrailer1.clientWidth / 2,
		b = e.clientY - bigTrailer1.clientHeight / 2;

	trailer1.style.transform = `translate(${x}px, ${y}px)`;
	bigTrailer1.style.transform = `translate(${a}px, ${b}px)`;


	const keyframes = {
		transform: `translate(${a}px, ${b}px)`,
	};
	bigTrailer1.animate(keyframes, {
		duration: 800,
		fill: "forwards",
	});
};
