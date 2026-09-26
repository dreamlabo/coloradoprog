const AGGIE_THEATER_VENUE = "Aggie Theater";
const AGGIE_THEATER_CITY = "Ft. Collins";
const BALL_ARENA_VENUE = "Ball Arena";
const BALL_ARENA_CITY = "Denver";
const BELLCO_THEATER_VENUE = "Bellco Theatre";
const BELLCO_THEATER_CITY = "Denver";
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
    headliner: "Rush",
    supportActs: [false, "Fifty Something Tour"],
    date: new Date("2026/10/05"),
    time: "8:00pm",
    venue: BALL_ARENA_VENUE,
    city: BALL_ARENA_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/rush-fifty-something-denver-colorado-10-05-2026/event/1E006350ABE16A13",
    bandInfo: "https://www.rush.com/",
    image:
      "https://www.ballarena.com/media/flcgkjsh/static_outdoor-concertvision_1920x1080_rush_2026_regional_ballarena_1005-07.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=134056008326270000",
  },
  {
    headliner: "Rush",
    supportActs: [false, "Fifty Something Tour"],
    date: new Date("2026/10/07"),
    time: "8:00pm",
    venue: BALL_ARENA_VENUE,
    city: BALL_ARENA_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/rush-fifty-something-denver-colorado-10-07-2026/event/1E006350ABE76A15",
    bandInfo: "https://www.rush.com/",
    image:
      "https://www.ballarena.com/media/flcgkjsh/static_outdoor-concertvision_1920x1080_rush_2026_regional_ballarena_1005-07.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=134056008326270000",
  },
  {
    headliner: "Mastodon",
    supportActs: ["Deafheaven", "Alcest"],
    date: new Date("2026/10/14"),
    time: "8:00pm",
    venue: FILLMORE_AUDITORIUM_VENUE,
    city: FILLMORE_AUDITORIUM_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/mastodon-denver-colorado-10-14-2026/event/1E0064BCA83EBE0C?_gl=1*11h4h6w*_ga*MTgyMTU5NzI5LjE3OTAzNzgxNDU.*_ga_C1T806G4DF*czE3OTAzNzgxNDYkbzEkZzEkdDE3OTAzNzgyOTYkajQwJGwwJGgw",
    bandInfo: "https://www.mastodonrocks.com/",
    image:
      "https://s1.ticketm.net/dam/a/e95/539dec42-6e24-4d0d-bf3a-b84f6e381e95_RETINA_PORTRAIT_3_2.jpg",
  },
  {
    headliner: "Beat",
    supportActs: [false, "Belew/Vai/Levin/Bozzio Performing the Music of KING CRIMSON"],
    date: new Date("2026/10/16"),
    time: "8:00pm",
    venue: BELLCO_THEATER_VENUE,
    city: BELLCO_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.axs.com/events/1542338/beat-belewvailevinbozzio-performing-the-music-of-king-crimson-tickets",
    bandInfo: "https://beat-official.com/",
    image:
      "https://images.discovery-prod.axs.com/2026/08/uploadedimage_6a737c653d382.jpg",
  },
  {
    headliner: "Dweezil Zappa ",
    supportActs: [false, "DZ20: Like Father, Like Son"],
    date: new Date("2026/10/26"),
    time: "7:30pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/dweezil-zappa-dz20-like-father-like-denver-colorado-10-26-2026/event/1E0064BBF0A6784F?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
    bandInfo: "https://www.dweezilzappa.com/",
    image:
      "https://s1.ticketm.net/dam/a/1f7/518f1877-3460-4738-a3b0-f5a6a1ff91f7_CUSTOM.jpg",
  },
  {
    headliner: "Periphery",
    supportActs: ["Ne Obliviscaris", "Greyhaven"],
    date: new Date("2026/11/02"),
    time: "5:00pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/periphery-a-pale-white-dot-us-denver-colorado-11-02-2026/event/1E0064B3CCC1D95A?_gl=1*g1tjkl*_ga*MTgyMTU5NzI5LjE3OTAzNzgxNDU.*_ga_C1T806G4DF*czE3OTAzNzgxNDYkbzEkZzEkdDE3OTAzNzg2OTkkajYkbDAkaDA.",
    bandInfo: "https://periphery.net/",
    image:
      "https://media.ticketmaster.com/en-us/dam/a/d9b/330d6d55-fc37-46ac-b875-0e17346f4d9b_CUSTOM.jpg",
  },
  {
    headliner: "Stewart Copeland",
    supportActs: [false, "Have I Said Too Much"],
    date: new Date("2026/11/03"),
    time: "7:00pm",
    venue: BOULDER_THEATER_VENUE,
    city: BOULDER_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.z2ent.com/events/detail/stewart-copeland-2026-bt",
    bandInfo: "https://www.stewartcopeland.net/",
    image:
      "https://cdn.prod.website-files.com/69ecfe0ac661b6c09b6a7de5/69f0eb468c7481923b174075_de365965-7625-4bb9-b927-56688f55763d.webp",
  },
  {
    headliner: "Todd Rundgren",
    supportActs: [],
    date: new Date("2026/11/10"),
    time: "7:30pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/todd-rundgren-denver-colorado-11-10-2026/event/1E0064E290CA77B5?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
    bandInfo: "http://www.todd-rundgren.com/",
    image:
      "https://s1.ticketm.net/dam/a/10c/d7303d2f-b6e8-4f0d-a456-902c4abfa10c_1251021_CUSTOM.jpg",
  },
  {
    headliner: "The Musical Box",
    supportActs: [false, "...and then there was PHIL..."],
    date: new Date("2026/11/12"),
    time: "7:30pm",
    venue: PARAMOUNT_THEATER_VENUE,
    city: PARAMOUNT_THEATER_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/the-musical-box-denver-colorado-11-12-2026/event/1E0064BCA82BBDEB?camefrom=CFC_KSE_wZMc5Iv2w0ud2gDh5lfwTA&utm_source=wZMc5Iv2w0ud2gDh5lfwTA&utm_medium=wZMc5Iv2w0ud2gDh5lfwTA&utm_campaign=wZMc5Iv2w0ud2gDh5lfwTA",
    bandInfo: "https://www.themusicalbox.net/",
    image:
      "https://s1.ticketm.net/dam/e/85b/5f7aced1-17b5-4328-a7c6-1782508f485b_CUSTOM.jpg",
  },
  {
    headliner: "The Pineapple Thief",
    supportActs: [],
    date: new Date("2026/12/03"),
    time: "7:00pm",
    venue: SUMMIT_VENUE,
    city: SUMMIT_CITY,
    state: "Co",
    ticketURL:
      "https://www.ticketmaster.com/the-pineapple-thief-denver-colorado-12-03-2026/event/1E00648ADFE5F818?_gl=1*81q9k9*_ga*MTkyODA2MjUzMS4xNzkwMzc5Mzcz*_ga_C1T806G4DF*czE3OTAzNzkzNzQkbzEkZzAkdDE3OTAzNzk1MTQkajE4JGwwJGgw",
    bandInfo: "https://www.pineapplethief.com/",
    image:
      "https://media.ticketmaster.com/en-us/dam/a/ba4/6ab45818-4738-4ee0-9eb5-0bafbb966ba4_CUSTOM.jpg",
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
      eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText =
        `${event.supportActs[1]}`;
    } else {
      const supportActsString = event.supportActs.join(", ");
      eventItem.querySelector(SUPPORT_ACTS_CLASS).innerText =
        `with ${supportActsString}`;
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
  eventItem.querySelector(".event-location").innerText =
    `${event.city}, ${event.state}`;
  eventItem.querySelector(".btn-tickets").href = event.ticketURL;
  eventItem.querySelector(".btn-tickets").target = "_blank";
  eventItem.querySelector(".btn-artist-info").href = event.bandInfo;
  eventItem.querySelector(".btn-artist-info").target = "_blank";

  whereToPlaceEvents.append(eventItem);
});
