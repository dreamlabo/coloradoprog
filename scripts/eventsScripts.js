const AGGIE_THEATER_VENUE = "Aggie Theater";
const AGGIE_THEATER_CITY = "Ft. Collins";
const BALL_ARENA_VENUE = "Ball Arena";
const BALL_ARENA_CITY = "Denver";
const BLACK_SHEEP_VENUE = "Black Sheep";
const BLACK_SHEEP_CITY = "Colorado Springs";
const BOULDER_THEATER_VENUE = "Boulder Theater";
const BOULDER_THEATER_CITY = "Boulder";
const FILLMORE_AUDITORIUM_VENUE = "Fillmore Auditorium";
const FILLMORE_AUDITORIUM_CITY = "Denver";
const FOX_THEATER_VENUE = "Fox Theater";
const FOX_THEATER_CITY = "Boulder";
const GOTHIC_THEATER = "Gothic Theater";
const GOTHIC_THEATER_CITY = "Englewood";
const KING_CENTER_VENUE = "King Center";
const KING_CENTER_CITY = "Denver";
const HQ_VENUE = "HQ";
const HQ_CITY = "Denver";
const MISSION_BALLROOM_VENUE = "Mission Ballroom";
const MISSION_BALLROOM_CITY = "Denver";
const NISSIS_VENUE = "Nissi's";
const NISSIS_CITY = "Lafayette";
const OGDEN_THEATER_VENUE = "Ogden Theatre";
const OGDEN_THEATER_CITY = "Denver";
const ORIENTAL_THEATER = "The Oriental Theater";
const ORIENTAL_THEATER_CITY = "Denver";
const PARAMOUNT_THEATER_VENUE = "Paramount Theatre";
const PARAMOUNT_THEATER_CITY = "Denver";
const PIKES_PEAK_CENTER_VENUE = "Pikes Peak Center";
const PIKES_PEAK_CENTER_CITY = "Colorado Springs";
const STARGAZERS_VENUE = "Stargazers Theater";
const STARGAZERS_CITY = "Colorado Springs";
const SUMMIT_VENUE = "Summit Music Hall";
const SUMMIT_CITY = "Denver";
const RED_ROCKS = "Red Rocks Ampitheater";
const RED_ROCKS_CITY = "Morrison";

const SUPPORT_ACTS_CLASS = ".support-acts";

const events = [
  {
    headliner: "Architects",
    supportActs: ["Erra", "Holy Water"],
    date: new Date("2025/08/08"),
    time: "7:00pm",
    venue: FILLMORE_AUDITORIUM_VENUE,
    city: FILLMORE_AUDITORIUM_CITY,
    state: "Co",
    ticketURL:
      "https://www.fillmoreauditorium.org/events/architects-08-august-2025/",
    bandInfo: "https://www.architectsofficial.com/",
    image:
      "https://external-preview.redd.it/architects-to-headline-summer-north-american-tour-with-erra-v0-8mbBburVVWbaPh_KGOHAoeM3qiS9UGsWA2nouTGS7mM.jpg?width=640&crop=smart&auto=webp&s=a5f29f191d9e8a984013cb3bd0a6d5e05c787843",
  },
  {
    headliner: "10cc",
    supportActs: [false, "The Ultimate Ultimate Greatest Hits Tour"],
    date: new Date("2025/09/02"),
    time: "7:30pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/10cc-the-ultimate-ultimate-greatest-hits-denver-colorado-09-02-2025/event/1E00628BE1704F61",
    bandInfo: "https://www.10cc.world/",
    image:
      "https://lirp.cdn-website.com/91e364a2/dms3rep/multi/opt/10cc+Live+1+-+%283-guitar+frontline%29+Rick-+Graham-+Andy+DSC02075-1920w.jpg",
  },
  {
    headliner: "Steven Wilson",
    supportActs: [false, "The Overview Tour"],
    date: new Date("2025/09/14"),
    time: "7:00pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/steven-wilson-the-overview-tour-denver-colorado-09-14-2025/event/1E006235E5643492?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
    bandInfo: "https://stevenwilsonhq.com/",
    image:
      "https://s1.ticketm.net/dam/a/716/30cf2527-54b4-4e0f-9877-492db09c6716_RETINA_PORTRAIT_3_2.jpg",
  },
    {
    headliner: "Crazy Diamonds",
    supportActs: ["Stuck in Traffic"],
    date: new Date("2025/09/26"),
    time: "7:30pm",
    venue: NISSIS_VENUE,
    city: NISSIS_CITY,
    state: "Co",
    ticketURL: "https://nissis.com/events/crazydiamonds/",
    bandInfo: "https://www.facebook.com/profile.php?id=61576798750471",
    image:
      "https://nissis.com/wp-content/uploads/2025/06/Crazy-Diamonds-Sept-2025-3-1536x864.png",
  },
  {
    headliner: "Dream Theater",
    supportActs: [false, "Parasomnia Tour 2025"],
    date: new Date("2025/09/29"),
    time: "7:00pm",
    venue: PIKES_PEAK_CENTER_VENUE,
    city: PIKES_PEAK_CENTER_CITY,
    state: "Co",
    ticketURL: "https://www.pikespeakcenter.com/events/detail/dreamtheater",
    bandInfo: "https://dreamtheater.net/",
    image:
      "https://images.discovery-prod.axs.com/2025/05/dream-theater-tickets_09-29-25_17_682bb8bc0bfcc.jpg",
  },
  {
    headliner: "Bruce Dickinson",
    supportActs: [false],
    date: new Date("2025/09/30"),
    time: "7:00pm",
    venue: SUMMIT_VENUE,
    city: SUMMIT_CITY,
    state: "Co",
    ticketURL:
      "https://concerts.livenation.com/bruce-dickinson-denver-colorado-09-30-2025/event/1E006263A6DD1DEE?_gl=1*1pnroln*_ga*MTg3NzkzNjk0Mi4xNzQ2NDE3ODg4*_ga_BKTTLZFK7N*czE3NDY0MTc4ODckbzEkZzEkdDE3NDY0MTc5MjAkajAkbDAkaDA.*_gcl_au*NDcwNzA0NzM4LjE3NDY0MTc4ODg.*_ga_C1T806G4DF*MTc0NjQxNzg4OC4xLjEuMTc0NjQxNzg5MC41OC4wLjA.*_ga_H1KKSGW33X*MTc0NjQxNzg4OC4xLjEuMTc0NjQxNzg5MC41OC4wLjA.",
    bandInfo: "https://www.themandrakeproject.com/",
    image:
      "https://s1.ticketm.net/dam/a/1a2/5674cc33-6181-4c84-8949-f349a43331a2_RETINA_PORTRAIT_3_2.jpg",
  },
  {
    headliner: "Between the Buried and Me",
    supportActs: ["Hail the Sun", "Delta Sleep"],
    date: new Date("2025/10/24"),
    time: "7:00pm",
    venue: SUMMIT_VENUE,
    city: SUMMIT_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/between-the-buried-and-me-hail-denver-colorado-10-24-2025/event/1E0062D4EA025E3E?_gl=1*1eiqz79*_gcl_au*NDcwNzA0NzM4LjE3NDY0MTc4ODg.*_ga*MTg3NzkzNjk0Mi4xNzQ2NDE3ODg4*_ga_C1T806G4DF*czE3NTI4ODM0MzYkbzMkZzEkdDE3NTI4ODM0MzckajU5JGwwJGgw*_ga_H1KKSGW33X*czE3NTI4ODM0MzYkbzMkZzEkdDE3NTI4ODM0MzckajU5JGwwJGgw",
    bandInfo: "https://www.betweentheburiedandme.com/",
    image:
      "https://www.summitdenver.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F7dc%2F014860f4-da0d-4e5b-bc86-2a2cde0f57dc_RETINA_PORTRAIT_16_9.jpg&w=768&q=70",
  },
    {
    headliner: "Ne Obliviscaris",
    supportActs: ["Rivers of Nihil", "Psycroptic"],
    date: new Date("2025/11/05"),
    time: "7:00pm",
    venue: GOTHIC_THEATER,
    city: GOTHIC_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.gothictheatre.com/events/detail/?event_id=1110853",
    bandInfo: "https://neobliviscaris.com.au/",
    image:
      "https://images.discovery-prod.axs.com/2025/08/ne-obliviscaris-tickets_11-05-25_17_68ac8ce3f34d2.jpg",
  },
  {
    headliner: "Queensryche",
    supportActs: ["Accept"],
    date: new Date("2025/11/07"),
    time: "6:00pm",
    venue: SUMMIT_VENUE,
    city: SUMMIT_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/queensryche-volume-and-vengance-tour-denver-colorado-11-07-2025/event/1E0062D43E846F80?_gl=1*id5qsg*_gcl_au*NDcwNzA0NzM4LjE3NDY0MTc4ODg.*_ga*MTg3NzkzNjk0Mi4xNzQ2NDE3ODg4*_ga_C1T806G4DF*czE3NTI4ODM0MzYkbzMkZzEkdDE3NTI4ODQyNzkkajQ3JGwwJGgw*_ga_H1KKSGW33X*czE3NTI4ODM0MzYkbzMkZzEkdDE3NTI4ODQyNzkkajQ3JGwwJGgw",
    bandInfo: "http://www.queensrycheofficial.com/",
    image:
      "https://themusicuniverse.com/wp-content/uploads/2025/07/queensryche.jpg",
  },
  {
    headliner: "Steve Hackett",
    supportActs: [
      false,
      "Genesis Greats, Lamb Highlights & Solo North America Tour 2025",
    ],
    date: new Date("2025/11/08"),
    time: "7:00pm",
    venue: BOULDER_THEATER_VENUE,
    city: BOULDER_THEATER_CITY,
    state: "Co",
    ticketURL: "https://www.z2ent.com/events/detail/steve-hackett-2025-bt",
    bandInfo: "https://www.hackettsongs.com/",
    image:
      "https://images.discovery-prod.axs.com/2025/03/uploadedimage_67cee97c516a6.jpg",
  },
  {
    headliner: "Yes",
    supportActs: [false, "The Fragile 2025 Tour"],
    date: new Date("2025/11/09"),
    time: "7:00pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/yes-the-fragile-2025-tour-denver-colorado-11-09-2025/event/1E0062C5F5B85458?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
    bandInfo: "https://www.yesworld.com/",
    image: "https://appellcenter.org/wp-content/uploads/YESPREVIEW2.jpg",
  },
    {
    headliner: "The Mars Volta",
    supportActs: [],
    date: new Date("2025/11/18"),
    time: "7:00pm",
    venue: MISSION_BALLROOM_VENUE,
    city: MISSION_BALLROOM_CITY,
    state: "Co",
    ticketURL:
      "https://www.axs.com/events/922226/the-mars-volta-tickets",
    bandInfo: "https://www.themarsvoltaofficial.com/",
    image: "https://images.discovery-prod.axs.com/2025/04/the-mars-volta-tickets_11-18-25_17_67f84a0f7a0a9.jpg",
  },
  {
    headliner: "Geoff Tate",
    supportActs: [false, "Operation: Mindcrime - The Final Chapter"],
    date: new Date("2026/02/21"),
    time: "7:00pm",
    venue: OGDEN_THEATER_VENUE,
    city: OGDEN_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.axs.com/events/1022163/geoff-tate-s-operation-mindcrime-the-final-chapter-tickets",
    bandInfo: "https://www.geofftate.com/",
    image: "https://images.discovery-prod.axs.com/2025/06/geoff-tate-s-operation-mindcrime-the-final-chapter-tickets_02-21-26_17_6851965bf18f6.jpg",
  },
];

const whereToPlaceEvents = document.getElementById("cards-section");

// Filter out the events that are in the past so we only show events in the future
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0); // Set the time to midnight
// const futureEvents = events.filter(event => event.date >= currentDate);

const futureEvents = events.filter((event) => {
  const eventDate = new Date(event.date);
  eventDate.setHours(0, 0, 0, 0); // Set the time to midnight
  return eventDate >= currentDate;
});

futureEvents.forEach((event) => {
  const eventTemplate = document.getElementById("event-item-template");
  const eventItem = eventTemplate.content.cloneNode(true);

  eventItem.querySelector(".band-photo").src = event.image;
  eventItem.querySelector(".band-photo").alt = `image of ${event.headliner}`;
  eventItem.querySelector(".headliner-act").innerText = event.headliner;

  if (event.supportActs.length > 0) {
    if (event.supportActs.includes("An Evening With...")) {
      eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText =
        event.supportActs[0];
    } else if (
      event.supportActs[0] === false &&
      event.supportActs.length === 1
    ) {
      eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = `\u00A0`;
    } else if (
      event.supportActs[0] === false &&
      event.supportActs.length === 2
    ) {
      eventItem.querySelector(
        SUPPORT_ACTS_CLASS
      ).innerText = `${event.supportActs[1]}`;
    } else {
      const supportActsString = event.supportActs.join(", ");
      eventItem.querySelector(
        SUPPORT_ACTS_CLASS
      ).innerText = `with ${supportActsString}`;
    }
  } else {
    eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText = `\u00A0`;
  }

  eventItem.querySelector(".event-date").innerText =
    `${event.date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`.replace(",", ""); // Remove the comma after the weekday

  eventItem.querySelector(".event-time").innerText = event.time;
  eventItem.querySelector(".event-venue").innerText = event.venue;
  eventItem.querySelector(
    ".event-location"
  ).innerText = `${event.city}, ${event.state}`;
  eventItem.querySelector(".btn-tickets").href = event.ticketURL;
  eventItem.querySelector(".btn-tickets").target = "_blank";
  eventItem.querySelector(".btn-artist-info").href = event.bandInfo;
  eventItem.querySelector(".btn-artist-info").target = "_blank";

  whereToPlaceEvents.append(eventItem);
});
