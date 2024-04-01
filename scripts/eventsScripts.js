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
        supportActs: ['Trope'],
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
        headliner: "Between the Buried and Me",
        supportActs: [],
        date: new Date("2024,04,03"),
        time: "7:00pm",
        venue: "Summit",
        city: "Denver",
        state: "Co",
        ticketURL: "https://concerts.livenation.com/between-the-buried-and-me-presents-denver-colorado-04-03-2024/event/1E00602CDA763CE3?_gl=1*bfro7j*_ga*MTU5NzgzOTAxMC4xNzEwMTA2NDEx*_ga_BKTTLZFK7N*MTcxMDY5Nzg4MC4yLjEuMTcxMDY5ODEzOS4wLjAuMA..",
        bandInfo: "https://www.betweentheburiedandme.com/",
        image: "./images/upcomingEvents/between-the-buried-and-me.jpg" 
    },
    {
        headliner: "Between the Buried and Me",
        supportActs: [],
        date: new Date("2024,04,04"),
        time: "7:00pm",
        venue: "Summit",
        city: "Denver",
        state: "Co",
        ticketURL: "https://concerts.livenation.com/between-the-buried-and-me-presents-denver-colorado-04-04-2024/event/1E00602CD92B3CA4?_gl=1*n91ple*_ga*MTU5NzgzOTAxMC4xNzEwMTA2NDEx*_ga_BKTTLZFK7N*MTcxMDY5Nzg4MC4yLjEuMTcxMDY5ODE0NC4wLjAuMA..",
        bandInfo: "https://www.betweentheburiedandme.com/",
        image: "./images/upcomingEvents/between-the-buried-and-me.jpg" 
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
    {
        headliner: "Kamelot",
        supportActs: ['Hammerfall', 'Ad Infinitum'],
        date: new Date("2024,05,14"),
        time: "6:00pm",
        venue: "Summit",
        city: "Denver",
        state: "Co",
        ticketURL: "https://concerts.livenation.com/kamelot-awaken-the-world-tour-2024-denver-colorado-05-14-2024/event/1E00602B08024683?_gl=1*17ysrks*_ga*MTU5NzgzOTAxMC4xNzEwMTA2NDEx*_ga_BKTTLZFK7N*MTcxMDY5Nzg4MC4yLjEuMTcxMDY5ODI1OS4wLjAuMA..",
        bandInfo: "https://kamelot.com/",
        image: "./images/upcomingEvents/kamelot.jpg"
    },
    {
        headliner: "Todd Rundgren",
        supportActs: [],
        date: new Date("2024,06,16"),
        time: "8:00pm",
        venue: "Paramount Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/todd-rundgren-mewe-denver-colorado-06-16-2024/event/1E00602CE8CE41CE",
        bandInfo: "http://www.todd-rundgren.com/?utm_source=Tedium&utm_campaign=Tedium_08_08_2019&utm_medium=email",
        image: "./images/upcomingEvents/todd-me-we.jpg"
    },
    {
        headliner: "Jon Anderson and The Band Geeks",
        supportActs: [],
        date: new Date("2024,08,10"),
        time: "8:00pm",
        venue: "Paramount Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/jon-anderson-and-the-band-geeks-denver-colorado-08-10-2024/event/1E006065750E79BE",
        bandInfo: "https://www.jonanderson.com/",
        image: "./images/upcomingEvents/jon-anderson.jpg"
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