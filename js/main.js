import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import Controls from "./controls.js";
import {
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
} from "./elements.js";

const timer = Timer({ minutesDisplay, secondsDisplay });
const sound = Sounds();
const controls = Controls();

Events({ timer, sound, controls });
