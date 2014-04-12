//---------------------------------------
//  Database initializer for K&J server
//  © 2014, NWK Systems
//---------------------------------------

//-------------
//  Interface
//-------------

initData = function ()
{
  //Meteor.users.remove({});
  //Messages.remove({});

  initQuestions();

  // Reset and insert a blank global config.
  GlobalConfigs.remove({});
  GlobalConfigs.insert({siteTitle: "Doge³ Software"});

  Channels.remove({});
  var channels = [
    {
      name: "K&P",
      questionNumber: 34,
      timeRemaining: 60
    }
  ];
  for (var j = 0; j < channels.length; j++) {
    Channels.insert(channels[j]);
  }
};

initQuestions = function ()
{
  Questions.remove({});
  var questions = [

{
  picture: "8n.png",
  prompt: "What game is this?",
  answerA: "ONYX",
  answerB: "Namistath",
  answerC: "Dragonbreath",
  answerD: "Power Crystals",
  number: 73,
  correctAnswer: "B",
  current: false
},
{
  picture: "7l.gif",
  prompt: "What game is this?",
  answerA: "Undertown",
  answerB: "Future Fantasy",
  answerC: "Locked 7",
  answerD: "Syndicate Online",
  number: 72,
  correctAnswer: "C",
  current: false
},
{
  picture: "6e.gif",
  prompt: "What game is this?",
  answerA: "Grass Cutter",
  answerB: "Mine Zone",
  answerC: "Magnetizer",
  answerD: "Eggit",
  number: 71,
  correctAnswer: "D",
  current: false
},
{
  picture: "5e.jpg",
  prompt: "What game is this?",
  answerA: "The Spirit Engine",
  answerB: "Eternal Daughter",
  answerC: "Seven Mysteries",
  answerD: "Project Epiphany",
  number: 70,
  correctAnswer: "B",
  current: false
},
{
  picture: "4d.gif",
  prompt: "What game is this?",
  answerA: "Destruction Carnival",
  answerB: "Factor X",
  answerC: "Die Hard: The Game",
  answerD: "Alien",
  number: 69,
  correctAnswer: "A",
  current: false
},
{
  picture: "3r.jpg",
  prompt: "What game is this?",
  answerA: "Smokey the Dragon",
  answerB: "Toyland",
  answerC: "Pie Devil",
  answerD: "Romeo",
  number: 68,
  correctAnswer: "D",
  current: false
},
{
  picture: "2g.png",
  prompt: "What game is this?",
  answerA: "Molecule Man Extreme",
  answerB: "LBC",
  answerC: "Gunner 3",
  answerD: "Walkerton",
  number: 67,
  correctAnswer: "C",
  current: false
},
{
  picture: "1b.gif",
  prompt: "What game is this?",
  answerA: "Smelf",
  answerB: "Bubblechug 63 1/2",
  answerC: "Rad Racing",
  answerD: "Namistath",
  number: 66,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of these was not a Klik & Play library MIDI file?",
  answerA: "AMAZIN0.MID",
  answerB: "KIEV.MID",
  answerC: "BATTL.MID",
  answerD: "KYRIE.MID",
  number: 65,
  correctAnswer: "C",
  current: false
},
{
  prompt: "The DMC Object was made by...",
  answerA: "Phizzy",
  answerB: "Izzy",
  answerC: "Bassy",
  answerD: "Shizzy",
  number: 64,
  correctAnswer: "B",
  current: false,
},
{
  prompt: "The Klik & Play Gamepack (sampler CD) was limited because...",
  answerA: "the Event Editor was disabled",
  answerB: "it was a 30-day trial",
  answerC: "library graphics were disabled",
  answerD: "the Step-Thru Editor was disabled",
  number: 63,
  correctAnswer: "A",
  current: false,
},
{
  prompt: "Which of these is not an exporter for MMF2/Fusion 2.5?",
  answerA: "Xbox",
  answerB: "iOS",
  answerC: "Android",
  answerD: "PSP",
  number: 62,
  correctAnswer: "D",
  current: false,
},
{
  prompt: "Which of these is not a game by Puffin?",
  answerA: "Super Awesome Adventure Extreme",
  answerB: "Very Crazy Ball Arena",
  answerC: "Extreme Shootout Zone",
  answerD: "Super Awesome Santa Adventure",
  number: 61,
  correctAnswer: "C",
  current: false,
},
{
  prompt: "What was The Games Factory's slogan?",
  answerA: "A Powerful Tool For Creative Minds",
  answerB: "A Powerhouse For Creative Minds",
  answerC: "A Creation Tool for Creative Minds",
  answerD: "A Factory for Creative Minds",
  number: 60,
  correctAnswer: "B",
  current: false,
},
{
  prompt: "O3 was started in July of which year?",
  answerA: "2000",
  answerB: "2001",
  answerC: "2002",
  answerD: "2003",
  number: 59,
  correctAnswer: "A",
  current: false,
},
{
  prompt: "What game did Puffin release one week prior to O3's launch?",
  answerA: "Dynamite Rush: Enmity",
  answerB: "Dynamite Rush: Extreme",
  answerC: "Dynamite Rush: Bravery",
  answerD: "Dynamite Rush: Anarchy",
  number: 58,
  correctAnswer: "D",
  current: false,
},
{
  prompt: "The sequel to SAAE was originally...",
  answerA: "a metroidvania",
  answerB: "a puzzle game",
  answerC: "a turn-based game",
  answerD: "an arena battle",
  number: 57,
  correctAnswer: "C",
  current: false,
},
{
  prompt: "What was the name of Kevin Smets' RPG?",
  answerA: "Future Fantasy",
  answerB: "Fantastic Fantasy",
  answerC: "Freedom Future",
  answerD: "Yummy Cube",
  number: 56,
  correctAnswer: "A",
  current: false,
},
{
  prompt: "Which of these klik news sites never existed?",
  answerA: "Desolation Klik",
  answerB: "Klikkety Klik",
  answerC: "Total Klik",
  answerD: "Klik Zone",
  number: 55,
  correctAnswer: "D",
  current: false,
},
{
  prompt: "Which feature was in The Games Factory that later versions of MMF don't have?",
  answerA: "Fast",
  answerB: "Drawline",
  answerC: "Morph",
  answerD: "Rotate",
  number: 54,
  correctAnswer: "C",
  current: false,
},
{
  prompt: "Which of these is not a real product?",
  answerA: "The Games Factory 2",
  answerB: "Multimedia Fusion 2.5",
  answerC: "The Games Factory 2: Newgrounds Edition",
  answerD: "Multimedia Fusion Express",
  number: 53,
  correctAnswer: "B",
  current: false,
},
{
  prompt: "What was Eternal Daughter's working title?",
  answerA: "The Bright Project",
  answerB: "The Black Project",
  answerC: "Eternal Otter",
  answerD: "The Blind Project",
  number: 52,
  correctAnswer: "D",
  current: false,
},
{
  prompt: "3EE's Online extension was called...",
  answerA: "MOOClick",
  answerB: "MOOCon",
  answerC: "MOOCreate",
  answerD: "MOOCafe",
  number: 51,
  correctAnswer: "A",
  current: false,
},
{
  prompt: "Who created the platform classic Gunner 3?",
  answerA: "Nobuyuki",
  answerB: "Joshtek",
  answerC: "KNPMASTER",
  answerD: "alfie",
  number: 50,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Which of the following was not an Acoders (Apocalyptic Coders) game?",
  answerA: "Roller",
  answerB: "Arena Runner",
  answerC: "Fatal Soccer",
  answerD: "Deli Dash",
  number: 49,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Which of these is not a NastyMan game?",
  answerA: "Computer Handyman",
  answerB: "The Pure Of Hart",
  answerC: "Bubble Girl's pack of fun 3",
  answerD: "Bussines Man",
  number: 48,
  correctAnswer: "D",
  current: false
},
{
  prompt: "Who created Eternal Daughter?",
  answerA: "Blackeye Software",
  answerB: "Virtually Real",
  answerC: "Acoders",
  answerD: "Fallen Angel",
  number: 47,
  correctAnswer: "A",
  current: false
},
{
  prompt: "What is the A* algorithm?",
  answerA: "A way to play .mod and .xm files",
  answerB: "A pathfinding technique",
  answerC: "Part of the built-in path object behavior",
  answerD: "A platform engine",
  number: 46,
  correctAnswer: "B",
  current: false
},
{
  prompt: "What entertainer's voice did Bonesaw: The Game prominently feature?",
  answerA: "Arnold Schwarzenegger",
  answerB: "Randy \"Macho Man\" Savage",
  answerC: "Hulk Hogan",
  answerD: "Nicolas Cage",
  number: 45,
  correctAnswer: "B",
  current: false
},
{
  prompt: "\"Silky\" was the pseudonym for which person?",
  answerA: "Chase von Dahl",
  answerB: "Pat Jennings",
  answerC: "Francois Lionet",
  answerD: "Marcello Bastéa-Forte",
  number: 44,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Following the closure of Silky's, The Wall was ressurrected by whom?",
  answerA: "Jonty Bell",
  answerB: "Kevin Smets",
  answerC: "Christian Wiehl",
  answerD: "Rikus Kras",
  number: 43,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Whose idea was the original concept for Eggit?",
  answerA: "Rikus Kras",
  answerB: "Craig Jardine",
  answerC: "Lee Bamber",
  answerD: "Zack Fowler",
  number: 42,
  correctAnswer: "D",
  current: false
},
{
  prompt: "Craig Jardine made a Bomberman-style game called:",
  answerA: "Mega Mad Bomber",
  answerB: "In The Pit",
  answerC: "Bomber Bob",
  answerD: "Bomb Blaster",
  number: 41,
  correctAnswer: "A",
  current: false
},
{
  prompt: "Which of these is not a NastyMan game?",
  answerA: "The Strawberry Field",
  answerB: "Biomix",
  answerC: "Fruiteater Kachuka",
  answerD: "Elephant Trunk",
  number: 40,
  correctAnswer: "D",
  current: false
},
{
  prompt: "The star of this game by Zellix Industries looks like a white Kirby:",
  answerA: "LBC - Little Bobby Carter",
  answerB: "Funny Furries",
  answerC: "Mr. Malibus",
  answerD: "Locked",
  number: 39,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Shouting \"Take that, Romeo!\" is how this infamous Klik villain gloats over his victory:",
  answerA: "The Pie Devil",
  answerB: "Pug",
  answerC: "Nightstar",
  answerD: "Raphael Azcueta",
  number: 38,
  correctAnswer: "A",
  current: false
},
{
  prompt: "Which of the following was not an extension for any of the klik products?",
  answerA: "Fast Function",
  answerB: "Loop Calculator",
  answerC: "Advanced Math",
  answerD: "Direction Calculator",
  number: 37,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of the following was not a sample game included with Klik and Play?",
  answerA: "Hungry Hedgehogs",
  answerB: "Racing Line",
  answerC: "Critters",
  answerD: "Toyland",
  number: 36,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Which of the following K&P websites predates all of the others?",
  answerA: "Silky's",
  answerB: "The Daily Click",
  answerC: "Click Cafe",
  answerD: "The Games Page",
  number: 35,
  correctAnswer: "A",
  current: false
},
{
  prompt: "Raz is short for...",
  answerA: "Raz von Doy",
  answerB: "Raz.i.am",
  answerC: "Razmon",
  answerD: "Razmatan Iki",
  number: 34,
  correctAnswer: "D",
  current: false
},
{
  prompt: "Which of the following was not a Clickteam product?",
  answerA: "Vitalize",
  answerB: "Java Magic",
  answerC: "Install Maker",
  answerD: "SynchronX",
  number: 33,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of these is not a NastyMan game?",
  answerA: "Worm Party 2",
  answerB: "Puzzle Bubble Girl",
  answerC: "NastyMan Advance",
  answerD: "Occasional Bet",
  number: 32,
  correctAnswer: "A",
  current: false
},
{
  prompt: "What was Jamagic?",
  answerA: "A scripting-language based game creator with 3D support.",
  answerB: "A Click and Create extension for 3D games.",
  answerC: "An online community with a Windows app for web browsing and chatrooms.",
  answerD: "A plugin for running games in web browsers.",
  number: 31,
  correctAnswer: "A",
  current: false
},
{
  prompt: "Which of the following was a difference between TGF and CnC?",
  answerA: "TGF had a limit to the number of events in the Event Editor.",
  answerB: "CnC had more alterable values.",
  answerC: "TGF had a nag-screen popup after your game ended.",
  answerD: "CnC let you edit the icon in your game's About pop-up.",
  number: 30,
  correctAnswer: "C",
  current: false
},
{
  prompt: "What was Vitalize?",
  answerA: "A scripting-language based game creator with 3D support.",
  answerB: "A Click and Create extension for 3D games.",
  answerC: "An online community with a Windows app for web browsing and chatrooms.",
  answerD: "A plugin for running games in web browsers.",
  number: 29,
  correctAnswer: "D",
  current: false
},
{
  prompt: "Which of the following was not an extension for any of the klik products?",
  answerA: "Fast Loop",
  answerB: "MOO",
  answerC: "Advanced MIDI",
  answerD: "Mode 7 Ex",
  number: 28,
  correctAnswer: "C",
  current: false
},
{
  prompt: "What was AMOS/STOS?",
  answerA: "The computer language used to program K&P.",
  answerB: "An old kind of computer that K&P ran on before windows.",
  answerC: "A dialect of BASIC for the Amiga and Atari ST.",
  answerD: "A computer virus given to members of the community by ClanHorse.",
  number: 27,
  correctAnswer: "C",
  current: false
},
{
  prompt: "The K&P desktop icon had yellow text over a colored circle background.  What color was the background?",
  answerA: "Red",
  answerB: "Pink",
  answerC: "Green",
  answerD: "Purple",
  number: 26,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of the following was not a type of built-in object in K&P, TGF, or CnC?",
  answerA: "Platform object",
  answerB: "Static object",
  answerC: "Particle object",
  answerD: "Bouncing ball object",
  number: 25,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Who runs The Daily Click, longest running (and still surviving) klik site?",
  answerA: "Marcello Bastéa-Forte",
  answerB: "David Willis",
  answerC: "Michael Hall",
  answerD: "Craig Jardine",
  number: 24,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Who never existed?",
  answerA: "RPGer",
  answerB: "Frogster",
  answerC: "Smeech",
  answerD: "Ermac",
  number: 23,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Who started TIGSource, a popular hub for \"indie\" game developers?",
  answerA: "Spaceface",
  answerB: "Derek Yu",
  answerC: "Dave Lacey",
  answerD: "Kevin Smets",
  number: 22,
  correctAnswer: "B",
  current: false
},
{
  prompt: "What does Nim say during the SAAE intro?",
  answerA: "Augh! Why won't Active Object 1 bounce around the screen anymore?!",
  answerB: "Augh! If Nick doesn't finish SAAE soon I'm going to punch this man.",
  answerC: "Augh! Pick me! Pick me!",
  answerD: "Augh! Wang ching chowsocks.",
  number: 21,
  correctAnswer: "A",
  current: false
},
{
  prompt: "How do you make the little 3 in O3?",
  answerA: "Alt+3",
  answerB: "Alt+179",
  answerC: "Alt+0179",
  answerD: "Alt+03",
  number: 20,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Who never existed?",
  answerA: "TwiTerror",
  answerB: "YukonW",
  answerC: "SMeat",
  answerD: "NastyMan",
  number: 19,
  correctAnswer: "C",
  current: false
},
{
  prompt: "What game series was David Willis best known for?",
  answerA: "Eggit",
  answerB: "Walkerton",
  answerC: "In The Pit",
  answerD: "Critters",
  number: 18,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Who never existed?",
  answerA: "MasterM",
  answerB: "Sumez",
  answerC: "Inspider",
  answerD: "Yoshiman",
  number: 17,
  correctAnswer: "C",
  current: false
},
{
  prompt: "In the original K&P intro, a bunch of characters explode out of a ...",
  answerA: "Computer mouse",
  answerB: "K&P retail box",
  answerC: "Computer monitor",
  answerD: "Bouncing ball",
  number: 16,
  correctAnswer: "A",
  current: false
},
{
  prompt: "Which of these klik groups was started first?",
  answerA: "Fallen Angel",
  answerB: "Virtually Real",
  answerC: "O3",
  answerD: "Team Ultimate X",
  number: 15,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Oh-three, Oh-cubed or Oh-to-the-third-power?",
  answerA: "Oh-three",
  answerB: "Oh-cubed",
  answerC: "Oh-to-the-third-power",
  answerD: "No-one really knows",
  number: 14,
  correctAnswer: "D",
  current: false
},
{
  prompt: "Which of these is NOT a cheat in an O3 game?",
  answerA: "lowflyingcow",
  answerB: "wub",
  answerC: "fivehit",
  answerD: "toot",
  number: 13,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Who never existed?",
  answerA: "Darkstar",
  answerB: "TheRat",
  answerC: "Dogzer",
  answerD: "Netmonkey",
  number: 12,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of the following was not a sample game included with Klik and Play?",
  answerA: "Reversi",
  answerB: "Zeb",
  answerC: "Romeo",
  answerD: "Gracillia V",
  number: 11,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of these is not a NastyMan game?",
  answerA: "Pipeline Groove",
  answerB: "Attack Pear",
  answerC: "Eagle hunt",
  answerD: "Truball 2",
  number: 10,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Klik & Play was released in...",
  answerA: "1993",
  answerB: "1995",
  answerC: "1994",
  answerD: "1992",
  number: 9,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Destruction Carnival's main character is called...",
  answerA: "D.S.Lite",
  answerB: "D.S.Troy",
  answerC: "H.I.Doy",
  answerD: "D.S.Try",
  number: 8,
  correctAnswer: "B",
  current: false
},
{
  prompt: "What's Raz's favourite song ever?",
  answerA: "Sonic Running Out of Breath.mp3",
  answerB: "Philtanic.xm",
  answerC: "Beek - Spanish Flea.it",
  answerD: "ICQhorn.wav",
  number: 7,
  correctAnswer: "C",
  current: false
},
{
  prompt: "What was the top rated game on the Click Cafe?",
  answerA: "Destruction Carnival",
  answerB: "Factor X",
  answerC: "Efftoo",
  answerD: "Space Herdy",
  number: 6,
  correctAnswer: "D",
  current: false
},
{
  prompt: "How many different games are shown in our O3 Youtube video?",
  answerA: "54",
  answerB: "55",
  answerC: "52",
  answerD: "53",
  number: 5,
  correctAnswer: "D",
  current: false
},
{
  prompt: "How many O3 members appear in Super Awesome Adventure Extreme?",
  answerA: "4",
  answerB: "3",
  answerC: "2",
  answerD: "5",
  number: 4,
  correctAnswer: "A",
  current: false
},
{
  prompt: "Who said this: \"I;'m npt drunk\"?",
  answerA: "Raz",
  answerB: "Ben",
  answerC: "Nick",
  answerD: "Raph",
  number: 3,
  correctAnswer: "B",
  current: false
},
{
  prompt: "Which of these is not a NastyMan game?",
  answerA: "Fruit fly",
  answerB: "Bookworms",
  answerC: "Powerful Singing",
  answerD: "Yummy Cube",
  number: 2,
  correctAnswer: "C",
  current: false
},
{
  prompt: "Klik & Play Tonite was hosted by...",
  answerA: "Rikus Kras",
  answerB: "Izzy",
  answerC: "Kevin Smets",
  answerD: "Sean Poling",
  number: 1,
  correctAnswer: "C",
  current: false
}

  ];
  for (var i = 0; i < questions.length; i++) {
    Questions.insert(questions[i]);
  }
};
