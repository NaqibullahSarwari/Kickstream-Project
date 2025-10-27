import StreamTab from "../../components/StreamTab.jsx";

export default function StreamerPage({ params }) {
  // Stream data based on the streamer name from URL
  const getStreamerData = (streamerName) => {
    const streamersData = {
      livvcore: {
        name: "Livvcore",
        isVerified: true,
        title: "AUNTIE IMMO RANKED",
        game: "VALORANT",
        tags: ["girlgamers", "girlstreaming", "Valo", "provalorant", "She", "Skyemain", "English", "valorant", "VALORANT", "Canada"],
        followers: "52.4K",
        socialLinks: {
          youtube: "YOUTUBE",
          instagram: "INSTAGRAM",
          twitter: "X",
          tiktok: "TIK TOK"
        },
        goal: {
          title: "October",
          description: "Help me earn points to reach Plus Level 2",
          current: 108,
          target: 300
        },
        viewerCount: "295",
        duration: "7:08:45"
      },
      spookytimepizza: {
        name: "SpookyTimePizza",
        isVerified: true,
        title: "🌮 TACO HUNTS GHOSTS 👻 PHAS BI...",
        game: "Phasmophobia",
        tags: ["Phasmophobia", "Pizza", "Chaotic", "English", "Horror"],
        followers: "23.1K",
        socialLinks: {
          youtube: "YOUTUBE",
          instagram: "INSTAGRAM",
          twitter: "X",
          tiktok: "TIK TOK"
        },
        goal: {
          title: "Halloween Special",
          description: "Spook Level Increase Goal",
          current: 67,
          target: 150
        },
        viewerCount: "85",
        duration: "3:22:15"
      },
      charlottemunster: {
        name: "charlottemunster",
        isVerified: false,
        title: "playing Cabin Factory!!! 18+ !socials ...",
        game: "The Cabin Factory",
        tags: ["booba", "spotthedifference", "Tattoos", "18+", "English"],
        followers: "15.7K",
        socialLinks: {
          youtube: "YOUTUBE",
          instagram: "INSTAGRAM",
          twitter: "X",
          tiktok: "TIK TOK"
        },
        goal: {
          title: "Art Supplies",
          description: "Help me get new art supplies for stream",
          current: 45,
          target: 100
        },
        viewerCount: "155",
        duration: "5:42:30"
      },
      ironmouse: {
        name: "Ironmouse",
        isVerified: true,
        title: "THE MOST HORRIBLE STREAMER IS ...",
        game: "Just Chatting",
        tags: ["PuertoRico", "vtuber", "latino", "English", "Chatting"],
        followers: "1.2M",
        socialLinks: {
          youtube: "YOUTUBE",
          instagram: "INSTAGRAM",
          twitter: "X",
          tiktok: "TIK TOK"
        },
        goal: {
          title: "Charity Stream",
          description: "Raising money for medical research",
          current: 250,
          target: 500
        },
        viewerCount: "6000",
        duration: "4:15:22"
      }
    };

    // Safety check for undefined streamerName
    if (!streamerName || typeof streamerName !== 'string') {
      return streamersData.livvcore;
    }

    return streamersData[streamerName.toLowerCase()] || streamersData.livvcore;
  };

  // Safety check for params
  const streamerData = getStreamerData(params?.streamer);

  return <StreamTab streamerData={streamerData} />;
}
