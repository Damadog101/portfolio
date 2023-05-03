let awardOne = document.getElementById("awardOne");
let awardTwo = document.getElementById("awardTwo");
let awardThree = document.getElementById("awardThree");


awardOne.addEventListener("mouseover", () => {
    awardOne.innerHTML = "Throughout my two years of middle school, I did my best to get the best grades I could in all my classes. In the end, my effort was rewarded, as I earned the Principal's Medallion medal for maintaining straight A’s throughout all of middle school."
})
awardOne.addEventListener("mouseleave", () => {
    awardOne.innerHTML = "Principles Medallion"
})

awardTwo.addEventListener("mouseover", () => {
    awardTwo.innerHTML = "In 10th grade, I participated in the school talent show. In my left hand, I solved a Rubik’s Cube, while in the right, I juggled the ball around the cups of the kendama. From my performance, I was able to win the 3rd place prize out of about ten to twelve performances."
})
awardTwo.addEventListener("mouseleave", () => {
    awardTwo.innerHTML = "Talent Show Award"
})

awardThree.addEventListener("mouseover", () => {
    awardThree.innerHTML = "At the most recent math competition I attended, there was also a Rubik’s Cube race. I participated, and while it was my first competition, I was able to secure the first place prize with a three solve average of about thirteen seconds."
})
awardThree.addEventListener("mouseleave", () => {
    awardThree.innerHTML = "Rubik's Cube Award"
})