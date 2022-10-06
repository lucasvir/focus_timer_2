// import { minutesDisplay, secondsDisplay } from "./elements.js";

export default function Timer({ minutesDisplay, secondsDisplay }) {
	let timerTimeOut;
	let seconds = Number(secondsDisplay.textContent);
	let minutes = Number(minutesDisplay.textContent);

	function countdown() {
		timerTimeOut = setTimeout(function () {
			const isTimerEnd = minutes == 0 && seconds == 0;

			updateDisplay(minutes, 0);

			if (seconds <= 0) {
				seconds = 60;
				--minutes;
			}

			if (isTimerEnd) {
				return;
			}

			updateDisplay(minutes, --seconds);

			countdown();
		}, 1000);
	}

	function upTimer() {
		minutes = minutes + 5;
		updateDisplay(minutes, seconds);

		if (minutes >= 99) {
			minutesDisplay.textContent = "99";
		}
	}

	function downTimer() {
		minutes = minutes - 5;
		updateDisplay(minutes, seconds);

		if (minutes <= 0) {
			minutesDisplay.textContent = "00";
		}
	}

	function updateDisplay(minutes, seconds) {
		minutesDisplay.textContent = String(minutes).padStart(2, "0");
		secondsDisplay.textContent = String(seconds).padStart(2, "0");
	}

	function hold() {
		clearTimeout(timerTimeOut);
	}

	return {
		countdown,
		updateDisplay,
		hold,
		upTimer,
		downTimer,
	};
}
