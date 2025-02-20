const AGGIE_THEATER_VENUE = "Aggie Theater"
const AGGIE_THEATER_CITY = "Ft. Collins"
const BALL_ARENA_VENUE = "Ball Arena"
const BALL_ARENA_CITY = "Denver"
const BLACK_SHEEP_VENUE = "Black Sheep"
const BLACK_SHEEP_CITY = "Colorado Springs"
const BOULDER_THEATER_VENUE = "Boulder Theater"
const BOULDER_THEATER_CITY = "Boulder"
const FILLMORE_AUDITORIUM_VENUE = "Fillmore Auditorium"
const FILLMORE_AUDITORIUM_CITY = "Denver"
const FOX_THEATER_VENUE = "Fox Theater"
const FOX_THEATER_CITY = "Boulder"
const GOTHIC_THEATER = "Gothic Theater"
const GOTHIC_THEATER_CITY = "Englewood"
const HQ_VENUE = "HQ"
const HQ_CITY = "Denver"
const MISSION_BALLROOM_VENUE = "Mission Ballroom"
const MISSION_BALLROOM_CITY = "Denver"
const NISSIS_VENUE = "Nissi's"
const NISSIS_CITY = "Lafayette"
const OGDEN_THEATER_VENUE = "Ogden Theatre"
const OGDEN_THEATER_CITY = "Denver"
const ORIENTAL_THEATER = "The Oriental Theater"
const ORIENTAL_THEATER_CITY = "Denver"
const PARAMOUNT_THEATER_VENUE = "Paramount Theatre";
const PARAMOUNT_THEATER_CITY = "Denver";
const PIKES_PEAK_CENTER_VENUE = "Pikes Peak Center"
const PIKES_PEAK_CENTER_CITY = "Colorado Springs"
const STARGAZERS_VENUE = "Stargazers Theater"
const STARGAZERS_CITY = "Colorado Springs"
const SUMMIT_VENUE = "Summit Music Hall"
const SUMMIT_CITY = "Denver"
const RED_ROCKS = "Red Rocks Ampitheater"
const RED_ROCKS_CITY = "Morrison"


const SUPPORT_ACTS_CLASS = ".support-acts"

const events = [
    {
        headliner: "Dream Theater",
        supportActs: [false, "40th Anniversary Tour"],
        date: new Date("2025/03/06"),
        time: "7:30pm",
        venue: MISSION_BALLROOM_VENUE,
        city: MISSION_BALLROOM_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/669645/dream-theater-tickets?skin=missionballroom",
        bandInfo: "https://dreamtheater.net/",
        image: "https://images.discovery-prod.axs.com/2024/09/an-evening-with-dream-theater-tickets_03-06-25_17_66dfb4d7e3515.jpg"
    },
    {
        headliner: "Intervals",
        supportActs: ["VOLO, Arch Echo"],
        date: new Date("2025/03/11"),
        time: "7:30pm",
        venue: GOTHIC_THEATER,
        city: GOTHIC_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/719764/intervals-tickets",
        bandInfo: "https://intrvls.com/",
        image: "https://images.discovery-prod.axs.com/2025/01/intervals-tickets_03-11-25_17_6791321b08b13.jpg"
    },
    {
        headliner: "Alcest",
        supportActs: ["Kaelan Mikla"],
        date: new Date("2025/03/14"),
        time: "6:30pm",
        venue: SUMMIT_VENUE,
        city: SUMMIT_CITY,
        state: "Co",
        ticketURL: "https://concerts.livenation.com/alcest-les-chants-de-laurore-north-denver-colorado-03-14-2025/event/1E00612F141966AD?_gl=1*kybosl*_ga*MTY0Mjk3ODIxMS4xNzI0MDg0MTI5*_ga_BKTTLZFK7N*MTcyNzQ4OTUzOC40LjEuMTcyNzQ4OTU3NS4wLjAuMA..*_gcl_au*MTM4ODM2MzYzNi4xNzI0MDg0MTMw*_ga_C1T806G4DF*MTcyNzQ4OTUzOS40LjAuMTcyNzQ4OTUzOS42MC4wLjA.*_ga_H1KKSGW33X*MTcyNzQ4OTUzOS40LjAuMTcyNzQ4OTUzOS42MC4wLjA.",
        bandInfo: "https://www.nuclearblast.com/pages/alcest",
        image: "https://www.invisibleoranges.com/wp-content/uploads/2017/01/23/alcest-4-1052x592.jpg?t=1689342948"
    },
    {
        headliner: "Russian Circles",
        supportActs: ["Pelican"],
        date: new Date("2025/03/19"),
        time: "8:00pm",
        venue: GOTHIC_THEATER,
        city: GOTHIC_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/758066/russian-circles-tickets",
        bandInfo: "https://russiancircles.com/home",
        image: "https://images.discovery-prod.axs.com/2019/05/russian-circles_05-18-19_19_5ce037413a1c1.jpg"
    },
    {
        headliner: "Geoff Tate",
        supportActs: ["Fire and Water"],
        date: new Date("2025/03/21"),
        time: "5:30pm",
        venue: SUMMIT_VENUE,
        city: SUMMIT_CITY,
        state: "Co",
        ticketURL: "https://www.gothictheatre.com/events/detail/?event_id=686834",
        bandInfo: "https://www.geofftate.com/",
        image: "https://images.discovery-prod.axs.com/2024/09/geoff-tate-s-operation-mindcrime-the-final-chapter-tickets_03-21-25_17_66fb311bf30c9.jpg"
    },
    {
        headliner: "Meshuggah",
        supportActs: ["Cannibal Corpse", "Carcass"],
        date: new Date("2025/04/04"),
        time: "6:30pm",
        venue: FILLMORE_AUDITORIUM_VENUE,
        city: FILLMORE_AUDITORIUM_CITY,
        state: "Co",
        ticketURL: "https://concerts.livenation.com/meshuggah-with-special-guests-cannibal-corpse-denver-colorado-04-04-2025/event/1E006179E23020C8?_gl=1*1v6bok5*_ga*MTU5NjQxMTU2MC4xNzMzNTk5MDk3*_ga_MMQ2C7CEJ5*MTczMzU5OTA5Ni4xLjEuMTczMzU5OTQ2NC4wLjAuMA..*_gcl_au*OTI3MDAyNTc2LjE3MzM1OTkwOTc.*_ga_H1KKSGW33X*MTczMzU5OTA5Ny4xLjEuMTczMzU5OTI2Ni41MC4wLjA.",
        bandInfo: "https://www.meshuggah.net/",
        image: "https://images.squarespace-cdn.com/content/v1/57aa2e239de4bb1a055a98bc/e10af10b-0b7b-4905-b444-c52f26506e8f/Meshuggah-2022.jpg?format=2500w"
    },
    {
        headliner: "Leprous: 10 Years of The Congregation",
        supportActs: ["Wheel"],
        date: new Date("2025/04/15"),
        time: "6:30pm",
        venue: BOULDER_THEATER_VENUE,
        city: BOULDER_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.z2ent.com/events/detail/leprous-2025-bt",
        bandInfo: "https://leprous.net/",
        image: "https://images.discovery-prod.axs.com/2024/10/uploadedimage_6717dd5a055c2.jpg"
    },
    {
        headliner: "The Aristocrats",
        supportActs: [false, "The Duck Tour 2025"],
        date: new Date("2025/05/06"),
        time: "7:00pm",
        venue: FOX_THEATER_VENUE,
        city: FOX_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.z2ent.com/events/detail/aristocrats-2025-fox",
        bandInfo: "https://the-aristocrats-band.com/",
        image: "https://www.z2ent.com/assets/img/Approved-Shot-2-TheAristocrats-2023-bw-PhotoByArthurRosato-955ea8994b.jpg"
    },
    {
        headliner: "The Aristocrats",
        supportActs: [false, "The Duck Tour 2025"],
        date: new Date("2025/05/07"),
        time: "7:00pm",
        venue: AGGIE_THEATER_VENUE,
        city: AGGIE_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.axs.com/events/776144/the-aristocrats-tickets?skin=aggietheatre",
        bandInfo: "https://the-aristocrats-band.com/",
        image: "https://www.z2ent.com/assets/img/The-Aristocrats-eb17355621.jpg"
    },
    {
        headliner: "Devin Townsend",
        supportActs: ["TesseracT"],
        date: new Date("2025/05/21"),
        time: "6:30pm",
        venue: OGDEN_THEATER_VENUE,
        city: OGDEN_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.ogdentheatre.com/events/detail/?event_id=757958",
        bandInfo: "https://hevydevy.com/",
        image: "https://images.discovery-prod.axs.com/2024/11/devin-townsend-tickets_05-21-25_17_673bc2ecd1eed.jpg"
    },
    {
        headliner: "Brit Floyd",
        supportActs: [false],
        date: new Date("2025/06/05"),
        time: "6:30pm",
        venue: RED_ROCKS,
        city: RED_ROCKS_CITY,
        state: "Co",
        ticketURL: "https://www.redrocksonline.com/events/brit-floyd-718652/",
        bandInfo: "https://www.britfloydofficial.com/",
        image: "https://assets.redrocksonline.com/wp-content/uploads/2024/10/14120452/brit-floyd-tickets_06-05-25_86_6706da7badaca.jpg"
    },
    {
        headliner: "Steven Wilson",
        supportActs: [false],
        date: new Date("2025/09/14"),
        time: "7:00pm",
        venue: PARAMOUNT_THEATER_VENUE,
        city: PARAMOUNT_THEATER_CITY,
        state: "Co",
        ticketURL: "https://www.ticketmaster.com/steven-wilson-the-overview-tour-denver-colorado-09-14-2025/event/1E006235E5643492?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
        bandInfo: "https://stevenwilsonhq.com/",
        image: "https://s1.ticketm.net/dam/a/716/30cf2527-54b4-4e0f-9877-492db09c6716_RETINA_PORTRAIT_3_2.jpg"
    },
]

const whereToPlaceEvents = document.getElementById("cards-section");

// Filter out the events that are in the past so we only show events in the future
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0); // Set the time to midnight
// const futureEvents = events.filter(event => event.date >= currentDate);

const futureEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0); // Set the time to midnight
    return eventDate >= currentDate;
  });

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
                                                                day: 'numeric' })}`.replace(',', ''); // Remove the comma after the weekday

    eventItem.querySelector(".event-time").innerText = event.time;
    eventItem.querySelector(".event-venue").innerText = event.venue;
    eventItem.querySelector(".event-location").innerText = `${event.city}, ${event.state}`;
    eventItem.querySelector(".btn-tickets").href = event.ticketURL;
    eventItem.querySelector(".btn-tickets").target = '_blank';
    eventItem.querySelector(".btn-artist-info").href = event.bandInfo;
    eventItem.querySelector(".btn-artist-info").target = '_blank';

    whereToPlaceEvents.append(eventItem);
});