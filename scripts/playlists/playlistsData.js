const currentPlaylistData = [
  {
    song: "Thela Hun Ginjeet",
    artist: "BEAT",
    about: [
      "This version of <span class='italic'>Thela Hun Ginjeet</span> comes from <span class='italic'>BEAT</span>'s upcoming live album <span class='italic'>BEAT LIVE</span>, recorded at the <span class='italic'>United Theater on Broadway</span> in Los Angeles. Former King Crimson members Adrian Belew and Tony Levin joined forces with guitar virtuoso Steve Vai and Tool drummer Danny Carey to reinterpret classic King Crimson material from the iconic 80s albums <span class='italic'>Discipline, Beat</span>, and <span class='italic'>Three of a Perfect Pair</span>.",
    ],

    youtube: "https://www.youtube.com/embed/YkAEm3pGGN4?si=33aJD7Z_raq8wSbx",
    artistSite: "https://beat-tour.com/",
  },
  {
    song: "Things We Tell Ourselves In The Dark",
    artist: "Between the Buried and Me",
    about: [
      "<span class='italic'>Things We Tell Ourselves in the Dark</span> comes from Between the Buried and Me's new album <span class='italic'>The Blue Nowhere</span>. Unlike their past concept albums, this record takes a more introspective turn, with vocalist Tommy Rogers describing the lyrics as \"journal entries, fleeting thoughts - chaotic at times.\" Known for their mix of technical prog-metal, avant-garde experimentation, and genre shifts, the band delivers a track that's both intricate and direct.",
    ],
    youtube: "https://www.youtube.com/embed/6FdXmAPM8u4?si=5IWIXFGEPns1doGc",
    artistSite: "https://www.betweentheburiedandme.com/",
  },
  {
    song: "Bend the Clock",
    artist: "Dream Theater",
    about: [
      "<span class='italic'>Bend the Clock</span> comes from Dream Theater's 2025 album <span class='italic'>Parasomnia</span>. Opening with softly overdriven guitar and subdued vocals, the track conveys a vulnerability alongside the heavier moments. Petrucci's opening guitar parts reveal subtle Hendrix-like touches, while his final solo channels a hint of David Gilmour in his own signature style. Nostalgic yet mature, the song balances simplicity and emotional depth, making it one of the album's most memorable moments.",
    ],
    youtube: "https://www.youtube.com/embed/JuZ2zp-6lLY?si=Ou105ap23KJd3c5v",
    artistSite: "https://dreamtheater.net/",
  },
  {
    song: "Black With Ink",
    artist: "Big Big Train",
    about: [
      "<span class='italic'>Black With Ink</span> was originally released on Big Big Trains 2021 album <span class='italic'>Common Ground</span>, but this version comes from their 2025 live album <span class='italic'>Are We Nearly There Yet?</span>. Recorded in London in October 2024, the track showcases the band's dynamic live energy, with vocals shared among Rikard Sjöblom, Nick D'Virgilio, Clare Lindley, and Oskar Holldorff. Guitarist/keyboardist Rikard Sjöblom says, \"I always thought it could be a kick-ass tune live and that's exactly how it turned out.\"",
    ],
    youtube: "https://www.youtube.com/embed/wHXUBNpT80A?si=vxQClLMq7wlx-n3c",
    artistSite: "https://www.bigbigtrain.com/",
  },
];

const playlistPageData = [
  {
    date: new Date("2025-10-15"),
    description:
      "This month's playlist drifts through the haunted corridors of progressive music — where ghosts, guilt, and the unknown converge. From the psychological unease of Steven Wilson's <span class='italic'>Index</span>, to the infernal descent of Opeth's <span class='italic'>Ghost of Perdition</span>, and the occult dreamscape of Goblins <span class='italic'>Suspiria</span>, each piece pulls back the veil just a little more. Jethro Tull's <span class='italic'>The Witch's Promise</span> summons the old spirits, while <span class='italic'>The Raven That Refused to Sing</span> closes the circle in quiet, spectral sorrow.",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/0vOygkBDgJDfcJNrFOGkno?utm_source=generator&theme=0",
    spotifyHeight: "950px",
    songs: [
      {
        song: "Index",
        artist: "Steven Wilson",
        about: [
          "<span class='italic'>Index</span> by Steven Wilson draws from John Fowles' 1963 novel <span class='italic'>The Collector</span> — a dark tale of obsession and control. The song captures the mindset of a man who kidnaps a woman in a desperate bid for love. Its mechanical pulse and haunting vocals portray a meticulous, hollow mindset consumed by compulsion. This live version, from the <span class='italic'>Get All You Deserve</span> release, intensifies the song's eerie, unsettling atmosphere.",
        ],
        youtube:
          "https://www.youtube.com/embed/pROd0gGABlw?si=XqT9Ke2G4uy71Ov5",
        artistSite: "https://stevenwilsonhq.com/",
      },
      {
        song: "Ghost of Perdition",
        artist: "Opeth",
        about: [
          "<span class='italic'>Ghost of Perdition</span>, the opening track from Opeth's 2005 album <span class='italic'>Ghost Reveries</span>, opens with a set of clean guitar chords before descending into chaos with the cry, “Ghost of mother! Lingering death!” Originally part of a planned occult concept album, the song follows a once-Christian man spiraling into darkness after murdering his mother. Though the larger narrative was left unfinished, <span class='italic'>Ghost of Perdition</span> endures as the chilling first step in that doomed descent.",
        ],

        youtube:
          "https://www.youtube.com/embed/p3SXIWS7rBQ?si=yXyeu2I7QAKJ4FLt",
        artistSite: "https://www.opeth.com/",
      },
      {
        song: "Susperia",
        artist: "Goblin",
        about: [
          "<span class='italic'>Suspiria</span> by Goblin, from Dario Argento's 1977 horror classic of the same name, remains one of the most haunting marriages of music and film. The track's whispered voices, music-box motifs, and unsettling rhythms mirror the film's dreamlike terror, where a ballet school hides something far more sinister. Goblin's blend of prog-rock, ritual percussion, and avant-garde sound design transforms <span class='italic'>Suspiria</span> into an incantation — as hypnotic and unsettling as the film itself.",
        ],

        youtube:
          "https://www.youtube.com/embed/LegptRrPR_s?si=-Sjf7MO4etmEj94N",
        artistSite: "https://www.goblinofficial.com",
      },
      {
        song: "The Witch's Promise",
        artist: "Jethro Tull",
        about: [
          "<span class='italic'>The Witch's Promise</span> by Jethro Tull tells the story of a man seduced by a witch, only to abandon her for a new love — a betrayal that brings about a haunting curse. Recorded in 1969 and released as a standalone single in 1970, the track features John Evan on piano and mellotron. The witch's promise itself feels like a spell — one that begins in enchantment but ends in punishment for forsaking true affection.",
        ],

        youtube:
          "https://www.youtube.com/embed/lrGlfeA-JdY?si=LTH3jy9vBBMJMcWv",
        artistSite: "https://jethrotull.com/",
      },
      {
        song: "The Raven That Refused to Sing",
        artist: "Steven Wilson",
        about: [
          "<span class='italic'>The Raven That Refused to Sing</span> closes Steven Wilson's 2013 album of the same name with a ghostly fable of loss and regret. Wilson describes it as &quot;the story of an old man at the end of his life who is waiting to die… He becomes convinced that a raven in his garden is a manifestation of his sister. She used to sing to him whenever he was afraid, and he believes that if he can make the raven sing, it will prove she has come back to take him to the next life.&quot;",
        ],

        youtube:
          "https://www.youtube.com/embed/n8sLcvWG1M4?si=WPzmoJ5MhgrANB96",
        artistSite: "https://stevenwilsonhq.com/",
      },
    ],
  },
  {
    date: new Date("2025-09-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/0AuglytL7juRSC2lgmbC4p?utm_source=generator&theme=0",
    spotifyHeight: "850px",
    songs: [
      {
        song: "Thela Hun Ginjeet",
        artist: "BEAT",
        about: [
          "This version of <span class='italic'>Thela Hun Ginjeet</span> comes from <span class='italic'>BEAT</span>'s upcoming live album <span class='italic'>BEAT LIVE</span>, recorded at the <span class='italic'>United Theater on Broadway</span> in Los Angeles. Former King Crimson members Adrian Belew and Tony Levin joined forces with guitar virtuoso Steve Vai and Tool drummer Danny Carey to reinterpret classic King Crimson material from the iconic 80s albums <span class='italic'>Discipline, Beat</span>, and <span class='italic'>Three of a Perfect Pair</span>.",
        ],

        youtube:
          "https://www.youtube.com/embed/YkAEm3pGGN4?si=33aJD7Z_raq8wSbx",
        artistSite: "https://beat-tour.com/",
      },
      {
        song: "Things We Tell Ourselves In The Dark",
        artist: "Between the Buried and Me",
        about: [
          "<span class='italic'>Things We Tell Ourselves in the Dark</span> comes from Between the Buried and Me's new album <span class='italic'>The Blue Nowhere</span>. Unlike their past concept albums, this record takes a more introspective turn, with vocalist Tommy Rogers describing the lyrics as \"journal entries, fleeting thoughts - chaotic at times.\" Known for their mix of technical prog-metal, avant-garde experimentation, and genre shifts, the band delivers a track that's both intricate and direct.",
        ],
        youtube:
          "https://www.youtube.com/embed/6FdXmAPM8u4?si=5IWIXFGEPns1doGc",
        artistSite: "https://www.betweentheburiedandme.com/",
      },
      {
        song: "Bend the Clock",
        artist: "Dream Theater",
        about: [
          "<span class='italic'>Bend the Clock</span> comes from Dream Theater's 2025 album <span class='italic'>Parasomnia</span>. Opening with softly overdriven guitar and subdued vocals, the track conveys a vulnerability alongside the heavier moments. Petrucci's opening guitar parts reveal subtle Hendrix-like touches, while his final solo channels a hint of David Gilmour in his own signature style. Nostalgic yet mature, the song balances simplicity and emotional depth, making it one of the album's most memorable moments.",
        ],
        youtube:
          "https://www.youtube.com/embed/JuZ2zp-6lLY?si=Ou105ap23KJd3c5v",
        artistSite: "https://dreamtheater.net/",
      },
      {
        song: "Black With Ink",
        artist: "Big Big Train",
        about: [
          "<span class='italic'>Black With Ink</span> was originally released on Big Big Trains 2021 album <span class='italic'>Common Ground</span>, but this version comes from their 2025 live album <span class='italic'>Are We Nearly There Yet?</span>. Recorded in London in October 2024, the track showcases the band's dynamic live energy, with vocals shared among Rikard Sjöblom, Nick D'Virgilio, Clare Lindley, and Oskar Holldorff. Guitarist/keyboardist Rikard Sjöblom says, \"I always thought it could be a kick-ass tune live and that's exactly how it turned out.\"",
        ],
        youtube:
          "https://www.youtube.com/embed/wHXUBNpT80A?si=vxQClLMq7wlx-n3c",
        artistSite: "https://www.bigbigtrain.com/",
      },
    ],
  },
  {
    date: new Date("2025-04-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/0obCUHiVzSDUvlruSuNESU?utm_source=generator&theme=0",
    spotifyHeight: "850px",
    songs: [
      {
        song: "Puzzle Box",
        artist: "Haken",
        about: [
          "<span class='italic'>Puzzle Box</span>, originally released on <span class='italic'>Haken's</span> 2018 album <span class='italic'>Vector</span>, appears here as part of their latest live release, <span class='italic'>Liveforms: An Evening with Haken.</span>",
          "The song references <span class='italic'>Plato's Allegory of the Cave</span>, while exploring themes of self-discovery, memory, and mental breakdown.",
        ],
        youtube:
          "https://www.youtube.com/embed/pCznO-Venyo?si=AoTLKX3nZVDA_ZVx",
        artistSite: "https://hakenmusic.com/",
      },
      {
        song: "Catalyst",
        artist: "Lux Terminus",
        about: [
          "<span class='italic'>Catalyst</span> is a track from Cleveland-based prog trio <span class='italic'>Lux Terminus'</span> album <span class='italic'>Cinder</span>, which dives into the emotional battlefield of mental health. Featuring guest vocalists <span class='italic'>Ross Jennings</span> and <span class='italic'>Jon Pyres</span> as the protagonist's opposing inner voices, the song captures the struggle between light and darkness—the fight to hold onto hope in the bleakest moments. Musically, it's a journey through metal, jazz, and cinematic textures, anchored by the band's signature piano-driven sound.",
        ],
        youtube:
          "https://www.youtube.com/embed/JGwzyOUqNzQ?si=f-m9Zdb2mm6D3j08",
        artistSite: "https://luxterminus.bandcamp.com/",
      },
      {
        song: "Deep Water Suite: Launch Out",
        artist: "Cosmic Cathedral",
        about: [
          "<span class='italic'>Deep Water Suite: Launch Out</span>, from the powerhouse prog group <span class='italic'>Cosmic Cathedral</span>, featuring drumming legend <span class='italic'>Chester Thompson (Genesis, Frank Zappa)</span>, guitar virtuoso <span class='italic'>Phil Keaggy (Glass Harp)</span>, acclaimed bassist <span class='italic'>Byron House (Robert Plant, Alison Krauss)</span>, and prog mainstay <span class='italic'> Neal Morse</span>.",
        ],
        youtube:
          "https://www.youtube.com/embed/ehkwCgOTS0I?si=ZixFV4yIh8sV2JGU",
        artistSite:
          "https://nealmorse.com/product/cosmic-cathedral-deep-water/",
      },
      {
        song: "Her Ghost In Limbo",
        artist: "Altesia",
        about: [
          "<span class='italic'>Her Ghost on Limbo</span> is taken from <span class='italic'>The Somnambulist</span>, the upcoming album by French based progressive metal band <span class='italic'>Altesia</span>. Founded by Clément Darrieu and influenced by acts like Opeth, Haken, and Leprous, <span class='italic'>Altesia</span> has grown into a fully collaborative unit. <span class='italic'>Every note, every interpretation, every silence has been thought out and discussed</span>, says Darrieu, calling <span class='italic'>The Somnambulist</span> their <span class='italic'>most accomplished, collective, and diverse work to date.</span>",
        ],
        youtube:
          "https://www.youtube.com/embed/xGDqcsftG-M?si=wBYmDDnFV6p85_w0",
        artistSite: "https://altesiamusic.com/",
      },
    ],
  },
  {
    date: new Date("2025-03-15"),
    description:
      "This Women's History Month, join us as we spotlight the innovators whose unique voices and bold creativity continue to shape the genre.",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/5EfpxPOVIsMsSvTjohCiIl?utm_source=generator&theme=0",
    spotifyHeight: "850px",
    songs: [
      {
        song: "A Natural Disaster",
        artist: "Anathema",
        about: [
          "Lee Douglas's vocal on <span class='italic'>A Natural Disaster</span> marked a turning point for <span class='italic'>Anathema</span>, introducing a new emotional depth to the band's evolving sound. Originally rooted in doom metal <span class='italic'>Anathema</span> shifted towards progressive rock in the 2000s, and Lee's voice became a vital part of that transformation.",
          "Her performance on this track is both fragile and powerful, and captures the song's sense of longing and introspection.",
        ],
        youtube:
          "https://www.youtube.com/embed/JB1djmYr0aA?si=aEN68XO5WVKhxRFK",
        artistSite: "https://www.anathemamusic.com/",
      },
      {
        song: "No Longer We Lie",
        artist: "Exploring Birdsong",
        about: [
          "Liverpool-based trio <span class='italic'>Exploring Birdsong</span> captivates listeners by seamlessly merging progressive rock, pop, and classical influences and vocalist/keyboardist Lynsey Ward is central to the band's distinctive style.",
          "<span class='italic'>No Longer We Lie,</span> the closing track from their 2023 EP <span class='italic'>Dancing in the Face of Danger</span> showcases the band's innovative approach to progressive music.",
        ],
        youtube:
          "https://www.youtube.com/embed/UgsxdCzJCe8?si=Iu7_GtPJdzkiAH8-",
        artistSite: "https://www.facebook.com/ExploringBirdsong/",
      },
      {
        song: "Becoming, (R)evolution",
        artist: "Cosmic Cathedral",
        about: [
          "Hailing from Porto, Portugal, <span class='italic'>Phase Transition</span>, blends classical and technical progressive metal. At the center is Sofia Beco, whose violin and vocals shape the band's distinct sound.",
          "According to Sofia, <span class='italic'>Becoming, (R)evolution</span>, from their upcoming album <span class='italic'>In Search of Being</span>, is about 'youth, growing up — that time of your life when you learn you have a voice.'",
        ],
        youtube:
          "https://www.youtube.com/embed/hsSkp_9lhjc?si=HHHg4xBmf2M5mmL3",
        artistSite: "https://phasetransitionofficial.com",
      },
      {
        song: "Holy Ghost",
        artist: "Bent Knee",
        about: [
          "Known for blending pop, industrial rock, progressive rock, and avant-garde influences, <span class='italic'>Bent Knee</span> is an American art rock band formed at the Berklee College of Music in 2009.",
          "At the forefront is vocalist Courtney Swain, whose powerful performance on <span class='italic'>Holy Ghost</span> from their 2017 album <span class='italic'>Land Animal</span>, captures the band's experimental spirit.",
        ],
        youtube:
          "https://www.youtube.com/embed/e9QAlYV6qsY?si=06UviD3fc5f0lb5g",
        artistSite: "https://www.bentkneemusic.com/",
      },
      {
        song: "Stay for the Ending",
        artist: "District 97",
        about: [
          "Formed in 2006 in Chicago, Illinois and featuring 2007 American Idol Top 10 finalist Leslie Hunt, <span class='italic'>District 97</span> fuses influences ranging from heavy metal to avant-garde jazz.",
          "Their song <span class='italic'>Stay for the Ending</span>, from their 2023 album of the same name, encapsulates their blending of styles.",
        ],
        youtube:
          "https://www.youtube.com/embed/AHOMo2ayc9k?si=3Wgm27yV8ip3S5y0",
        artistSite: "https://district97.net/",
      },
      {
        song: "Cause We've Ended As Lovers",
        artist: "Jeff Beck",
        about: [
          "While our list is heavily focused on vocalists, we must acknowledge the extraordinary contribution of bassist <span class='italic'>Tal Wilkenfeld</span> on <span class='italic'>Jeff Beck's Cause We Ended as Lovers</span>, recorded in 2007 at Ronnie Scott's in London when she was just 20 years old.",
          "Tal has performed with Chick Corea, Herbie Hancock, and Wayne Shorter, and appears on Prince's 2021 album <span class='italic'>Welcome 2 America</span>, the first posthumous release featuring previously unreleased music recorded in 2010.",
        ],
        youtube:
          "https://www.youtube.com/embed/f6n_EJ5ynQo?si=p4H--cQjijE04-GJ",
        artistSite: "https://en.wikipedia.org/wiki/Jeff_Beck/",
      },
    ],
  },
  {
    date: new Date("2025-02-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/1CzaFCkX5V2YfrUYmiyYA2?utm_source=generator&theme=0",
    spotifyHeight: "800px",
    songs: [
      {
        song: "Firefly",
        artist: "Solstice",
        about: [
          "<span class='italic'>Solstice</span>, founded by composer and guitarist Andy Glass, was voted Best Band in Prog magazine's latest Reader's Poll. Their new album, <span class='italic'>Clann</span>, is set for release on April 4th, 2025.",
          "The first single, <span class='italic'>Firefly</span>, perfectly captures their signature blend of high-intensity prog-folk, soaring new age, and fresh, funky pop-rock with world music influences.",
        ],
        youtube:
          "https://www.youtube.com/embed/BMJMTdOHaV4?si=hlHkB_i-kzzvIVfC",
        artistSite: "https://solsticeprog.uk/",
      },
      {
        song: "Savior",
        artist: "Jason Bieler & The Baron Von Bielski Orchestra",
        about: [
          "<span class='italic'>Jason Bieler & The Baron Von Bielski Orchestra</span> return with <span class='italic'>The Escapologist</span>, released on February 21, 2025. The first single, <span class='italic'>Savior</span>, showcases the band's self-billed '<span class='italic'>epic, genre-defying prog rock</span>.'",
          "Joining Jason on <span class='italic'>The Escapologist</span> are guitarist Andee Blacksugar (Blondie, KMFDM, Peter Murphy), drummer Edu Cominato (Geoff Tate, Mr. Big, Soto), and bassist Johan Niemann (Evergrey).",
        ],
        youtube:
          "https://www.youtube.com/embed/tDJ39gt11-c?si=qGdzE4yvW4lxK7k_",
        artistSite: "https://jasonbieler.com/",
      },
      {
        song: "No Dominion",
        artist: "IQ",
        about: [
          "British progressive rock band <span class='italic'>IQ</span>, founded in Southampton, England in 1981, returns with <span class='italic'>Dominion</span>, their 13th studio album, set for release on March 28, 2025.",
          "Their new single, <span class='italic'>No Dominion</span>, offers a first look at what's to come.",
        ],
        youtube:
          "https://www.youtube.com/embed/TEUzhZJvK_0?si=pklf9UpFO1ddHAy7",
        artistSite: "https://www.iq-hq.co.uk/",
      },
      {
        song: "Gods Of Pangaea",
        artist: "Tiktaalika (Haken's Charlie Griffiths)",
        about: [
          "<span class='italic'>Haken</span> guitarist Charlie Griffiths returns with <span class='italic'>Gods of Pangaea</span>, the follow-up to his 2022 solo album, this time under the moniker <span class='italic'>Tiktaalika</span>. Set for release on March 14, 2025, the album features drummer Darby Todd (Devin Townsend) and bassist Conner Green (Haken), along with a powerhouse lineup of vocalists.",
          "Gods of Pangaea features vocals from Texture's Daniël de Jongh. Griffiths describes the album as a more song-oriented approach, balancing thrash, prog, sludge, and softer moments, with every riff driving the music forward.",
        ],

        youtube:
          "https://www.youtube.com/embed/8Q4oJETGecE?si=FRJdGexyh3mpob6z",
        artistSite: "https://www.charliegriffiths.com/",
      },
    ],
  },
  {
    date: new Date("2024-11-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/7FkxFMJWWXnaudHtZ3xERx?utm_source=generator&theme=0",
    spotifyHeight: "830px",
    songs: [
      {
        song: "Landmine Blast",
        artist: "Riverside",
        about: [
          "<span class='italic'>Riverside</span> have released the first single, <span class='italic'>Landmine Blast</span> from their upcoming live album <span class='italic'>Live.ID</span> set for release on January 24, 2025, via InsideOut Music.",
          "As bassist and vocalist Mariusz Duda explains, 'There are a lot of nuances, quirks, and, above all, explanations of what Riverside's music is all about. That's why <span class='italic'>Live.ID</span> is not just an ordinary live album—it's an album that reveals the band's true identity.'",
        ],
        youtube:
          "https://www.youtube.com/embed/zJJC7QysRp0?si=z2zdvw14voSzBA8n",
        artistSite: "https://riversideband.pl/en/",
      },
      {
        song: "Opaco",
        artist: "Asymmetric Universe",
        about: [
          "Italy's <span class='italic'>Asymmetric Universe</span>, founded in 2018 by brothers Federico and Nicolò Vese, aims to push the limits of modern prog by seamlessly blending coherently different genres.",
          "According to the brothers, <span class='italic'>Opaco</span>, 'is the most technically challenging song we have ever composed. It's inspired by the guitar style of bands like Animals As Leaders and Polyphia, but with genre-bending jazz sections inspired by Pat Metheny, Victor Wooten, and Jacob Collier.'",
        ],
        youtube:
          "https://www.youtube.com/embed/ycEx-xp0aQs?si=wj7RYe1CkqS8bpo8",
        artistSite: "https://www.facebook.com/asymmetricuniverse/",
      },
      {
        song: "Broken",
        artist: "Kite Parade",
        about: [
          "Andy Foster, the Somerset-based musician behind <span class='italic'>Kite Parade</span>, has unveiled a video for his heartfelt new single <span class='italic'>Broken</span>.",
          "Featuring the powerful vocals of <span class='italic'>Exploring Birdsong's</span> Lynsey Ward, the song embodies the melodic and accessible style that has become <span class='italic'>Kite Parade's</span> hallmark sound.",
        ],
        youtube:
          "https://www.youtube.com/embed/iE2sd03QNFw?si=OzyDz-feN1PCGmMs",
        artistSite: "https://www.facebook.com/KiteParadeMusic/",
      },
      {
        song: "§4",
        artist: "Opeth",
        about: [
          "<span class='italic'>Opeth's §4</span>, from their latest album <span class='italic'>The Last Will and Testament</span>, features <span class='italic'>Jethro Tull's</span> Ian Anderson on flute and spoken word.",
          "Set in the post-World War I era, <span class='italic'>The Last Will and Testament</span> tells the story of a wealthy patriarch whose shocking secrets are revealed after his death, casting a dark shadow over his family's history.",
        ],
        youtube:
          "https://www.youtube.com/embed/UenLRXki8KA?si=SKq0IiR4t7JY3kK_",
        artistSite: "https://www.opeth.com/",
      },
    ],
  },
  {
    date: new Date("2024-10-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/76PG8tLgLKUsoj0T2mIVzU?utm_source=generator&theme=0",
    spotifyHeight: "830px",
    songs: [
      {
        song: "All Because Of Me",
        artist: "The Pineapple Thief",
        about: [
          "<span class='italic'>All Because of Me</span>, by <span class='italic'>The Pineapple Thief</span>, offers fans a glimpse of the band's upcoming EP, <span class='italic'>Last To Run</span> set to be released November 8 via Kscope.",
          "<span class='italic'>'The songs on this EP are based on ideas from the It Leads To This sessions but have since evolved way beyond what we would have imagined at the time. We are delighted with the result—it really seems to capture a different mood and sound'</span> shared vocalist/guitarist Bruce Soord.",
        ],
        youtube:
          "https://www.youtube.com/embed/pWWOsQWgAO4?si=sMhWlkqmDV3-Dxr6",
        artistSite: "https://www.pineapplethief.com/",
      },
      {
        song: "Blood of the Iconoclast",
        artist: "Anima Morte",
        about: [
          "<span class='italic'>Anima Morte</span> is a Swedish instrumental band celebrated for their unique fusion of cinematic horror soundtrack elements, inspired by Italian horror films such as <span class='italic'>Zombie</span>, <span class='italic'>The Beyond</span>, and <span class='italic'>Suspiria</span>, with classic progressive rock.",
          "<span class='italic'><span class='italic'>Blood of the Iconoclast</span>, from their 2022 album <span class='italic'>Serpents in the Fields of Sleep</span>, weaves strong musical motifs to create equal parts atmosphere and groove.",
        ],
        youtube:
          "https://www.youtube.com/embed/0V29fEHAZ1s?si=9aJexiLExHkZEpZW",
        artistSite: "https://www.animamorte.com/",
      },
      {
        song: "Not Dead Yet",
        artist: "Envy of None",
        about: [
          "<span class='italic'>Envy of None</span> is a Canadian-American rock supergroup formed in 2021 by former Rush guitarist Alex Lifeson, alongside bassist Andy Curran, vocalist Maiah Wynne, and guitarist/keyboardist Alfio Annibalini.",
          "Their song <span class='italic'>Not Dead Yet</span>, with lyrics written by Wynne and inspired by Curran's striking chorus line, 'I'm not dead yet, come on along and see what I am good for', is a song that, as Wynne describes, '<span class='italic'>embodies resilience and defiance against the forces that aim to tear us down.</span>",
        ],
        youtube:
          "https://www.youtube.com/embed/-auAxRx99gA?si=59466cR82Iaeq_fR",
        artistSite: "https://envyofnone.com/",
      },
      {
        song: "Night Terror",
        artist: "Dream Theater",
        about: [
          "Returning with their 16th album—and their first with original drummer Mike Portnoy since 2009's <span class='italic'>Black Clouds & Silver Linings</span>—progressive metal pioneers Dream Theater need no introduction.",
          "Their new track, <span class='italic'>Night Terror</span>, is taken from from their upcoming album <span class='italic'>Parasomnia</span>, which is set to be released February 7, 2025, through Inside Out Music/Sony Music. For better or worse, the track feels like a continuation of the energy and style the band had when Portnoy departed in 2010.",
        ],
        youtube:
          "https://www.youtube.com/embed/2IPT60hvGw4?si=eDJa34uZibAlpiob",
        artistSite: "https://dreamtheater.net/",
      },
    ],
  },
  {
    date: new Date("2024-09-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/6rsI3rakFExsnLgsp7My81?utm_source=generator&theme=0",
    spotifyHeight: "830px",
    songs: [
      {
        song: "Jainism",
        artist: "Devin Townsend",
        about: [
          "<span class='italic'>Jainism</span> is the second song to be released from Devin Townsend's forthcoming album, <span class='italic'>PowerNerd</span> to be released on Oct. 25, 2024.",
          "As Townsend explains, <span class='italic'>Jainism</span> was based on my connection to music in the mid nineties. Also the idea of what it means to rend yourself artistically to an unresponsive world in 2024. I referenced The Wildhearts in the chorus, as Ginger is one of our generations greatest songwriters.",
        ],
        youtube:
          "https://www.youtube.com/embed/IypFEGztl-4?si=gKamNYEMp_ltkNkO",
        artistSite: "https://hevydevy.com/",
      },
      {
        song: "War of Being",
        artist: "TesseracT",
        about: [
          "<span class='italic'>TesseractT</span>, hailing from Milton Keynes, UK, are renowned for their complex compositions, dynamic soundscapes, and pioneering role in the djent movement within progressive metal.",
          "Taken from the 2023 album of the same name, <span class='italic'>War of Being</span> finds the protagonist initially being led to believe in a false reality, only to ultimately reject this deception and begin to question their circumstances.",
        ],
        youtube:
          "https://www.youtube.com/embed/UnkpPIupQxM?si=-fKLP8s7R6WJovre",
        artistSite: "https://www.tesseractband.co.uk/",
      },
      {
        song: "Preboreal",
        artist: "The Ocean",
        about: [
          "<span class='italic'>The Ocean</span> is a German progressive metal band known for their blend of post-metal, sludge, and experimental sounds.",
          "<span class='italic'>Preboreal</span> is taken from their 2023 album <span class='italic'>Holocene</span>, which, according to guitarist Robin Staps, is an album about the \"<span class='italic'>angst, alienation, loss of reason and critical thinking, rise of conspiracy theories and deconstruction of values in the modern age.</span>\"",
        ],
        youtube:
          "https://www.youtube.com/embed/JAEo3VTgNWc?si=LslI4iTXMtLyrn3c",
        artistSite: "https://www.theoceancollective.com",
      },
      {
        song: "Rogue",
        artist: "Jinger",
        about: [
          "Featuring lyrics that denounce a forced occupation and invasion: “And his order has become their thought,” “Collecting blood is his ambition,” and, “We are forcefully put on his map, War-drum always rattles,” <span class='italic'>Rogue</span> is a brutal, chaotic, and dissonant track that captures the raw intensity of resistance, crushing riffs, complex rhythms, and Tatiana Shmayluk's fierce vocal delivery to create a powerful anthem of defiance.",
          ,
        ],
        youtube:
          "https://www.youtube.com/embed/9Uaecbh8ta0?si=JRag1S4JoW7xJjks",
        artistSite: "http://jinjer-metal.com/",
      },
    ],
  },
  {
    date: new Date("2024-08-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/1hKd53mQugxTZqL1852FYp?utm_source=generator&theme=0",
    spotifyHeight: "830px",
    songs: [
      {
        song: "§1",
        artist: "Opeth",
        about: [
          "Opeth have released the first single from their upcoming album <span class='italic'>The Last Will and Testament</span>, to be released October 11 via Reigning Phoenix Music.",
          "The first single features spoken word by Ian Anderson, and is taken from the album which centers around an unfolding story of a wealthy, conservative patriarch whose last will and testament reveals shocking family secrets.",
        ],
        youtube:
          "https://www.youtube.com/embed/bwDrIelXirY?si=_yMwbyL9aGefG_Oe",
        artistSite: "https://www.opeth.com/",
      },
      {
        song: "Life In The Wires Part 1",
        artist: "Frost*",
        about: [
          "UK progressive rockers Frost* have released <span class='italic'>Life In The Wires, Part 1</span from their forthcoming concept album due out October 18th, 2024 via InsideOut Music.",
          "Talking about the album, frontman Jem Godfrey states 'The story revolves around the main character Naio, an aimless kid heading for a meaningless future in an A.I. run world.",
          "Joining Godfrey on the album is guitarist John Mitchell, bassist Nathan King, and drummer Craig Blundell.",
        ],
        youtube:
          "https://www.youtube.com/embed/TIH8Zy728q0?si=nrxU9r4i2nuViR0h",
        artistSite: "https://frost.life/",
      },
      {
        song: "Someone's Daughter",
        artist: "Jinjer",
        about: [
          "Noted for progressive experiments with genres such as metal, R&B, soul, funk, jazz and reggae, and hailing from Donetsk, Ukraine, Jinger have released their new single <span class='italic'>Someone's Daughter.</span>",
          "Vocalist Tatiana Shmayluk states the song is about <span class='italic'>'a world where women are often underestimated and overlooked, they are still powerful heroes who navigate hardship with strength and resilience, unapologetically becoming themselves and breaking barriers in the face of the challenges that face them.</span>",
        ],
        youtube:
          "https://www.youtube.com/embed/djsH7ngox_s?si=8ePBNCLly5_Xb_s1",
        artistSite: "http://jinjer-metal.com/",
      },
      {
        song: "Dark and Velvet Nights",
        artist: "David Gilmour",
        about: [
          "Written by David Gilmour and Polly Samson, <span class='italic'>Dark And Velvet Nights</span> comes from a poem Polly had written. According to Gilmour, 'The music sprang out one day. It was so exciting to have come across this groove. Polly had given me a beautiful poem for our wedding anniversary, which was sitting on the desk right next to me, so I picked it up and sang it on the track, to hear what it would sound like with words. I played it to Polly, and she said, 'Lovely, great, I'll need fiddle with it a bit. So she added a couple of verses, and there it was - very serendipitous.'",
          "",
        ],
        youtube:
          "https://www.youtube.com/embed/mUHMNgKRHbQ?si=7-8jT11TvYJIBac3",
        artistSite: "https://www.davidgilmour.com/",
      },
    ],
  },
  {
    date: new Date("2024-07-15"),
    description: "",
    spotifyPlaylist:
      "https://open.spotify.com/embed/playlist/3n7rkzioAkVXjrIixJxZrA?utm_source=generator&theme=0",
    spotifyHeight: "830px",
    songs: [
      {
        song: "A Boy in Darkness",
        artist: "Big Big Train",
        about: [
          "<span class='italic'>A Boy in Darkness</span> was recorded at Cadogan Hall during their 2023 UK and European tour.",
          "The live album, <span class='italic'>A Flair on the Lense</span>, is set to be released on September 13, 2024.",
        ],
        youtube:
          "https://www.youtube.com/embed/ksu0ZhDgxXM?si=WV9ytJMZ9u2Mp72a",
        artistSite: "https://www.bigbigtrain.com/",
      },
      {
        song: "Shine On",
        artist: "Jon Anderson & The Band Geeks",
        about: [
          "<span class='italic'>Shine</span> is the first single from <span class='italic'>Jon Anderson & The Band Geeks</span> forthcoming album <span class='italic'>TRUE</span>, which is scheduled to be released August 23rd, 2024.",
        ],
        youtube:
          "https://www.youtube.com/embed/xn-kFz5ibGA?si=FD5zrA8CfqBoIih1",
        artistSite: "https://jonanderson.com/",
      },
      {
        song: "Atonement",
        artist: "Leprous",
        about: [
          "<span class='italic'>Leprous</span> is a Norwegian progressive metal band from Notodden, formed in 2001 by singer and keyboardist Einar Solberg and guitarist Tor Oddmund Suhrke.",
          "<span class='italic'>Atonement</span> is taken from their upcoming album <span class='italic'>Melodies of Atonement</span>, set to be released on August 30th, 2024 via Inside Out Music.",
        ],
        youtube:
          "https://www.youtube.com/embed/k-po0_DnsJk?si=njEMPaMEqbe_jBEX",
        artistSite: "https://leprous.net/",
      },
      {
        song: "Turntail",
        artist: "Exploring Birdsong",
        about: [
          "Hailing from the UK, <span class='italic'>Exploring Birdsong</span> consists of vocalist/pianist Lynsey Ward, Jonny Knight bass guitar/synth, and Matt Harrison on drums and percussion.",
          "The trio has caught the eyes of the press (Prog Magazine, Kerrang!, Classic Rock Magazine) and achieved two Progressive Music Awards nominations.",
        ],
        youtube:
          "https://www.youtube.com/embed/vmwaED9WN5M?si=QK8YsWaJWV0LKc05",
        artistSite: "https://www.facebook.com/ExploringBirdsong/",
      },
    ],
  },
];

// {
//   date: new Date("2024-11-15"),
//     description: "",
//     spotifyPlaylist: "",
//     spotifyHeight: '830px',
//     songs: [
//       {
//         song: "",
//         artist: "",
//         about: [
//             "",
//             ""
//         ],
//         youtube: "",
//         artistSite: ""
//     },
//     {
//         song: "",
//         artist: "",
//         about: [
//             "",
//             ""
//         ],
//         youtube: "",
//         artistSite: ""
//     },
//     {
//         song: "",
//         artist: "",
//         about: [
//             "",
//             ""
//         ],
//         youtube: "",
//         artistSite: ""
//     },
//     {
//         song: "",
//         artist: "",
//         about: [
//             "",
//             ""
//         ],
//         youtube: "",
//         artistSite: ""
//       },
//     ],
//   },
