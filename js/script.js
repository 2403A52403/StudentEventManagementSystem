let events = [
    { name: "Technical Fest", date: "2026-11-10" },
    { name: "Cultural Fest", date: "2026-11-15" },
    { name: "Sports Meet", date: "2026-11-20" }
];

const eventList = document.getElementById("event-list");
const eventChoice = document.getElementById("event-choice");

function displayEvents() {
    eventList.innerHTML = "";
    eventChoice.innerHTML = '<option value="">Select an event</option>';

    events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.textContent = event.name + " - " + event.date;
        eventList.appendChild(card);

        const option = document.createElement("option");
        option.value = event.name;
        option.textContent = event.name;
        eventChoice.appendChild(option);
    });
}

document.getElementById("registration-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("student-name").value.trim();
    const event = eventChoice.value;

    document.getElementById("registration-message").textContent =
        name + ", you have registered for " + event + "!";

    this.reset();
});

document.getElementById("event-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("new-event").value.trim();

    if (name && !events.some(event => event.name.toLowerCase() === name.toLowerCase())) {
        events.push({ name: name, date: "Date to be announced" });
        displayEvents();
        this.reset();
    }
});

displayEvents();
