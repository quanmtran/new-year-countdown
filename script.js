function newYearCountdown() {
	const now = new Date();
	const nextYear = now.getFullYear() + 1;

	document.querySelector('#new-year').innerText = nextYear;

	const newYear = new Date(`${nextYear}-01-01 00:00:00`);

	const millisecs = newYear - now;
	const daysMultiplier = 8.64e7;
	const hoursMultiplier = 3.6e6;
	const minsMultiplier = 60000;
	const secsMultiplier = 1000;

	const days = Math.floor(millisecs / daysMultiplier);
	const hours = Math.floor(
		(millisecs - days * daysMultiplier) / hoursMultiplier
	);
	const mins = Math.floor(
		(millisecs - (days * daysMultiplier + hours * hoursMultiplier)) /
			minsMultiplier
	);
	const secs = Math.floor(
		(millisecs -
			(days * daysMultiplier +
				hours * hoursMultiplier +
				mins * minsMultiplier)) /
			secsMultiplier
	);

	document.querySelector('#day').innerText = days;
	document.querySelector('#hour').innerText = hours;
	document.querySelector('#minute').innerText = mins;
	document.querySelector('#second').innerText = secs;
}

setInterval(newYearCountdown, 1000);
