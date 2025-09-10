// import { albumReleases } from "../../data/AlbumReleasesData.js";
export const albumReleases = [
  {
    month: "2025-05-15",
    albums: [
      {
        releaseDate: "2025-05-02",
        artist: "The Flower Kings",
        album: "LOVE",
        bandLink: "https://www.roinestolt.com/",
        bandLinkText: "",
        imageLink: "https://f4.bcbits.com/img/a0959303941_16.jpg",
        imageAltText: "roinestolt.com",
      },
      {
        releaseDate: "2025-05-09",
        artist: "Haken",
        album: "Liveforms: An Evening With Haken",
        bandLink: "https://hakenmusic.com/",
        bandLinkText: "hakenmusic.com",
        imageLink:
          "https://hakenmusic.com/wp-content/uploads/2025/02/Haken_Liveforms_AnEveningWithHaken.jpg",
        imageAltText: "",
      },
      {
        releaseDate: "2025-05-09",
        artist: "Sleep Token",
        album: "Even In Arcadia",
        bandLink: "https://www.sleep-token.com/",
        bandLinkText: "sleep-token.com",
        imageLink:
          "https://images.kerrangcdn.com/images/Sleep-Token-Even-In-Arcadia-album-cover.jpg?auto=compress&fit=max&w=1920",
        imageAltText: "",
      },
    ],
  },
  {
    month: "2025-06-15",
    albums: [
      {
        releaseDate: "2025-06-06",
        artist: "Katatonia",
        album: "Nightmares As Extensions of the Waking State",
        bandLink: "https://www.katatonia.com/",
        bandLinkText: "katatonia.com",
        imageLink:
          "https://katatonia.com/content/themes/NAEOTWS/images/layout/album-cover-1080x1080.jpg",
        imageAltText: "",
      },
      {
        releaseDate: "2025-06-06",
        artist: "Phase Transition",
        album: "In Search of Being",
        bandLink: "https://phasetransitionofficial.com/",
        bandLinkText: "phasetransitionofficial.com",
        imageLink:
          "./images/upcomingReleasesAlbumCovers/phase-transition-album-art.png",
        imageAltText: "",
      },
      {
        releaseDate: "2025-06-13",
        artist: "Altesia",
        album: "The Somnambulist",
        bandLink: "https://altesiamusic.com/",
        bandLinkText: "altesiamusic.com",
        imageLink:
          "https://progreport.com/wp-content/uploads/2025/03/Altesia-The-Somnambulist-front-cover-1000x1000.jpg",
        imageAltText: "",
      },
    ],
  },
  {
    month: "2025-08-15",
    albums: [
      {
        releaseDate: "2025-08-22",
        artist: "Thought Chamber",
        album: "Myst of Lyria",
        bandLink: "https://www.facebook.com/ThoughtChamber/",
        bandLinkText: "ThoughtChamber.com",
        imageLink: "https://www.lionmusic.com/cd/ThoughtC/ArtW.jpg",
        imageAltText: "",
      },
      {
        releaseDate: "2025-08-29",
        artist: "Asymmetric Universe",
        album: "A Memory and What Came After",
        bandLink: "https://www.asymmetricuniverse.com",
        bandLinkText: "asymmetricuniverse.com",
        imageLink:
          "https://www.insideoutshop.de/cdn/shop/files/asymmetricuniverseamemoryandwhatcameafterjpg-98087.jpg?crop=center&height=400&v=1751010703&width=400",
        imageAltText: "",
      },
    ],
  },
  {
    month: "2025-09-15",
    albums: [
      {
        releaseDate: "2025-09-12",
        artist: "Between the Buried and Me",
        album: "The Blue Nowhere",
        bandLink: "https://www.betweentheburiedandme.com",
        bandLinkText: "betweentheburiedandme.com",
        imageLink: "https://f4.bcbits.com/img/a0023762103_16.jpg",
        imageAltText: "",
      },
      {
        releaseDate: "2025-09-19",
        artist: "Big Big Train",
        album: "Are We Nearly There Yet?",
        bandLink: "https://www.bigbigtrain.com/",
        bandLinkText: "bigbigtrain.com",
        imageLink:
          "https://burningshed.com/image/cache/data/Big%20Big%20Train/big-big-train_are-we-nearly-there-yet_2cd-300x300.jpg",
        imageAltText: "",
      },
      {
        releaseDate: "2025-09-26",
        artist: "Beat",
        album: "Live in Los Angeles",
        bandLinkText: "beat-tour.com",
        bandLink: "https://beat-tour.com/",
        imageLink:
          "https://cdn-p.smehost.net/sites/374be6422f2b494ab9128079a4bd7dfd/album-cover/beat-1.jpg",
        imageAltText: "",
      },
    ],
  },
  {
    month: "2025-10-15",
    albums: [
      {
        releaseDate: "2025-10-31",
        artist: "Gazpacho",
        album: "Magic 8-Ball",
        bandLink: "https://gazpachoworld.com/",
        bandLinkText: "gazpachoworld.com/",
        imageLink:
          "https://gazpachoworld.com/store/wp-content/uploads/2025/08/Magic8-BallCover-scaled.jpg",
        imageAltText: "",
      },

    ],
  },
];

//   {
//     releaseDate: "",
//     artist: "",
//     album: "",
//     bandLink: "",
//     bandLinkText: "",
//     imageLink: "",
//     imageAltText: "",
//   },


// get the container it is going to render in
const upcomingReleasesMonthlyContainer = document.getElementById(
  "upcoming-releases-monthly-wrapper"
);

// Get the templates needed
const upcomingReleasesMonthlyContainerTemplate = document.getElementById(
  "template__ur-monthly-wrapper"
);

const upcomingReleasesAlbumContainerTemplate = document.getElementById(
  "template__album_release__individual-album"
);

const getMonth = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "long" });
};

const getFormattedDate = (dateString) => {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

albumReleases.map((month) => {
  const monthlyContainer =
    upcomingReleasesMonthlyContainerTemplate.content.cloneNode(true);

  monthlyContainer.querySelector(".ur-month-text").innerText = getMonth(
    month.month
  );

  const albumsContainer = monthlyContainer.querySelector(
    ".upcoming-releases-monthly-container"
  );

  upcomingReleasesMonthlyContainer.append(monthlyContainer);
  month.albums.map((album) => {

    const albumContainer =
      upcomingReleasesAlbumContainerTemplate.content.cloneNode(true);
    albumContainer.getElementById("ur_album-artist").innerText = album.artist;
    albumContainer.getElementById("ur_album-name").innerText = album.album;
    albumContainer.getElementById("ur_album-release-date").innerText =
      getFormattedDate(album.releaseDate);
    albumContainer.querySelector(".ur-image").src = album.imageLink;
    albumContainer.querySelector(
      ".ur-image"
    ).alt = `${album.album} by ${album.artist} album cover`;

    albumContainer.querySelector(".ur-artist-link").href = album.bandLink;
    albumContainer.querySelector(".ur-artist-link").innerText =
      album.bandLinkText;
    albumsContainer.append(albumContainer);
    if(month.albums.length === 1){
        const div = document.createElement("div");
         albumsContainer.append(div);
    }
  });
});
