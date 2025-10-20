const featuredPlaylistContainer = document.getElementById(
  "playlist-featured-artists-container"
);

if (featuredPlaylistContainer) {
  playlistPageData[0].songs.forEach((article) => {
    const songArticleTemplate = document.getElementById(
      "song-article-template"
    );
    const songArticle = songArticleTemplate.content.cloneNode(true);
    songArticle.querySelector(".song-name").innerText = article.song;
    songArticle.querySelector(".artist-name").innerText = article.artist;
    songArticle.querySelector(".artist-name").href = article.artistSite;
    songArticle.querySelector(".video-link").src = article.youtube;

    const aboutContent = songArticle.querySelector(
      ".song-article__description__container"
    );

    if (aboutContent) {
      article.about.forEach((aboutText) => {
        const paragraphText = document.createElement("p");
        paragraphText.classList.add("song-article__description");
        paragraphText.innerHTML = aboutText;
        aboutContent.append(paragraphText);
      });
    }
    featuredPlaylistContainer.append(songArticle);
  });
}

// For the  data structure
// Array of playlist objects

// Object:
// month: string,
// Description: Array[strings] (could have many paragraphs),
// spotifyPlaylist:
// spotifyPlaylistHeight: Number,
// songs [
//     song: string,
//     artist: string,
//     aboutTheSong: []
//     youtubeEmbedLink: string,
//     artistSiteURL: string,
// ]

// Need to alternate the spotify playlist on large screens left and right, always on bottom on small screens
// Need to alternate the background image

{/* <div class="main-page-wrapper bg-clr-dark">
  <div class="listening-overlay"></div>
  <img
    class="background-image-one"
    src="./images/pages/playlists/record-background.jpg"
    alt=""
  />
  <section class="section-wrapper-two">
    <div class="section-container">
      <h3 class="section-title">April 2025</h3>
      <p class="main-holiday-sub-text">
        This Women's History Month, join us as we spotlight the innovators whose
        unique voices and bold creativity continue to shape the genre.
      </p>
      <div class="listening-container--reverse">
        // If reverse
        <div class="listening-container__Right reorder-listening-container">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/0obCUHiVzSDUvlruSuNESU?utm_source=generator&theme=0"
            variable
            width="100%"
            height="850"
            Variable
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div id="" class="listening-container__left">
          <article class="song-article">
            <div>
              <h4 class="song-article__heading">
                <span class="song-name">Puzzle Box</span>
                <a
                  class="artist-name"
                  href="https://hakenmusic.com/"
                  target="_blank"
                >
                  Haken
                </a>
              </h4>
              <div class="song-article__description__container">
                // loop over this for the about song paragraphs
                <p class="song-article__description">
                  // The spans all come in from the innerhtml
                  <span class="italic">Puzzle Box</span>, originally released on{" "}
                  <span class="italic">Haken's</span> 2018 album{" "}
                  <span class="italic">Vector</span>, appears here as part of
                  their latest live release,{" "}
                  <span class="italic">Liveforms: An Evening with Haken.</span>
                </p>
              </div>
            </div>
            <div class="article-video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pCznO-Venyo?si=AoTLKX3nZVDA_ZVx"
                variable
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</div>; */}
