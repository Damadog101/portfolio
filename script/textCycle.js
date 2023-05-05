String.fromCharCode(97 + ~~(Math.random() * 26));

let names = document.getElementById("name");
const letters = "abcdefghijklmnopqrstuvwxyz";

const textCycle = {
	1: "Develop Websites",
	2: "Edit Videos",
	3: "Write Essays",
	4: "Program With JavaScript",
	5: "Wireframe with Figma",
	6: "Markup with HTML and CSS"
}








names.addEventListener("mouseover", () => {
	let original = names.innerText;
	let iterations = 0;

	const interval = setInterval(() => {
		let num = Math.ceil(Math.random() * 7);

		names.innerText = names.innerText
			.split("")
			.map((letter, index) => {
				if (index < iterations) {
					return textCycle[num][index];
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