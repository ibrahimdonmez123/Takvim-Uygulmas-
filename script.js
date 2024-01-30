const eventForm = document.querySelector('form');
const eventList = document.querySelector('#event-list');

eventForm.addEventListener('submit', function(e) {
	e.preventDefault();

	const eventName = document.querySelector('#event-name').value;
	const eventDate = document.querySelector('#event-date').value;
	const eventTime = document.querySelector('#event-time').value;
	const eventLocation = document.querySelector('#event-location').value;
	const eventDescription = document.querySelector('#event-description').value;
	const eventCategory = document.querySelector('#event-category').value;

	const event = document.createElement('li');
	event.innerHTML = `
		<h3>${eventName}</h3>
		<p>Date: ${eventDate}</p>
		<p>Time: ${eventTime}</p>
		<p>Location: ${eventLocation}</p>
		<p>Description: ${eventDescription}</p>
		<p>Category: ${eventCategory}</p>
		<button class="delete-btn">Delete</button>
	`;

	eventList.appendChild(event);

	eventForm.reset();
});

eventList.addEventListener('click', function(e) {
	if (e.target.classList.contains('delete-btn')) {
		const event = e.target.parentElement;
		eventList.removeChild(event);
	}
});
