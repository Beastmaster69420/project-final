document.addEventListener('DOMContentLoaded', function () {
    // Sample data for upcoming events
    const upcomingEventsData = [
        { name: 'Event 1', date: '2024-01-15' },
        { name: 'Event 2', date: '2024-02-01' },
        { name: 'Event 3', date: '2024-03-10' }
    ];

    const upcomingEventsContainer = document.getElementById('upcomingEvents');

    // Display upcoming events dynamically
    upcomingEventsData.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event-item');
        eventElement.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p>`;
        upcomingEventsContainer.appendChild(eventElement);
    });
});
