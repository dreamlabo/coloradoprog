import { albumReleases } from "../../data/AlbumReleasesData.js";

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
