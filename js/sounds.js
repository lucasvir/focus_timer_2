import {
	volumeSliderCloud,
	volumeSliderFire,
	volumeSliderMarket,
	volumeSliderTree,
} from "./elements.js";

export default function Sounds() {
	const treeAudio = new Audio("./assets/audio/Floresta.wav");
	treeAudio.volume = 0.5;
	treeAudio.loop = true;
	// treeAudio.controls = true;

	const cloudAudio = new Audio("./assets/audio/Chuva.wav");
	cloudAudio.volume = 0.5;
	cloudAudio.loop = true;
	// cloudAudio.controls = true;

	const marketAudio = new Audio("./assets/audio/Cafeteria.wav");
	marketAudio.volume = 0.5;
	marketAudio.loop = true;
	// marketAudio.controls = true;

	const fireAudio = new Audio("./assets/audio/Lareira.wav");
	fireAudio.volume = 0.5;
	fireAudio.loop = true;
	// fireAudio.controls = true;

	volumeSliderTree.addEventListener("change", function (element) {
		treeAudio.volume = element.currentTarget.value / 100;
	});

	volumeSliderCloud.addEventListener("change", function (element) {
		cloudAudio.volume = element.currentTarget.value / 100;
	});

	volumeSliderMarket.addEventListener("change", function (element) {
		marketAudio.volume = element.currentTarget.value / 100;
	});

	volumeSliderFire.addEventListener("change", function (element) {
		fireAudio.volume = element.currentTarget.value / 100;
	});

	function btnColorChange(btn, fill) {
		btn.classList.toggle("bg-check");
		fill.classList.toggle("color-icon-change");
	}

	function playTree() {
		let isTreePaused = treeAudio.paused || treeAudio.ended;

		if (isTreePaused) {
			treeAudio.muted = false;
			treeAudio.play();
		} else {
			treeAudio.pause();
		}

		cloudAudio.muted = true;
		marketAudio.muted = true;
		fireAudio.muted = true;
	}

	function playCloud() {
		let isCloudPaused = cloudAudio.paused || cloudAudio.ended;

		if (isCloudPaused) {
			cloudAudio.muted = false;
			cloudAudio.play();
		} else {
			cloudAudio.pause();
		}

		treeAudio.muted = true;
		marketAudio.muted = true;
		fireAudio.muted = true;
	}

	function playMarket() {
		let isMarketPaused = marketAudio.paused || marketAudio.ended;

		if (isMarketPaused) {
			marketAudio.muted = false;
			marketAudio.play();
		} else {
			marketAudio.pause();
		}

		treeAudio.muted = true;
		cloudAudio.muted = true;
		fireAudio.muted = true;
	}

	function playFire() {
		let isFirePaused = fireAudio.paused || fireAudio.ended;

		if (isFirePaused) {
			fireAudio.muted = false;
			fireAudio.play();
		} else {
			fireAudio.pause();
		}

		treeAudio.muted = true;
		cloudAudio.muted = true;
		marketAudio.muted = true;
	}

	return {
		btnColorChange,
		playTree,
		playCloud,
		playMarket,
		playFire,
	};
}
