String.fromCharCode(97 + ~~(Math.random() * 26));

let names = document.getElementById("name");
const letters = "abcdefghijklmnopqrstuvwxyz";

const textCycle = {
	1: "Develop Websites",
	2: "Edit Videos",
	3: "Write Essays",
	4: "Program With JavaScript",
	5: "Wireframe with Figma"
}



names.addEventListener("mouseover", () => {
	let iterations = 0;
	let num = Math.ceil(Math.random() * 5);


	const interval = setInterval(() => {
		
		names.innerText = textCycle[num]
			.split("")
			.map((letter, index) => {
				if (index < iterations) {
					
					return textCycle[num][index];
				}
				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");
		if (iterations >= textCycle[num].length) {
			console.log("text Cyle Lneght:")
			console.log(textCycle[num].length)
			clearInterval(interval);
		}
		// console.log(num)
		iterations += 1;
	}, 30);
});