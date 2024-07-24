const GOTHIC_THEATER = "Gothic Theater"
const GOTHIC_THEATER_CITY = "Englewood"
const MISSION_BALLROOM_VENUE = "Mission Ballroom"
const MISSION_BALLROOM_CITY = "Denver"
const OGDEN_THEATER_VENUE = "Ogden Theatre"
const OGDEN_THEATER_CITY = "Denver"
const PARAMOUNT_THEATER_VENUE = "Paramount Theatre";
const PARAMOUNT_THEATER_CITY = "Denver";
const PIKES_PEAK_CENTER_VENUE = "Pikes Peak Center"
const PIKES_PEAK_CENTER_CITY = "Colorado Springs"
const STARGAZERS_VENUE = "Stargazers Theater"
const STARGAZERS_CITY = "Colorado Springs"
const RED_ROCKS = "Red Rocks Ampitheater"
const RED_ROCKS_CITY = "Morrison"


const SUPPORT_ACTS_CLASS = ".support-acts"

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
        city: GOTHIC_THEATER_CITY,
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
        city: GOTHIC_THEATER_CITY,
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
        supportActs: [false],
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
        headliner: "Ghost Funk Orchestra",
        supportActs: ["Fresh Fruit"],
        date: new Date("2024,08,10"),
        time: "7:00pm",
        venue: "Cervantes' Other Side",
        city: "Denver",
        state: "Co",
        ticketURL: "https://etix.com/ticket/p/86279479",
        bandInfo: "https://www.ghostfunkorchestra.com/",
        image: "./images/upcomingEvents/ghost-funk-tour.jpg"
    },
    {
        headliner: "Jon Anderson and The Band Geeks",
        supportActs: [false],
        date: new Date("2024,08,10"),
        time: "8:00pm",
        venue: "Paramount Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/jon-anderson-and-the-band-geeks-denver-colorado-08-10-2024/event/1E006065750E79BE",
        bandInfo: "https://www.jonanderson.com/",
        image: "./images/upcomingEvents/jon-anderson.jpg"
    },
    {
        headliner: "Dweezil Zappa",
        supportActs: [false, "The Rox(Postroph)y Tour"],
        date: new Date("2024,08,12"),
        time: "8:00pm",
        venue: PARAMOUNT_THEATER_VENUE,
        city: PARAMOUNT_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/kbco-presents-dweezil-zappa-the-roxpostrophy-denver-colorado-08-12-2024/event/1E006066A16C423B?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
        bandInfo: "https://www.dweezilzappa.com/",
        image: "https://cdn.connectsites.net/user_files/newdweezil/site_assets/000/050/323/original.jpg?1709591193"
    },
    {
        headliner: "The Alan Parsons Live Project",
        supportActs: [false],
        date: new Date("2024,08,14"),
        time: "8:00pm",
        venue: PARAMOUNT_THEATER_VENUE,
        city: PARAMOUNT_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/event/1E0060A9DAD84C3A",
        bandInfo: "https://alanparsons.com/",
        image: "./images/upcomingEvents/alan-parsons-tour.webp"
    },
    {
        headliner: "The Aristocrats",
        supportActs: [false],
        date: new Date("2024,08,15"),
        time: "8:00pm",
        venue: "Bluebird Theater",
        city: "Denver",
        state: "Co",
        ticketURL: "https://www.axs.com/events/542295/the-aristocrats-tickets?_locale=en-US",
        bandInfo: "https://the-aristocrats-band.com/",
        image: "./images/upcomingEvents/aristocrats-tour.jpg"
    },
    {
        headliner: "Mastodon & Lamb of God",
        supportActs: ["Kerry King", "Malevolence"],
        date: new Date("2024,08,29"),
        time: "8:00pm",
        venue: RED_ROCKS,
        city: RED_ROCKS_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/529744/lamb-of-god-mastodon-tickets/staticDetails?_locale=en-US",
        bandInfo: "https://www.mastodonrocks.com/",
        image: "https://images.discovery-prod.axs.com/2024/02/lamb-of-god-mastodon-tickets_08-29-24_17_65c253a31f4cb.jpg"
    },
    {
        headliner: "Rush Archives",
        supportActs: [false, "A Tribute to Rush"],
        date: new Date("2024,09,14"),
        time: "7:00pm",
        venue: STARGAZERS_VENUE,
        city: STARGAZERS_CITY,
        state: "Co",
        ticketURL: "https://stargazerstheatre.com/product/rush-archives-sept-14/?_gl=1*fee2ch*_ga*MTQ4OTM1OTc5Ny4xNzIwODM2MzIx*_ga_440DG1JZMQ*MTcyMDgzNjMyMC4xLjEuMTcyMDgzNjMyOS4wLjAuMA..#tickets",
        bandInfo: "https://www.facebook.com/rusharchives/",
        image: "https://stargazerstheatre.com/wp-content/uploads/2024/01/RushArchivesPhotoGuys.jpg"
    },
    {
        headliner: "Leprous",
        supportActs: ["Monuments", "Fight the Fight"],
        date: new Date("2024,09,23"),
        time: "7:00pm",
        venue: GOTHIC_THEATER,
        city: GOTHIC_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.gothictheatre.com/events/detail/?event_id=540678",
        bandInfo: "https://leprous.net/",
        image: "./images/upcomingEvents/leprous-tour.jpg"
    },
    {
        headliner: "Al Di Meola Electric Band",
        supportActs: [false],
        date: new Date("2024,10,01"),
        time: "6:30pm",
        venue: "Chautauqua Auditorium",
        city: "Boulder",
        state: "Co",
        ticketURL: "https://www.z2ent.com/events/detail/al-di-meola-2024-cha",
        bandInfo: "https://www.aldimeola.com/",
        image: "https://www.z2ent.com/assets/img/2024-04-12-Al-Di-Meola-NYC-Ehud-Lazin-62-57308fbe87.jpg"
    },
    {
        headliner: "Jinjer",
        supportActs: ["Hanabie", " Born of Osiris"],
        date: new Date("2024,10,09"),
        time: "6:30pm",
        venue: OGDEN_THEATER_VENUE,
        city: OGDEN_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/583353/jinjer-tickets",
        bandInfo: "http://jinjer-metal.com/",
        image: "https://images.discovery-prod.axs.com/2024/06/jinjer-tickets_10-09-24_17_666790b950975.jpg"
    },
    {
        headliner: "Kansas",
        supportActs: [false, "Another Fork in the Road - 50th Anniversary Tour "],
        date: new Date("2024,10,11"),
        time: "7:30pm",
        venue: PIKES_PEAK_CENTER_VENUE,
        city: PIKES_PEAK_CENTER_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/536874/kansas-tickets?skin=pikespeakcenter",
        bandInfo: "https://www.kansasband.com/",
        image: "https://images.discovery-prod.axs.com/2024/04/kansas_04-02-24_19_660b5b104081c.png"
    },
    {
        headliner: "Opeth",
        supportActs: ["Tribulation"],
        date: new Date("2024,10,27"),
        time: "7:30pm",
        venue: MISSION_BALLROOM_VENUE,
        city: MISSION_BALLROOM_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/543846/opeth-tickets?skin=missionballroom",
        bandInfo: "https://www.opeth.com/",
        image: "./images/upcomingEvents/opeth-2024.jpg"
    },
    {
        headliner: "Animals As Leaders",
        supportActs: [false, "Joy Of Motion X Tour"],
        date: new Date("2024,11,06"),
        time: "7:00pm",
        venue: "Summit Music Hall",
        city: "Denver",
        state: "Co",
        ticketURL: "https://concerts.livenation.com/animals-as-leaders-joy-of-motion-denver-colorado-11-06-2024/event/1E00609514CE5B54?_gl=1*smo53j*_ga*ODEwNzM5MzcyLjE3MTg5MjU5NDY.*_ga_BKTTLZFK7N*MTcxODk5NTY5OC4yLjEuMTcxODk5NTg1OS4wLjAuMA..*_gcl_au*NDExNzQ0MjM2LjE3MTg5MjU5NDY.*_ga_C1T806G4DF*MTcxODk5NTY5OC4yLjAuMTcxODk5NTY5OC42MC4wLjA.*_ga_H1KKSGW33X*MTcxODk5NTY5OC4yLjAuMTcxODk5NTY5OC42MC4wLjA.",
        bandInfo: "https://animalsasleaders.org/",
        image: "./images/upcomingEvents/animals-as-leaders-tour.jpg"
    },
    {
        headliner: "Beat",
        supportActs: [false, "Belew/Vai/Levin/Carey play 80s King Crimson"],
        date: new Date("2024,11,06"),
        time: "8:00pm",
        venue: PARAMOUNT_THEATER_VENUE,
        city: PARAMOUNT_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/beat-belewvailevincarey-play-80s-king-crimson-denver-colorado-11-06-2024/event/1E00607B88F91473?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
        bandInfo: "https://beat-tour.com/",
        image: "./images/upcomingEvents/beat-tour.jpg"
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
            eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = event.supportActs[0];
        }
        else if (event.supportActs[0] === false && event.supportActs.length === 1) {
            eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = `\u00A0`;

        }
        else if (event.supportActs[0] === false && event.supportActs.length === 2) {
            eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = `${event.supportActs[1]}`;
        }
        else {
            const supportActsString = event.supportActs.join(', ');
            eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = `with ${supportActsString}`;
        }
    }
    else {
        eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = `\u00A0`;
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