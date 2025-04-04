const currentPlaylistData = [
    {
        song: "A Natural Disaster",
        artist: "Anathema",
        about: [
            "<span class='italic'>Solstice</span>, founded by composer and guitarist Andy Glass, was voted Best Band in Prog magazine's latest Reader's Poll. Their new album, <span class='italic'>Clann</span>, is set for release on April 4th, 2025.",
            "The first single, <span class='italic'>Firefly</span>, perfectly captures their signature blend of high-intensity prog-folk, soaring new age, and fresh, funky pop-rock with world music influences."
        ],
        youtube: "https://www.youtube.com/embed/JB1djmYr0aA?si=aEN68XO5WVKhxRFK",
        artistSite: "https://www.anathemamusic.com/"
    },
    {
        song: "No Longer We Lie",
        artist: "Exploring Birdsong",
        about: [
            "<span class='italic'>Jason Bieler & The Baron Von Bielski Orchestra</span> return with <span class='italic'>The Escapologist</span>, released on February 21, 2025. The first single, <span class='italic'>Savior</span>, showcases the band's self-billed '<span class='italic'>epic, genre-defying prog rock</span>.'",
            "Joining Jason on <span class='italic'>The Escapologist</span> are guitarist Andee Blacksugar (Blondie, KMFDM, Peter Murphy), drummer Edu Cominato (Geoff Tate, Mr. Big, Soto), and bassist Johan Niemann (Evergrey)."
        ],
        youtube: "https://www.youtube.com/embed/UgsxdCzJCe8?si=Iu7_GtPJdzkiAH8-",
      
        artistSite: "https://www.facebook.com/ExploringBirdsong/"
    },
    {
        song: "Becoming, (R)evolution",
        artist: "Phase Transition",
        about: [
            "British progressive rock band <span class='italic'>IQ</span>, founded in Southampton, England in 1981, returns with <span class='italic'>Dominion</span>, their 13th studio album, set for release on March 28, 2025.",
            "Their new single, <span class='italic'>No Dominion</span>, offers a first look at what's to come."
        ],
        youtube: "https://www.youtube.com/embed/hsSkp_9lhjc?si=HHHg4xBmf2M5mmL3",
        artistSite: "https://phasetransitionofficial.com/home"
    },
    {
        song: "Holy Ghost",
        artist: "Bent Knee",
        about: [
            "<span class='italic'>Haken</span> guitarist Charlie Griffiths returns with <span class='italic'>Gods of Pangaea</span>, the follow-up to his 2022 solo album, this time under the moniker <span class='italic'>Tiktaalika</span>. Set for release on March 14, 2025, the album features drummer Darby Todd (Devin Townsend) and bassist Conner Green (Haken), along with a powerhouse lineup of vocalists.",
            "The title track, <span class='italic'>Gods of Pangaea</span>, has been launched, featuring vocals from Texture's Daniël de Jongh. Griffiths describes the album as a more song-oriented approach, balancing thrash, prog, sludge, and softer moments, with every riff driving the music forward."
        ],
        youtube: "https://www.youtube.com/embed/e9QAlYV6qsY?si=06UviD3fc5f0lb5g",
        artistSite: "https://www.bentkneemusic.com/" 
      },
      {
        song: "Stay for the Ending",
        artist: "District 97",
        about: [
            "<span class='italic'>Haken</span> guitarist Charlie Griffiths returns with <span class='italic'>Gods of Pangaea</span>, the follow-up to his 2022 solo album, this time under the moniker <span class='italic'>Tiktaalika</span>. Set for release on March 14, 2025, the album features drummer Darby Todd (Devin Townsend) and bassist Conner Green (Haken), along with a powerhouse lineup of vocalists.",
            "The title track, <span class='italic'>Gods of Pangaea</span>, has been launched, featuring vocals from Texture's Daniël de Jongh. Griffiths describes the album as a more song-oriented approach, balancing thrash, prog, sludge, and softer moments, with every riff driving the music forward."
        ],
        youtube: "https://www.youtube.com/embed/AHOMo2ayc9k?si=3Wgm27yV8ip3S5y0",
        artistSite: "https://district97.net/" 
      },
      {
        song: "Cause We've Ended As Lovers",
        artist: "Jeff Beck",
        about: [
            "<span class='italic'>Haken</span> guitarist Charlie Griffiths returns with <span class='italic'>Gods of Pangaea</span>, the follow-up to his 2022 solo album, this time under the moniker <span class='italic'>Tiktaalika</span>. Set for release on March 14, 2025, the album features drummer Darby Todd (Devin Townsend) and bassist Conner Green (Haken), along with a powerhouse lineup of vocalists.",
            "The title track, <span class='italic'>Gods of Pangaea</span>, has been launched, featuring vocals from Texture's Daniël de Jongh. Griffiths describes the album as a more song-oriented approach, balancing thrash, prog, sludge, and softer moments, with every riff driving the music forward."
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


