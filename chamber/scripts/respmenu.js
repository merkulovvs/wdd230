const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const navLinks = document.querySelector('.nav-link');

navLinks.forEach(link => {
	link.addEventListener('click', function () {
		//Remove "active" class from all links
		navLinks.forEach(link => link.classList.remove('active'));

		//Add "active" class to the clicked link
		this.classList.add('active');
	});
});