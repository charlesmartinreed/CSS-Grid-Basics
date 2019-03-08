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

	function handleClick(e) {
		// PER MDN: currentTarget always refers to the element to which the event handler has been attached, while event.target identifies the element on which the event occurs

		//look for the img inside of the current target and get its src
		// display it in the overlay image
		const src = e.currentTarget.querySelector('img').src;
		overlayImage.src = src;
		overlay.classList.add('open')
	}

	overlayClose.addEventListener('click', close);

	function close() {
		overlay.classList.remove('open');
	}

	// Array.from can take a length property
	// map the generated numbers in the array
	const digits = Array.from({length: 50}, () =>
	[generateRandomNumber(4), generateRandomNumber(4)]).concat([[1,1], [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
	//console.log(digits);

	// for each index, the values are passed into generateHTML
	const html = digits.map(generateHTML).join('');
	//console.log(html);

	// display the items on the page;
	gallery.innerHTML = html;

	//when item is clicked, show the overlay
	const items = document.querySelectorAll('.item');
	items.forEach(item => item.addEventListener('click', handleClick));
