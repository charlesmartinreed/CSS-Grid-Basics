const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');

// images, updated when clicked, close button
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

//generate HTML based upon passed in widths and height
function generateHTML([h, v]) {
	return `
		<div class="item h${h} v${v}">
			<img src="images/${generateRandomNumber(12)}.jpg">
			<div class="item__overlay">
				<button>View -></button>
			</div>
		</div>
	`;
}

	function generateRandomNumber(limit) {
		return Math.floor(Math.random() * limit) + 1
	}

	// Array.from can take a length property
	// map the generated numbers in the array
	const digits = Array.from({length: 50}, () =>
	[generateRandomNumber(4), generateRandomNumber(4)]).concat([[1,1], [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
	console.log(digits);

	// for each index, the values are passed into generateHTML
	const html = digits.map(generateHTML).join('');
	console.log(html);

	// display the items on the page;
	gallery.innerHTML = html;
