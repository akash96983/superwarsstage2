const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
  ];
  
  const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i < players.length; i++) {
      let data = {
        name: players[i],
        strength: getRandomStrength(),
        image: `images/super-${i + 1}.png`,
        type: i % 2 === 0 ? "hero" : "villain",
      };
      detailedPlayers.push(data);
    }
  
    return detailedPlayers;
  };
  
  const buildPlayers = (players, type) => {
    let fragment = "";
  
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
      if (players[i].type === type) {
        let item = `<div class="player"><img src="${players[i].image}" alt=""><div class="name">${players[i].name}</div><div class="strength">${players[i].strength}</div></div>`;
        fragment += item;
      }
    }
  
    return fragment;
  };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(
      players,
      "villain"
    );
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  