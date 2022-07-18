const cardWrap = document.querySelector('section');
const cards = document.querySelectorAll('article');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('on', entry.isIntersecting);
		});
	},
	{ threshold: 1 }
);

const lastCardObserver = new IntersectionObserver((entries) => {
	const lastCard = entries[0];
	if (!lastCard.isIntersecting) return;
	loadCards();
	lastCardObserver.unobserve(lastCard.target);
	lastCardObserver.observe(document.querySelector('article:last-child'));
});

cards.forEach((card) => {
	observer.observe(card);
});

lastCardObserver.observe(document.querySelector('article:last-child'));

function loadCards() {
	for (let i = 1; i <= 5; i++) {
		const card = document.createElement('article');
		card.innerText = 'Box Created';
		card.classList.add('card' + i);
		observer.observe(card);
		cardWrap.append(card);
	}
}
