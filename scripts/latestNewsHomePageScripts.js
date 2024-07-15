const latestNewsContainer = document.getElementById("latest-news-container");
const NUMBER_OF_STORIES_TO_SHOW = 4;

if(latestNewsContainer) {
    for(let i = 0; i < NUMBER_OF_STORIES_TO_SHOW; i++ ) {    const latestNewsTemplate = document.getElementById("latest-news-template")
        const article = latestNewsTemplate.content.cloneNode(true);
    
        article.querySelector(".card__latest-news--date").innerText = latestNewsData[i].pubDate;
        article.querySelector(".card__latest-news--title").innerText = latestNewsData[i].title;
        article.querySelector(".card__latest-news--image").src = latestNewsData[i].image;
        if(latestNewsData[i].imageCredit !== "") {
            article.querySelector(".latest-news-image-credit").innerText = `image ${latestNewsData[i].imageCredit}`
        }
        
        const textContent = article.querySelector(".card__latest-news--text")
        
        latestNewsData[i].text.forEach(itemText => {
            const paragraphText = document.createElement('p');
            paragraphText.innerText = itemText;
            textContent.append(paragraphText);
        })
    
        article.querySelector(".btn__read-more").href = latestNewsData[i].readMoreLink;
        latestNewsContainer.append(article)
    } 
}




