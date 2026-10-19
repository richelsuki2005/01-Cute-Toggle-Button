const toggleContainer= document.getElementById('toggleContainer');

let isOn = false;

toggleContainer.addEventListener('click', () => {

	isOn = !isOn;

	if(isOn) {
		toggleContainer.classList.add('active');
		document.body.classList.add('light-mode');

	}
	else {
		toggleContainer.classList.remove('active');
		document.body.classList.remove('light-mode');
		
	}
});