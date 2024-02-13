const latestNewsContainer = document.getElementById("latest-news-container")

const latestNewsInformation = [
    {
        pubDate: "FEBRUARY 7th 2024",
        title: "Nick Beggs to Fill In for Marillion's Pete Trewavas on Cruise to the Edge",
        image: "./images/latestNews/Pete-Trewavas.jpg",
        imageCredit: "René Obdeijn",
        text: [
            "Marillion have announced that due to an upcoming surgery, bassist Nick Beggs will fill in for Pete Trewavas during the bands performance on 'Cruise to the Edge' starting  March 8, 2024.",
            "According to Marillion's website, 'As we approach rehearsals for Cruise To The Edge we regret to announce that Pete Trewavas must undergo a routine surgical procedure which will leave him unable to fly to the US for some weeks. We therefore have no option but to perform on CTTE without him'",
           
        ],
        readMoreLink: "https://www.marillion.com/news/newsitem.htm?id=531"
    },
    {
        pubDate: "FEBRUARY 2nd 2024",
        title: "North Sea Echoes, Featuring Jim Matheos & Ray Alder, Release New Single",
        image: "./images/latestNews/north-sea-echoes.jpg",
        imageCredit: "Jeremy Saffer",
        text: [
            "North Sea Echos, featuring the collaboration of Jim Matheos and Ray Alder from Fates Warning, have released  a new single from their forthcoming album.",
            "'Really Good Terrible Things' is scheduled for release on February 23rd, 2024, via Metal Blade Records.",
            "According to Ray, the newest single, entitled 'Unmoved', is about how 'some people dealing with depression often exhibit a remarkable ability to conceal their inner struggles by presenting a façade of happiness to the world.'",
           
        ],
        readMoreLink: "https://northseaechoes.com/2024/02/02/unmoved-official-video-released/"
    },
    {
        pubDate: "DECEMBER 14th 2023",
        title: "Steven Wilson Releases Song 'December Skies' Co-Written by AI",
        image: "./images/latestNews/steven-wilson-xmas.jpg",
        imageCredit: "",
        text: [
            "Steven Wilson has a released a new Christmas song written with the help of artificial intelligence.",
            "According to Wilson's website, 'December Skies is the result, swiftly recorded last weekend and written in collaboration with an Artificial Intelligence version of myself. I wonder what people will make of it. I wonder what I make of it.'",
            "The visualizer for December Skies was generated using a purpose built AI system created by Miles Skarin/Crystal Spotlight."
        ],
        readMoreLink: "https://stevenwilsonhq.com/december-skies/"
    },
    {
        pubDate: "NOVEMBER 16th 2023",
        title: "Steve Hackett To Release New Album 'The Circus and the Nightwhale'",
        image: "./images/latestNews/Steve-Hacket-Album.jpg",
        imageCredit: "",
        text: [
            "The legendary guitarist will release his latest studio album, 'The Circus and the Nightwhale' on February 16th, 2024 via InsideOut Music.",
            "Recorded at the prestigious Siren Studio in the UK, this captivating 'rite of passage' concept album weaves the narrative of a young protagonist named Travla.",
            "Joining Hackett on the album are the familiar faces of Roger King,  Rob Townsend, Jonas Reingold, Nad Sylvan, Craig Blundell, and Amanda Lehmann, with guest appearances by Nick D'Virgilio and Hugo Degenhardt."
        ],
        readMoreLink: "http://www.hackettsongs.com/news/album-steve-hackett-the-circus-and-the-nightwhale.html"
    },
    {
        pubDate: "NOVEMBER 8th 2023",
        title: "Steven Wilson Releases Video for the Song Beautiful Scarecrow",
        image: "./images/latestNews/SW-Scarecrow.png",
        imageCredit: "",
        text: [
            "Steven Wilson, in collaboration with Jess Cope, have released a video for Beautiful Scarecrow. The song is taken form Wilson's latest album 'The Harmony Codex' which was released in September.",
            "According to Wilson's website, the song is 'A Gothic horror story set in a post-apocalyptic world where a deadly pandemic has led to the human race being divided, with the infected rounded up and forced to live in underground quarantine.'",
        ],
        readMoreLink: "https://stevenwilsonhq.com/beautiful-scarecrow-video-out-now/"
    },
    {
        pubDate: "NOVEMBER 5th 2023",
        title: "Porcupine Tree to Release Concert Film of the Closure/Continuation Tour",
        image: "./images/latestNews/porcupineTree-newDVD.png",
        imageCredit: "",
        text: [
            "Porcupine Tree have announced the release of Closure/Continuation.Live. A concert film and live album that documents their November 7th, 2022 performance at Amsterdam's 17,000 capacity Ziggo Dome.",
            "Releasing on December 8th, it features every song from their 11th studio album 'Closure/Continuation' along with favorites including Trains, Blackest Eyes, Fear of a Blank Planet and Anesthetize.",
        ],
        readMoreLink: "https://porcupinetree.com/closure-continuation-live-out-8th-december-2023-now-available-to-pre-order/"
    },
    {
        pubDate: "OCTOBER 27th 2023",
        title: "Neal Morse Announces New Album 'The Restoration - Joseph: Part Two'",
        image: "./images/latestNews/Neal_Morse-newAlbum.png",
        imageCredit: "",
        text: [
            "Neal Morse has announced the follow up to his album 'The Dreamer - Joseph: Part One.' Titled 'The Restoration - Joseph: Part Two,' it will be released January 12, 2024 on Frontier Music.",
            "Joining Neal is an impressive cast of guest artists, including Bill Hubauer and Eric Gillette (both of The Neal Morse Band), Ted Leonard (Spock's Beard, Pattern Seeking Animals), Matt Smith (Theocracy), Ross Jennings (Haken), and Jake Livgren (Proto-Kaw, Kansas).",
        ],
        readMoreLink: "https://nealmorse.com/product/neal-morse-the-restoration-joseph-part-two/"
    },
    {
        pubDate: "OCTOBER 25th 2023",
        title: "Dream Theater Announce the Return of Founding Member Mike Portnoy",
        image: "./images/latestNews/DreamTheater-portnoy.png",
        imageCredit: "",
        text: [
            "After thirteen years apart, the progressive metal titans, Dream Theater, have announced the return of their original drummer, Mike Portnoy, to the band.",
            "Guitarist John Petrucci states, 'As an original founding member, longtime friend and incredibly talented and creative drummer, I know that his return will bring a renewed spirit, passion and energy into DT that all of us, including our fans, will joyfully welcome.'",
        ],
        readMoreLink: "https://dreamtheater.net/dream-theater-announce-the-return-of-drummer-mike-portnoy/"
    },
]

latestNewsInformation.forEach(newsItem => {
    const latestNewsTemplate = document.getElementById("latest-news-template")
    const article = latestNewsTemplate.content.cloneNode(true);

    article.querySelector(".card__latest-news--date").innerText = newsItem.pubDate;
    article.querySelector(".card__latest-news--title").innerText = newsItem.title;
    article.querySelector(".card__latest-news--image").src = newsItem.image;
    if(newsItem.imageCredit !== "") {
        article.querySelector(".latest-news-image-credit").innerText = `image ${newsItem.imageCredit}`
    }
    
    const textContent = article.querySelector(".card__latest-news--text")
    
    newsItem.text.forEach(itemText => {
        const paragraphText = document.createElement('p');
        paragraphText.innerText = itemText;
        textContent.append(paragraphText);
    })

    article.querySelector(".btn__read-more").href = newsItem.readMoreLink;
    latestNewsContainer.append(article)
})

