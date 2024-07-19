// Write down your weight here and this small calculator should log how much you should be consuming in terms of calories and protein based on
// Jeff Nippard's latest video

const weight = 86.2;

function calculateCalories() {
	const weightPounds = weight * 2.205;
	const maxCalories = weightPounds * 12;
	const minCalories = weightPounds * 10;

	console.log(`Calories from ${minCalories} - ${maxCalories}`);
}

function calculateProtein() {
	const weightPounds = weight * 2.205;
	const minProtein = weightPounds * 0.8;
	const maxProtein = weightPounds * 1;

	console.log(`Protein from ${minProtein} - ${maxProtein}`);
}

calculateCalories();
calculateProtein();
