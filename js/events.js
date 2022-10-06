import {
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
} from "./elements.js";

export default function Events({ timer, sound, controls }) {
	ctrlPlay.addEventListener("click", function () {
		timer.countdown();
	});

	ctrlStop.addEventListener("click", function () {
		timer.hold();
	});

	ctrlUpTimer.addEventListener("click", function () {
		timer.upTimer();
	});

	ctrlDownTimer.addEventListener("click", function () {
		timer.downTimer();
	});

	btnTree.addEventListener("click", function () {
		sound.playTree();
		sound.btnColorChange(btnTree, fillTree);
	});

	btnCloud.addEventListener("click", function () {
		sound.playCloud();
		sound.btnColorChange(btnCloud, fillCloud);
	});

	btnMarket.addEventListener("click", function () {
		sound.playMarket();
		sound.btnColorChange(btnMarket, fillMarket);
	});

	btnFire.addEventListener("click", function () {
		sound.playFire();
		sound.btnColorChange(btnFire, fillFire);
	});

	lightModeButton.addEventListener("click", function () {
		lightModeButton.classList.add("hide");
		darkModeButton.classList.remove("hide");

		appBody.classList.remove("bg-light-mode");
		appBody.classList.add("bg-dark-mode");

		controls.changeDarkMode();
		controls.changeFill();
	});

	darkModeButton.addEventListener("click", function () {
		lightModeButton.classList.remove("hide");
		darkModeButton.classList.add("hide");

		appBody.classList.add("bg-light-mode");
		appBody.classList.remove("bg-dark-mode");

		controls.changeLightMode();
		controls.changeFill();
	});
}
