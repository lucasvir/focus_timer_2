const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const appBody = document.querySelector("body");

const ctrlPlay = document.querySelector(".btn-play");
const ctrlStop = document.querySelector(".btn-stop");
const ctrlUpTimer = document.querySelector(".btn-up");
const ctrlDownTimer = document.querySelector(".btn-down");

const btnTree = document.querySelector(".tree-button");
const btnCloud = document.querySelector(".cloud-button");
const btnMarket = document.querySelector(".market-button");
const btnFire = document.querySelector(".fire-button");

const fillTree = document.querySelector(".tree-fill");
const fillCloud = document.querySelector(".cloud-fill");
const fillMarket = document.querySelector(".market-fill");
const fillFire = document.querySelector(".fire-fill");

const fillPlay = document.querySelector(".fill-play");
const fillStop = document.querySelector(".fill-stop");
const fillUpTimer = document.querySelector(".fill-up-timer");
const fillDownTimer = document.querySelector(".fill-down-timer");

const lightModeButton = document.querySelector(".light-mode-icon");
const darkModeButton = document.querySelector(".dark-mode-icon");

let volumeSliderTree = document.getElementById("volume-slider-tree");
let volumeSliderCloud = document.getElementById("volume-slider-cloud");
let volumeSliderMarket = document.getElementById("volume-slider-market");
let volumeSliderFire = document.getElementById("volume-slider-fire");

let seconds = Number(secondsDisplay.textContent);
let minutes = Number(minutesDisplay.textContent);

export {
	minutes,
	seconds,
	minutesDisplay,
	secondsDisplay,
	ctrlPlay,
	ctrlStop,
	ctrlUpTimer,
	ctrlDownTimer,
	btnTree,
	btnCloud,
	btnMarket,
	btnFire,
	fillTree,
	fillCloud,
	fillMarket,
	fillFire,
	fillPlay,
	fillStop,
	fillUpTimer,
	fillDownTimer,
	lightModeButton,
	darkModeButton,
	appBody,
	volumeSliderTree,
	volumeSliderCloud,
	volumeSliderMarket,
	volumeSliderFire,
};
