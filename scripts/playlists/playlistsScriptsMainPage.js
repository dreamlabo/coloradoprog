const featuredPlaylistContainer = document.getElementById("playlist-featured-artists-container");

if(featuredPlaylistContainer) {
    currentPlaylistData.forEach(article => {
        const songArticleTemplate = document.getElementById("song-article-template")
        const songArticle = songArticleTemplate.content.cloneNode(true);
        songArticle.querySelector(".song-name").innerText = article.song;
        songArticle.querySelector(".artist-name").innerText = article.artist;
        songArticle.querySelector(".artist-name").href = article.artistSite;
        songArticle.querySelector(".video-link").src = article.youtube;

        const aboutContent = songArticle.querySelector(".song-article__description__container")

        if(aboutContent) {
            article.about.forEach(aboutText => {
                const paragraphText = document.createElement('p');
                paragraphText.classList.add("song-article__description")
                paragraphText.innerHTML = aboutText;
                aboutContent.append(paragraphText);
            })
        }
        featuredPlaylistContainer.append(songArticle)
    })
}
