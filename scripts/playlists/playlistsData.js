const currentPlaylistData = [
    {
        song: "A Natural Disaster",
        artist: "Anathema",
        about: [
            "Lee Douglas's vocal on <span class='italic'>A Natural Disaster</span> marked a turning point for <span class='italic'>Anathema</span>, introducing a new emotional depth to the band's evolving sound. Originally rooted in doom metal <span class='italic'>Anathema</span> shifted towards progressive rock in the 2000s, and Lee's voice became a vital part of that transformation.",
            "Her performance on this track is both fragile and powerful, and captures the song's sense of longing and introspection."
        ],
        youtube: "https://www.youtube.com/embed/JB1djmYr0aA?si=aEN68XO5WVKhxRFK",
        artistSite: "https://www.anathemamusic.com/"
    },
    {
        song: "No Longer We Lie",
        artist: "Exploring Birdsong",
        about: [
            "Liverpool-based trio <span class='italic'>Exploring Birdsong</span> captivates listeners by seamlessly merging progressive rock, pop, and classical influences and vocalist/keyboardist Lynsey Ward is central to the band's distinctive style.",
            "<span class='italic'>No Longer We Lie,</span> the closing track from their 2023 EP <span class='italic'>Dancing in the Face of Danger</span> showcases the band's innovative approach to progressive music."
        ],
        youtube: "https://www.youtube.com/embed/UgsxdCzJCe8?si=Iu7_GtPJdzkiAH8-",
        artistSite: "https://www.facebook.com/ExploringBirdsong/"
    },
    {
        song: "Becoming, (R)evolution",
        artist: "Phase Transition",
        about: [
            "Hailing from Porto, Portugal, <span class='italic'>Phase Transition</span>, blends classical and technical progressive metal. At the center is Sofia Beco, whose violin and vocals shape the band's distinct sound.",
            "According to Sofia, <span class='italic'>Becoming, (R)evolution</span>, from their upcoming album <span class='italic'>In Search of Being</span>, is about 'youth, growing up — that time of your life when you learn you have a voice.'"
        ],
        youtube: "https://www.youtube.com/embed/hsSkp_9lhjc?si=HHHg4xBmf2M5mmL3",
        artistSite: "https://phasetransitionofficial.com/home"
    },
    {
        song: "Holy Ghost",
        artist: "Bent Knee",
        about: [
            "Known for blending pop, industrial rock, progressive rock, and avant-garde influences, <span class='italic'>Bent Knee</span> is an American art rock band formed at the Berklee College of Music in 2009.",
            "At the forefront is vocalist Courtney Swain, whose powerful performance on <span class='italic'>Holy Ghost</span> from their album <span class='italic'>Land Animal</span> captures the band's experimental spirit."
        ],
        youtube: "https://www.youtube.com/embed/e9QAlYV6qsY?si=06UviD3fc5f0lb5g",
        artistSite: "https://www.bentkneemusic.com/" 
      },
      {
        song: "Stay for the Ending",
        artist: "District 97",
        about: [
            "Formed in 2006 in Chicago, Illinois and featuring 2007 American Idol Top 10 finalist Leslie Hunt, <span class='italic'>District 97</span> fuses influences ranging from heavy metal to avant-garde jazz.",
            "Their song <span class='italic'>Stay for the Ending</span>, from their 2023 album of the same name, encapsulates their blending of styles."
        ],
        youtube: "https://www.youtube.com/embed/AHOMo2ayc9k?si=3Wgm27yV8ip3S5y0",
        artistSite: "https://district97.net/" 
      },
      {
        song: "Cause We've Ended As Lovers",
        artist: "Jeff Beck",
        about: [
            "While our list is heavily focused on female vocalists, we must acknowledge the extraordinary contribution of bassist <span class='italic'>Tal Wilkenfeld</span> on <span class='italic'>Jeff Beck's Cause We Ended as Lovers</span>, recorded at Ronnie Scott's in London in 2007 when she was just 20 years old.",
            "Tal has performed with Chick Corea, Herbie Hancock, and Wayne Shorter, and appears on Prince's 2021 album <span class='italic'>Welcome 2 America</span>, the first posthumous release featuring previously unreleased music recorded in 2010."
        ], 
        youtube: "https://www.youtube.com/embed/f6n_EJ5ynQo?si=p4H--cQjijE04-GJ",
        artistSite: "https://en.wikipedia.org/wiki/Jeff_Beck/" 
      },
]


// const currentPlaylistData = [
//     {
//         song: "Firefly",
//         artist: "Solstice",
//         about: [
//             "<span class='italic'>Solstice</span>, founded by composer and guitarist Andy Glass, was voted Best Band in Prog magazine's latest Reader's Poll. Their new album, <span class='italic'>Clann</span>, is set for release on April 4th, 2025.",
//             "The first single, <span class='italic'>Firefly</span>, perfectly captures their signature blend of high-intensity prog-folk, soaring new age, and fresh, funky pop-rock with world music influences."
//         ],
//         youtube: "https://www.youtube.com/embed/BMJMTdOHaV4?si=hlHkB_i-kzzvIVfC",
//         artistSite: "https://solsticeprog.uk/"
//     },
//     {
//         song: "Savior",
//         artist: "Jason Bieler & The Baron Von Bielski Orchestra",
//         about: [
//             "<span class='italic'>Jason Bieler & The Baron Von Bielski Orchestra</span> return with <span class='italic'>The Escapologist</span>, released on February 21, 2025. The first single, <span class='italic'>Savior</span>, showcases the band's self-billed '<span class='italic'>epic, genre-defying prog rock</span>.'",
//             "Joining Jason on <span class='italic'>The Escapologist</span> are guitarist Andee Blacksugar (Blondie, KMFDM, Peter Murphy), drummer Edu Cominato (Geoff Tate, Mr. Big, Soto), and bassist Johan Niemann (Evergrey)."
//         ],
//         youtube: "https://www.youtube.com/embed/tDJ39gt11-c?si=qGdzE4yvW4lxK7k_",
//         artistSite: "https://jasonbieler.com/"
//     },
//     {
//         song: "No Dominion",
//         artist: "IQ",
//         about: [
//             "British progressive rock band <span class='italic'>IQ</span>, founded in Southampton, England in 1981, returns with <span class='italic'>Dominion</span>, their 13th studio album, set for release on March 28, 2025.",
//             "Their new single, <span class='italic'>No Dominion</span>, offers a first look at what's to come."
//         ],
//         youtube: "https://www.youtube.com/embed/TEUzhZJvK_0?si=pklf9UpFO1ddHAy7",
//         artistSite: "https://www.iq-hq.co.uk/"
//     },
//     {
//         song: "Gods Of Pangaea",
//         artist: "Tiktaalika (Haken's Charlie Griffiths)",
//         about: [
//             "<span class='italic'>Haken</span> guitarist Charlie Griffiths returns with <span class='italic'>Gods of Pangaea</span>, the follow-up to his 2022 solo album, this time under the moniker <span class='italic'>Tiktaalika</span>. Set for release on March 14, 2025, the album features drummer Darby Todd (Devin Townsend) and bassist Conner Green (Haken), along with a powerhouse lineup of vocalists.",
//             "The title track, <span class='italic'>Gods of Pangaea</span>, has been launched, featuring vocals from Texture's Daniël de Jongh. Griffiths describes the album as a more song-oriented approach, balancing thrash, prog, sludge, and softer moments, with every riff driving the music forward."
//         ],

//         youtube: "https://www.youtube.com/embed/8Q4oJETGecE?si=FRJdGexyh3mpob6z",
//         artistSite: "https://www.charliegriffiths.com/" 
//       },
// ]


