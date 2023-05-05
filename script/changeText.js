let awardOne = document.getElementById("awardOne");
let awardTwo = document.getElementById("awardTwo");
let awardThree = document.getElementById("awardThree");
let hobbyOne = document.getElementById("hobbyOne");
let hobbyTwo = document.getElementById("hobbyTwo");

awardOne.addEventListener("mouseover", () => {
	awardOne.innerHTML =
		"Throughout my two years of middle school, I did my best to get the best grades I could in all my classes. In the end, my effort was rewarded, as I earned the Principal's Medallion medal for maintaining straight A’s throughout all of middle school.";
});
awardOne.addEventListener("mouseleave", () => {
	awardOne.innerHTML = "Principles Medallion";
});

awardTwo.addEventListener("mouseover", () => {
	awardTwo.innerHTML =
		"In 10th grade, I participated in the school talent show. In my left hand, I solved a Rubik’s Cube, while in the right, I juggled the ball around the cups of the kendama. From my performance, I was able to win the 3rd place prize out of about ten to twelve performances.";
});
awardTwo.addEventListener("mouseleave", () => {
	awardTwo.innerHTML = "Talent Show Award";
});

awardThree.addEventListener("mouseover", () => {
	awardThree.innerHTML =
		"At the most recent math competition I attended, there was also a Rubik’s Cube race. I participated, and while it was my first competition, I was able to secure the first place prize with a three solve average of about thirteen seconds.";
});
awardThree.addEventListener("mouseleave", () => {
	awardThree.innerHTML = "Rubik's Cube Award";
});

hobbyOne.addEventListener("mouseover", () => {
	hobbyOne.innerHTML =
		"Skill toys are one of my favorite things, and I am almost never without one. My main 3 skills of choice are speedsolving Rubik's Cubes, using kendamas, and juggling. Kendama is my oldest hobby, and has shown the most improvement. We all start by just barely catching it on one cup, but I have improved my skill to be able to juggle it around, balance it in unique spots, and finish by catching it on the spike. Rubik's Cubes are more recent, but most familiar to the average person. I average 12 seconds a solve, with a best of 7.12. In addition to this, I can solve them blindfolded, and have grown my collection to about 100 Rubik's-like puzzles. Lastly is juggling, which I took on to combine my other skills together. As stated, I can juggle the parts of a kendama to perform more creative tricks. However, I have taken it a step further, being able to juggle and solve Rubiks Cubes at the same time.";
	hobbyOne.style.display = "block";
});
hobbyOne.addEventListener("mouseleave", () => {
	hobbyOne.innerHTML = "Skill Toys";
	hobbyOne.style.display = "flex";
});

hobbyTwo.addEventListener("mouseover", () => {
	hobbyTwo.innerHTML =
		"Like most people my age, I greatly enjoy video games. I am overall a Nintendo supporter, with my favorite series being the Mario and Metroid series, and my favorite game being Super Mario Galaxy 2. However, I have more recently been trying out some other kinds of games, and have come to greatly enjoy Subnautica, Just Dance, and Minecraft.";
		hobbyTwo.style.display = "block";

	});
hobbyTwo.addEventListener("mouseleave", () => {
	hobbyTwo.innerHTML = "Gaming";
	hobbyTwo.style.display = "flex";

});
