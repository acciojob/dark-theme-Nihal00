// const btn = document.getElementById('app');
const swap = document.getElementById('swap');
const buttonDay = document.querySelector('.button_day');

function swapTheme() {
	swap.addEventListener('click', function() {
		buttonDay.style.color = 'blue';
	});
};

