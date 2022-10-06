import {
	btnTree,
	btnCloud,
	btnMarket,
	btnFire,
	fillPlay,
	fillStop,
	fillUpTimer,
	fillDownTimer,
	fillTree,
	fillCloud,
	fillMarket,
	fillFire,
} from "./elements.js";

export default function Controls() {
	function changeFill() {
		fillPlay.classList.toggle("color-icon-change");
		fillStop.classList.toggle("color-icon-change");
		fillUpTimer.classList.toggle("color-icon-change");
		fillDownTimer.classList.toggle("color-icon-change");
	}

	function changeDarkMode() {
		btnTree.classList.replace(
			"bg-button-unchecked-light",
			"bg-button-unchecked-dark"
		);
		fillTree.classList.add("fill-button-dark");

		btnCloud.classList.replace(
			"bg-button-unchecked-light",
			"bg-button-unchecked-dark"
		);
		fillCloud.classList.add("fill-button-dark");

		btnMarket.classList.replace(
			"bg-button-unchecked-light",
			"bg-button-unchecked-dark"
		);
		fillMarket.classList.add("fill-button-dark");

		btnFire.classList.replace(
			"bg-button-unchecked-light",
			"bg-button-unchecked-dark"
		);
		fillFire.classList.add("fill-button-dark");
	}

	function changeLightMode() {
		btnTree.classList.replace(
			"bg-button-unchecked-dark",
			"bg-button-unchecked-light"
		);
		fillTree.classList.toggle("fill-button-dark");

		btnCloud.classList.replace(
			"bg-button-unchecked-dark",
			"bg-button-unchecked-light"
		);
		fillCloud.classList.toggle("fill-button-dark");

		btnMarket.classList.replace(
			"bg-button-unchecked-dark",
			"bg-button-unchecked-light"
		);
		fillMarket.classList.toggle("fill-button-dark");

		btnFire.classList.replace(
			"bg-button-unchecked-dark",
			"bg-button-unchecked-light"
		);
		fillFire.classList.toggle("fill-button-dark");
	}

	return {
		changeFill,
		changeDarkMode,
		changeLightMode,
	};
}
