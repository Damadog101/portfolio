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



// names.addEventListener("mouseover", () => {
	
// });


// function singleCycle() {
	
// }

// let amogus;

// amogus = setInterval(singleCycle(), 1000)

let num = 1

setInterval(() => {
	let iterations = 0;

	if (num < 5) {
		num += 1
	} else {
		num = 1
	}

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
			clearInterval(interval);
		}
		// console.log(num)
		iterations += 2 / 3;
	}, 30);
}, 2700);




