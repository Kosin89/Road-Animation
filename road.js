const camper = document.querySelector(".camper img")
const bear = document.querySelector(".move-bears")
const stoneSnake = document.querySelector(".snake-1")
const skullSnake = document.querySelector(".snake-2")
const clouds = document.querySelectorAll(".clouds")
const sun = document.querySelector(".sun")
const ballon = document.querySelector(".ballon")






const goCamper = () => {
	camper.classList.toggle("camper-animation")
}

const moveBear = () => {
	bear.classList.toggle("bear-animation")
}

const stoneSnakeAnimation = () => {
	stoneSnake.classList.toggle("snake-stone-animation")
}
const skullSnakeAnimation = () => {
	skullSnake.classList.toggle("snake-skull-animation")
}

function flyingClouds() {
	this.classList.toggle("clouds-animation")
}

for (let cloud of clouds) {
	cloud.addEventListener("click", flyingClouds)
}

const sunny = () => {
	sun.classList.toggle("sun-animation")
}

const flyingBallon = () => {
	ballon.classList.toggle("ballon-animation")
}





camper.addEventListener("click", goCamper)
bear.addEventListener("click", moveBear)
stoneSnake.addEventListener("click", stoneSnakeAnimation)
skullSnake.addEventListener("click", skullSnakeAnimation)
sun.addEventListener("click", sunny)
ballon.addEventListener("click", flyingBallon)






