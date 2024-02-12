const events = [


    {
        headliner: "Haken",
        supportActs: ["An Evening With Haken"],
        date: new Date("2024,02,15"),
        time: "8:00pm",
        venue: "Boulder Theater",
        city: "Boulder",
        state: "Co",
        ticketURL: "https://www.axs.com/events/502001/haken-tickets",
        bandInfo: "https://hakenmusic.com/",
        image: "./images/upcomingEvents/haken-band-image.jpg"
    },
    {
        headliner: "The 2024 Progfest",
        supportActs: [],
        date: new Date("2024,2,18"),
        time: "3:00pm",
        venue: "Nissi's",
        city: "Lafayette",
        state: "Co",
        ticketURL: "https://nissis.com/events/progfest-451/",
        bandInfo: "https://www.coloradoprog.com/",
        image: "./images/upcomingEvents/progfest-2024-small.jpg"
    },
    {
        headliner: "Sleepytime Gorrila Museum",
        supportActs: ['Dreadnought', 'Surplus 1980 featuring Moe Staiano'],
        date: new Date("2024,3,7"),
        time: "7:00pm",
        venue: "Bluebird Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.axs.com/events/506879/sleepytime-gorilla-museum-tickets",
        bandInfo: "https://www.facebook.com/sleepytimegorillamuseum/",
        image: "./images/upcomingEvents/sleepytime-gorilla-concert.jpg"
    },

    {
        headliner: "Sleep Token",
        supportActs: ['Empire State Bastard'], 
        date: new Date("2024,5,12"),
        time: "6:30pm",
        venue: "Red Rocks",
        city: "Morrison",
        state: "Co",
        ticketURL: "https://www.axs.com/events/520382/sleep-token-tickets",
        bandInfo: "https://www.sleep-token.com/",
        image: "./images/upcomingEvents/sleep-token-concert.jpg"
    },
    {
        headliner: "Wheel",
        supportActs: ['Aviations'], 
        date: new Date("2024,5,16"),
        time: "8:00pm",
        venue: "Moe's",
        city: "Englewood",
        state: "Co",
        ticketURL: "https://www.eventbrite.com/e/wheel-w-aviations-tickets-811926944347",
        bandInfo: "http://wheelband.net/",
        image: "./images/upcomingEvents/wheel-band.jpg"
    },
    {
        headliner: "Soen",
        supportActs: [],
        date: new Date("2024,06,09"),
        time: "7:30pm",
        venue: "Bluebird Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.axs.com/events/498617/soen-tickets",
        bandInfo: "https://soenmusic.com/",
        image: "./images/upcomingEvents/soen.jpg"
    },
    {
        headliner: "The Ocean",
        supportActs: ["The World Is A Beautiful Place & I Am No Longer Afraid To Die", "Shy", "Low"],
        date: new Date("2024,02,20"),
        time: "8:00pm",
        venue: "Bluebird Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.axs.com/events/510028/the-ocean-tickets?q=the+Ocean",
        bandInfo: "https://www.theoceancollective.com/",
        image: "./images/upcomingEvents/theOceanCollective.jpg"
        
    },
    {
        headliner: "Queensryche",
        supportActs: ["Armored Saint"],
        date: new Date("2024,04,03"),
        time: "6:00pm",
        venue: "Gothic Theater",
        city: "Englewood",
        state: "Co",
        ticketURL: "https://www.gothictheatre.com/events/detail/?event_id=509530",
        bandInfo: "http://www.queensrycheofficial.com/",
        image: "./images/upcomingEvents/Queensryche.jpeg"
        
    },
    {
        headliner: "Geoff Tate",
        supportActs: ['Fire and Water'],
        date: new Date("2024,04,12"),
        time: "6:00pm",
        venue: "Gothic Theater",
        city: "Englewood",
        state: "Co",
        ticketURL: "https://www.axs.com/artists/121926/geoff-tate-tickets",
        bandInfo: "https://www.geofftate.com/",
        image: "./images/upcomingEvents/GeoffTate.jpg"
    },
]

const whereToPlaceEvents = document.getElementById("cards-section");

// Filter out the events that are in the past so we only show events in the future
const currentDate = new Date();
const futureEvents = events.filter(event => event.date >= currentDate);

futureEvents.sort((a, b) => a.date - b.date);

futureEvents.forEach(event => {
    const eventTemplate = document.getElementById("event-item-template");
    const eventItem = eventTemplate.content.cloneNode(true);

    eventItem.querySelector(".band-photo").src = event.image;
    eventItem.querySelector(".band-photo").alt = `image of ${event.headliner}`;
    eventItem.querySelector(".headliner-act").innerText = event.headliner;

    if(event.supportActs.length > 0) {
        if(event.supportActs.includes("An Evening With...")) {
            eventItem.querySelector(".support-acts").innerText = event.supportActs[0];
        }
        else {
            const supportActsString = event.supportActs.join(', ');
            eventItem.querySelector(".support-acts").innerText = `${supportActsString}`;
        }
    }
    else {
        eventItem.querySelector(".support-acts").innerText = `\u00A0`;
    }

    eventItem.querySelector(".event-date").innerText = `${event.date.toLocaleString('en-US', 
                                                            {weekday: 'short', 
                                                                year: 'numeric', 
                                                                month: 'short', 
                                                                day: 'numeric' })}`;

    eventItem.querySelector(".event-time").innerText = event.time;
    eventItem.querySelector(".event-venue").innerText = event.venue;
    eventItem.querySelector(".event-location").innerText = `${event.city}, ${event.state}`;
    eventItem.querySelector(".btn-tickets").href = event.ticketURL;
    eventItem.querySelector(".btn-tickets").target = '_blank';
    eventItem.querySelector(".btn-artist-info").href = event.bandInfo;
    eventItem.querySelector(".btn-artist-info").target = '_blank';

    whereToPlaceEvents.append(eventItem);
});