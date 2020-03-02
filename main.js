
const clockContainer = document.querySelector(".clock-container")
const clockh = document.querySelector(".clockh")
const clockm = document.querySelector(".clockm")
const clockc = document.querySelector(".clockc")
const clocks = document.querySelector(".clocks")


function loadTime() {
	let date = new Date()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let firstNineMins = "0" + minute
	if (minute < 10) {
		minute = firstNineMins
	}
	let second = date.getSeconds()
	let firstNineSecs = "0" + second
	if (second < 10) {
		second = firstNineSecs
	}
	
	clockh.innerHTML = hour
	clockc.innerHTML = ":"
	clockm.innerHTML = minute
	clocks.innerHTML = second
	

}


loadTime()
setInterval(loadTime, 1000)