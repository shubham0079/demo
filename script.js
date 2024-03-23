const jug1 = document.getElementById('jug1');
const jug2 = document.getElementById('jug2');
const fill1 = document.getElementById('fill1');
const fill2 = document.getElementById('fill2');
const empty1 = document.getElementById('empty1');
const empty2 = document.getElementById('empty2');
const pour1to2 = document.getElementById('pour1to2');
const pour2to1 = document.getElementById('pour2to1');
const steps = document.getElementById('steps');

let jug1Volume = 0;
let jug2Volume = 0;
let maxJug1Volume = 3;
let maxJug2Volume = 5;

fill1.addEventListener('click', () => {
	jug1Volume = maxJug1Volume;
	updateJugs();
});

fill2.addEventListener('click', () => {
	jug2Volume = maxJug2Volume;
	updateJugs();
});

empty1.addEventListener('click', () => {
	jug1Volume = 0;
	updateJugs();
});

empty2.addEventListener('click', () => {
	jug2Volume = 0;
	updateJugs();
});

pour1to2.addEventListener('click', () => {
	if (jug1Volume > 0) {
		const amountToPour = Math.min(jug1Volume, maxJug2Volume - jug2Volume);
		jug1Volume -= amountToPour;
		jug2Volume += amountToPour;
		updateJugs();
	}
});

pour2to1.addEventListener('click', () => {
	if (jug2Volume > 0) {
		const amountToPour = Math.min(jug2Volume, maxJug1Volume - jug1Volume);
		jug2Volume -= amountToPour;
		jug1Volume += amountToPour;
		updateJugs();
	}
});

function updateJugs() {
	jug1.style.height = `${(jug1Volume / maxJug1Volume) * 200}px`;
	jug2.style.height = `${(jug2Volume / maxJug2Volume) * 200}px`;
	steps.innerHTML = `Jug 1: ${jug1Volume} / ${maxJug1Volume}<br>Jug 2: ${jug2Volume} / ${maxJug2Volume}`;
}