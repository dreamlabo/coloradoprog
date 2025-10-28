const playlistContainer = document.getElementById("playlist-container");

const playlistFormattedDate = (date) => {
  return new Date(date).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
};

let placeSpotifyListOnLeft = false;
if (playlistContainer) {
  playlistPageData.forEach((playlist) => {
    let monthlyPlaylistTemplate;
    if (placeSpotifyListOnLeft) {
      monthlyPlaylistTemplate = document.getElementById(
        "playlist-monthly-container__playlist-left"
      );
    } else {
      monthlyPlaylistTemplate = document.getElementById(
        "playlist-monthly-container"
      );
    }

    const monthlyContainer = monthlyPlaylistTemplate.content.cloneNode(true);

    const imageOverlay = monthlyContainer.querySelector(
      ".background-image-one"
    );

    const iframe = monthlyContainer.querySelector(".spotify-iframe");
    if (iframe) {
      iframe.style.height = playlist.spotifyHeight;
    }

    monthlyContainer.querySelector(".section-title").innerText =
      playlistFormattedDate(playlist.date);
    if (playlist.description.length > 0) {
      monthlyContainer.querySelector(".main-holiday-sub-text").innerHTML =
        playlist.description;
    }

    monthlyContainer.querySelector("iframe").src = playlist.spotifyPlaylist;

    playlist.songs.forEach((song) => {
      const songsContainer = monthlyContainer.getElementById("videos-go-here");
      const songTemplate = document.getElementById("song-article-template");
      const songContainer = songTemplate.content.cloneNode(true);
      songContainer.querySelector(".song-name").innerText = song.song;
      songContainer.querySelector(".artist-name").innerText = song.artist;
      songContainer.querySelector(".artist-name").href = song.artistSite;
      songContainer.querySelector(".video-link").src = song.youtube;

      const aboutContainer = songContainer.querySelector(
        ".song-article__description__container"
      );

      song.about.map((textLine) => {
        const textTemplate = document.getElementById("song-description-text");
        const descriptionText = textTemplate.content.cloneNode(true);
        descriptionText.querySelector("p").innerHTML = textLine;
        aboutContainer.append(descriptionText);
      });

      songsContainer.append(songContainer);
    });

    playlistContainer.append(monthlyContainer);
    placeSpotifyListOnLeft = !placeSpotifyListOnLeft;
  });
}
