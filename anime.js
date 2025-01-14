// The questions
const questions = [
    { stage: 'easy', question: "This anime is about a boy who becomes the Pirate King.", options: ["Naruto", "One Piece", "Bleach", "Dragon Ball"], answer: "One Piece" },
    { stage: 'easy', question: "This anime features ninjas from the Hidden Leaf Village.", options: ["Naruto", "One Piece", "Bleach", "Dragon Ball"], answer: "Naruto" },
    { stage: 'easy', question: "This anime involves Death Notes and Shinigami.", options: ["One Piece", "Bleach", "Death Note", "Dragon Ball"], answer: "Death Note" },
    { stage: 'easy', question: "This anime is about hunters taking on dangerous quests.", options: ["Naruto", "Hunter x Hunter", "Bleach", "One Piece"], answer: "Hunter x Hunter" },
    { stage: 'easy', question: "This anime features a boy who turns into a Titan.", options: ["Attack on Titan", "Naruto", "One Piece", "Bleach"], answer: "Attack on Titan" },
    { stage: 'easy', question: "This anime is about a group of pirates with unique abilities.", options: ["One Piece", "Naruto", "Dragon Ball", "Bleach"], answer: "One Piece" },
    { stage: 'easy', question: "This anime involves a boy training to become the strongest ninja.", options: ["Naruto", "One Piece", "Dragon Ball", "Bleach"], answer: "Naruto" },
    { stage: 'easy', question: "This anime takes place in a world where everyone has superpowers.", options: ["My Hero Academia", "Naruto", "One Piece", "Bleach"], answer: "My Hero Academia" },
    { stage: 'easy', question: "This anime features a boy who uses a giant sword to fight demons.", options: ["Demon Slayer", "Naruto", "One Piece", "Bleach"], answer: "Demon Slayer" },
    { stage: 'easy', question: "This anime involves the battle between Soul Reapers and Hollows.", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: "Bleach" },
    { stage: 'easy', question: "This anime features a group of pirates who explore the Grand Line.", options: ["One Piece", "Naruto", "Dragon Ball", "Bleach"], answer: "One Piece" },
    { stage: 'easy', question: "This anime involves a mysterious notebook that can kill anyone.", options: ["Death Note", "Naruto", "Bleach", "Dragon Ball"], answer: "Death Note" },
    { stage: 'easy', question: "This anime features a boy who can summon powerful monsters.", options: ["Naruto", "One Piece", "Bleach", "Pokémon"], answer: "Pokémon" },
    { stage: 'easy', question: "This anime features a boy who trains to fight in the World Martial Arts Tournament.", options: ["Dragon Ball", "Naruto", "One Piece", "Bleach"], answer: "Dragon Ball" },
    { stage: 'easy', question: "This anime is about a boy who is the reincarnation of a powerful shinobi.", options: ["Boruto", "Naruto", "One Piece", "Bleach"], answer: "Naruto" },
    { stage: 'easy', question: "This anime involves a giant robot fighting monsters.", options: ["Neon Genesis Evangelion", "Naruto", "One Piece", "Bleach"], answer: "Neon Genesis Evangelion" },
    { stage: 'easy', question: "This anime features a boy with the ability to see spirits.", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: "Bleach" },
    { stage: 'easy', question: "This anime is about a detective who fights crime with his powers.", options: ["Death Note", "Naruto", "Bleach", "One Piece"], answer: "Death Note" },
    { stage: 'easy', question: "This anime involves high school students with supernatural powers.", options: ["Blue Exorcist", "Naruto", "One Piece", "Bleach"], answer: "Blue Exorcist" },
    { stage: 'easy', question: "This anime features a boy who gains the power to control fire.", options: ["Fire Force", "Naruto", "One Piece", "Bleach"], answer: "Fire Force" },
    { stage: 'easy', question: "This anime follows the adventures of a boy with a rubber body.", options: ["One Piece", "Naruto", "Dragon Ball", "Bleach"], answer: "One Piece" },
    { stage: 'easy', question: "This anime features a boy with psychic powers who tries to live a normal life.", options: ["Mob Psycho 100", "Haikyuu!!", "Fairy Tail", "One Piece"], answer: "Mob Psycho 100" },
    { stage: 'easy', question: "This anime involves a magical notebook that causes death.", options: ["Death Note", "Attack on Titan", "Blue Exorcist", "Sword Art Online"], answer: "Death Note" },
    { stage: 'easy', question: "This anime follows the adventures of a boy and his electric mouse companion.", options: ["Pokémon", "Yu-Gi-Oh!", "One Piece", "Fairy Tail"], answer: "Pokémon" },
    { stage: 'easy', question: "This anime follows students training to be professional heroes.", options: ["My Hero Academia", "Demon Slayer", "Black Clover", "Sword Art Online"], answer: "My Hero Academia" },
    { stage: 'easy', question: "This anime is about a boy with a rubber body who wants to find a treasure.", options: ["One Piece", "Hunter x Hunter", "Fairy Tail", "Dragon Ball Z"], answer: "One Piece" },
    { stage: 'easy', question: "This anime features a volleyball team aiming to win nationals.", options: ["Haikyuu!!", "Kuroko's Basketball", "Attack on Titan", "Blue Exorcist"], answer: "Haikyuu!!" },
    { stage: 'easy', question: "This anime is about a girl who is chosen to fight evil with her magical powers.", options: ["Sailor Moon", "Cardcaptor Sakura", "Bleach", "Yu Yu Hakusho"], answer: "Sailor Moon" },
    { stage: 'easy', question: "This anime features two brothers searching for the Philosopher's Stone.", options: ["Fullmetal Alchemist", "Naruto", "Attack on Titan", "Blue Exorcist"], answer: "Fullmetal Alchemist" },
    { stage: 'easy', question: "This anime follows players trapped in a virtual reality game.", options: ["Sword Art Online", "My Hero Academia", "Demon Slayer", "Dragon Ball Z"], answer: "Sword Art Online" },
    { stage: 'easy', question: "This anime involves a boy trying to protect his demon-turned sister.", options: ["Demon Slayer", "Attack on Titan", "Hunter x Hunter", "Naruto"], answer: "Demon Slayer" },
    { stage: 'easy', question: "This anime follows duels with monsters summoned from cards.", options: ["Yu-Gi-Oh!", "Digimon", "Pokémon", "Fairy Tail"], answer: "Yu-Gi-Oh!" },
    { stage: 'easy', question: "This anime is about a group of friends exploring a virtual fantasy world.", options: ["Sword Art Online", "Blue Exorcist", "Fairy Tail", "Hunter x Hunter"], answer: "Sword Art Online" },
    { stage: 'easy', question: "This anime involves a boy training to become the Wizard King.", options: ["Black Clover", "Blue Exorcist", "Naruto", "One Piece"], answer: "Black Clover" },
    { stage: 'easy', question: "This anime features students fighting curses in modern-day Japan.", options: ["Jujutsu Kaisen", "Bleach", "Fairy Tail", "Attack on Titan"], answer: "Jujutsu Kaisen" },
    { stage: 'easy', question: "This anime is about a girl hunting for her lost memories and delivering letters.", options: ["Violet Evergarden", "Cardcaptor Sakura", "Fruits Basket", "Sailor Moon"], answer: "Violet Evergarden" },
    { stage: 'easy', question: "This anime follows a boy with a massive appetite and incredible cooking skills.", options: ["Food Wars", "Naruto", "Hunter x Hunter", "One Piece"], answer: "Food Wars" },
    { stage: 'easy', question: "This anime features children learning alchemy to bring back their mother.", options: ["Fullmetal Alchemist", "Attack on Titan", "Fairy Tail", "Demon Slayer"], answer: "Fullmetal Alchemist" },
    { stage: 'easy', question: "This anime follows a young boy training to be the next Hokage.", options: ["Naruto", "One Piece", "Bleach", "Jujutsu Kaisen"], answer: "Naruto" },
    { stage: 'easy', question: "This anime features a guild of wizards fighting against evil forces.", options: ["Fairy Tail", "Black Clover", "Bleach", "Blue Exorcist"], answer: "Fairy Tail" },
    { stage: 'easy', question: "This anime involves a boy with amazing basketball skills joining a weak team.", options: ["Kuroko's Basketball", "Haikyuu!!", "Blue Lock", "Food Wars"], answer: "Kuroko's Basketball" },


    { stage: 'normal', question: "What is the name of the main character in 'Tokyo Ghoul'?", options: ["Kaneki Ken", "Levi Ackerman", "Eren Yeager", "Sasuke Uchiha"], answer: "Kaneki Ken" },
    { stage: 'normal', question: "In 'Fullmetal Alchemist', what is the ultimate taboo of alchemy?", options: ["Creating gold", "Human transmutation", "Using Philosopher's Stones", "Time travel"], answer: "Human transmutation" },
    { stage: 'normal', question: "What is the name of Luffy's first crewmate in 'One Piece'?", options: ["Zoro", "Sanji", "Usopp", "Nami"], answer: "Zoro" },
    { stage: 'normal', question: "Which anime features a high school boy who becomes Kira?", options: ["Death Note", "Code Geass", "Steins;Gate", "Erased"], answer: "Death Note" },
    { stage: 'normal', question: "What is the name of Goku's Saiyan rival in 'Dragon Ball Z'?", options: ["Vegeta", "Broly", "Raditz", "Nappa"], answer: "Vegeta" },
    { stage: 'normal', question: "In 'Naruto', what is the name of the nine-tailed fox sealed inside him?", options: ["Kurama", "Shukaku", "Gyuki", "Son Goku"], answer: "Kurama" },
    { stage: 'normal', question: "Which anime is about students competing to become the God of High School?", options: ["The God of High School", "Baki", "Kengan Ashura", "Attack on Titan"], answer: "The God of High School" },
    { stage: 'normal', question: "In 'Attack on Titan', who is the Armored Titan?", options: ["Reiner Braun", "Bertholdt Hoover", "Eren Yeager", "Zeke Yeager"], answer: "Reiner Braun" },
    { stage: 'normal', question: "What kind of creature is Totoro in 'My Neighbor Totoro'?", options: ["Forest spirit", "Demon", "Cat", "Bear"], answer: "Forest spirit" },
    { stage: 'normal', question: "What guild does Natsu belong to in 'Fairy Tail'?", options: ["Fairy Tail", "Sabertooth", "Blue Pegasus", "Phantom Lord"], answer: "Fairy Tail" },
    { stage: 'normal', question: "In 'Bleach', what is the name of Ichigo's sword?", options: ["Zangetsu", "Senbonzakura", "Tensa Zangetsu", "Ryujin Jakka"], answer: "Zangetsu" },
    { stage: 'normal', question: "What is Edward Elric's younger brother's name in 'Fullmetal Alchemist'?", options: ["Alphonse", "Roy", "Hohenheim", "Ling"], answer: "Alphonse" },
    { stage: 'normal', question: "Which anime features a group called the Phantom Troupe?", options: ["Hunter x Hunter", "Naruto", "One Piece", "Bleach"], answer: "Hunter x Hunter" },
    { stage: 'normal', question: "Who is the main antagonist in the 'Demon Slayer: Mugen Train' movie?", options: ["Enmu", "Akaza", "Muzan Kibutsuji", "Rui"], answer: "Enmu" },
    { stage: 'normal', question: "In 'Sword Art Online', what is the name of the first VRMMORPG?", options: ["Sword Art Online", "Alfheim Online", "Gun Gale Online", "Underworld"], answer: "Sword Art Online" },
    { stage: 'normal', question: "Which anime features Lelouch Lamperouge as the main character?", options: ["Code Geass", "Death Note", "Steins;Gate", "Black Butler"], answer: "Code Geass" },
    { stage: 'normal', question: "What is the name of the elite police force in 'Psycho-Pass'?", options: ["The MWPSB", "The Enforcers", "Section 9", "Division 7"], answer: "The MWPSB" },
    { stage: 'normal', question: "In 'JoJo's Bizarre Adventure', what is Jotaro's Stand called?", options: ["Star Platinum", "The World", "Crazy Diamond", "King Crimson"], answer: "Star Platinum" },
    { stage: 'normal', question: "What is the main character's goal in 'Black Clover'?", options: ["To become the Wizard King", "To find the Philosopher's Stone", "To reclaim Wall Maria", "To defeat the Dark Triad"], answer: "To become the Wizard King" },
    { stage: 'normal', question: "In 'Steins;Gate', what is the name of the time-traveling microwave?", options: ["Phone Microwave", "Time Machine", "Future Gadget", "Time Leap Device"], answer: "Phone Microwave" },
    { stage: 'normal', question: "What is the name of the world where 'Sword Art Online: Alicization' takes place?", options: ["Underworld", "Alfheim", "Aincrad", "Gun Gale"], answer: "Underworld" },
    { stage: 'normal', question: "In 'Tokyo Revengers', what is Takemichi's goal?", options: ["To save Hinata", "To become a gang leader", "To fight Kisaki", "To protect his friends"], answer: "To save Hinata" },
    { stage: 'normal', question: "What is the name of the organization in 'Naruto' that seeks to capture the Tailed Beasts?", options: ["Akatsuki", "Anbu", "Konoha 11", "Otsutsuki Clan"], answer: "Akatsuki" },
    { stage: 'normal', question: "In 'Attack on Titan', who is the Colossal Titan?", options: ["Bertholdt Hoover", "Reiner Braun", "Zeke Yeager", "Eren Yeager"], answer: "Bertholdt Hoover" },
    { stage: 'normal', question: "Which anime features Gon Freecss searching for his father?", options: ["Hunter x Hunter", "Naruto", "One Piece", "Bleach"], answer: "Hunter x Hunter" },
    { stage: 'normal', question: "In 'One Piece', what is the name of Luffy's ship?", options: ["Thousand Sunny", "Going Merry", "Red Force", "Moby Dick"], answer: "Thousand Sunny" },
    { stage: 'normal', question: "What is the special ability of Light Yagami's Death Note?", options: ["Kills anyone whose name is written in it", "Summons Shinigami", "Stops time", "Allows time travel"], answer: "Kills anyone whose name is written in it" },
    { stage: 'normal', question: "What is the name of the school in 'My Hero Academia'?", options: ["UA High School", "Hero Academy", "Shiketsu High", "Hosu Academy"], answer: "UA High School" },
    { stage: 'normal', question: "In 'Demon Slayer', what is the name of Tanjiro's sword style?", options: ["Water Breathing", "Thunder Breathing", "Flame Breathing", "Beast Breathing"], answer: "Water Breathing" },
    { stage: 'normal', question: "What is the name of the mysterious king in 'Fate/Zero'?", options: ["Gilgamesh", "Saber", "Archer", "Lancer"], answer: "Gilgamesh" },
    { stage: 'normal', question: "Which anime features the survey corps?", options: ["Attack on Titan", "Code Geass", "Bleach", "Fullmetal Alchemist"], answer: "Attack on Titan" },
    { stage: 'normal', question: "In 'Jujutsu Kaisen', what is Yuji's cursed spirit called?", options: ["Sukuna", "Gojo", "Mahito", "Megumi"], answer: "Sukuna" },
    { stage: 'normal', question: "What is the name of Edward and Alphonse's teacher in 'Fullmetal Alchemist'?", options: ["Izumi Curtis", "Riza Hawkeye", "Lust", "Winry Rockbell"], answer: "Izumi Curtis" },
    { stage: 'normal', question: "Which anime revolves around two children building a mecha called 'Big O'?", options: ["The Big O", "Gurren Lagann", "Neon Genesis Evangelion", "Code Geass"], answer: "The Big O" },
    { stage: 'normal', question: "What is the name of the vampire queen in 'Hellsing'?", options: ["Integra Hellsing", "Seras Victoria", "Alucard", "Mina Harker"], answer: "Integra Hellsing" },
    { stage: 'normal', question: "In 'Fairy Tail', what is Erza's special magic ability?", options: ["Requip: The Knight", "Dragon Slayer Magic", "Celestial Magic", "Titan Slayer Magic"], answer: "Requip: The Knight" },
    { stage: 'normal', question: "What is the name of the cyborg in 'Ghost in the Shell'?", options: ["Major Kusanagi", "Batou", "Togusa", "Aramaki"], answer: "Major Kusanagi" },
    { stage: 'normal', question: "Which anime features a deadly exam called the 'Chunin Exam'?", options: ["Naruto", "Hunter x Hunter", "Dragon Ball", "Bleach"], answer: "Naruto" },
    { stage: 'normal', question: "What is the name of the energy technique used in 'Dragon Ball'?", options: ["Ki", "Haki", "Mana", "Nen"], answer: "Ki" },
    { stage: 'normal', question: "What is the name of the large mecha in 'Neon Genesis Evangelion'?", options: ["Evangelion", "Zaku", "Gunbuster", "Mazinger"], answer: "Evangelion" },









    { stage: 'hard', question: "What is the name of Luffy's sword-fighting crewmate?", options: ["Zoro", "Sanji", "Usopp", "Chopper"], answer: "Zoro" },
    { stage: 'hard', question: "What is the ability of the Sharingan?", options: ["Copy techniques", "Fly", "Create fire", "Teleport"], answer: "Copy techniques" },
    { stage: 'hard', question: "Who is known as the 'Symbol of Peace' in My Hero Academia?", options: ["Deku", "All Might", "Bakugo", "Endeavor"], answer: "All Might" },
    { stage: 'hard', question: "Who is the Captain of Squad 6 in Bleach?", options: ["Byakuya", "Renji", "Kenpachi", "Toshiro"], answer: "Byakuya" },
    { stage: 'hard', question: "What is the main currency in One Piece?", options: ["Gold", "Berries", "Yen", "Ryo"], answer: "Berries" },
    { stage: 'hard', question: "Who is the most powerful character in Bleach?", options: ["Ichigo", "Aizen", "Kenpachi", "Rukia"], answer: "Aizen" },
    { stage: 'hard', question: "What is Naruto's strongest form?", options: ["Sage Mode", "Nine Tails Chakra Mode", "Rinnegan", "Mangekyo Sharingan"], answer: "Nine Tails Chakra Mode" },
    { stage: 'hard', question: "What is Goku's ultimate transformation?", options: ["Super Saiyan", "Super Saiyan God", "Ultra Instinct", "Super Saiyan Blue"], answer: "Ultra Instinct" },
    { stage: 'hard', question: "What is the true identity of the Beast Titan in Attack on Titan?", options: ["Zeke Yeager", "Eren Yeager", "Reiner Braun", "Levi Ackerman"], answer: "Zeke Yeager" },
    { stage: 'hard', question: "In Death Note, what is L's real name?", options: ["Lawliet", "Light", "Ryuzaki", "Watari"], answer: "Lawliet" },
    { stage: 'hard', question: "What is the final form of Madara Uchiha's power in Naruto?", options: ["Ten Tails Jinchuriki", "Rinnegan", "Mangekyo Sharingan", "Sage of Six Paths"], answer: "Ten Tails Jinchuriki" },
    { stage: 'hard', question: "In Hunter x Hunter, what Nen type does Killua belong to?", options: ["Enhancement", "Emission", "Transmutation", "Conjuration"], answer: "Transmutation" },
    { stage: 'hard', question: "In Fullmetal Alchemist: Brotherhood, who is the youngest Homunculus?", options: ["Pride", "Envy", "Wrath", "Gluttony"], answer: "Pride" },
    { stage: 'hard', question: "What is the name of the forbidden spell used by Julius Novachrono in Black Clover?", options: ["Chrono Anastasis", "Time Bind", "Mana Zone", "Eternal Clock"], answer: "Chrono Anastasis" },
    { stage: 'hard', question: "In Jujutsu Kaisen, what is Sukuna's full title?", options: ["King of Curses", "Demon God", "Curse Emperor", "Spirit Overlord"], answer: "King of Curses" },
    { stage: 'hard', question: "In Demon Slayer, who is the creator of the Sun Breathing technique?", options: ["Yoriichi Tsugikuni", "Tanjiro Kamado", "Muzan Kibutsuji", "Kokushibo"], answer: "Yoriichi Tsugikuni" },
    { stage: 'hard', question: "In One Punch Man, what is the true rank of King among the S-Class heroes?", options: ["7th", "1st", "10th", "5th"], answer: "7th" },
    { stage: 'hard', question: "In Code Geass, what does the Geass power of Lelouch allow him to do?", options: ["Control minds", "See the future", "Enhance strength", "Teleport"], answer: "Control minds" },
    { stage: 'hard', question: "In Fairy Tail, what is the name of the dragon who raised Natsu?", options: ["Igneel", "Acnologia", "Metalicana", "Atlas Flame"], answer: "Igneel" },
    { stage: 'hard', question: "In Sword Art Online, what is the name of the 100th-floor boss in Aincrad?", options: ["Heathcliff", "An Incarnation of the Radius", "The Skull Reaper", "Kayaba Akihiko"], answer: "Heathcliff" },
    { stage: 'hard', question: "What is the name of the technique used by Gojo Satoru to activate his Domain Expansion in Jujutsu Kaisen?", options: ["Infinite Void", "Limitless", "Purple Hollow", "Six Eyes"], answer: "Infinite Void" },
    { stage: 'hard', question: "In Attack on Titan, what is the name of the serum used to transform someone into a Titan?", options: ["Titan Serum", "Pure Titan Formula", "Titan Injection", "Warrior Solution"], answer: "Titan Serum" },
    { stage: 'hard', question: "In Naruto, what is the name of the sage who originally wielded the Rinnegan?", options: ["Hagoromo Otsutsuki", "Indra Otsutsuki", "Ashura Otsutsuki", "Kaguya Otsutsuki"], answer: "Hagoromo Otsutsuki" },
    { stage: 'hard', question: "What is the true purpose of the Holy Grail in Fate/stay night?", options: ["Grant wishes", "Summon the Root", "Destroy the world", "Hold infinite mana"], answer: "Summon the Root" },
    { stage: 'hard', question: "In Bleach, what is the name of Ichigo's final form during the Thousand-Year Blood War?", options: ["True Bankai", "Hollow Bankai", "Mugetsu", "Zangetsu Fusion"], answer: "True Bankai" },
    { stage: 'hard', question: "In One Piece, who was the first character revealed to have used Haki?", options: ["Shanks", "Rayleigh", "Garp", "Whitebeard"], answer: "Shanks" },
    { stage: 'hard', question: "In Hunter x Hunter, what is the condition Kurapika must fulfill to use his Chain Jail ability?", options: ["Only used on Spiders", "Sacrifice aura", "Use Nen restriction", "Sacrifice lifespan"], answer: "Only used on Spiders" },
    { stage: 'hard', question: "In Demon Slayer, what does Muzan Kibutsuji fear the most?", options: ["The Sun", "The Demon Slayer Corps", "The Black Nichirin Sword", "Yoriichi's Earrings"], answer: "The Sun" },
    { stage: 'hard', question: "In My Hero Academia, what is the name of the quirk that All For One used to steal powers?", options: ["All For One", "Quirk Stealing", "Ability Absorption", "Power Grasp"], answer: "All For One" },
    { stage: 'hard', question: "In Steins;Gate, what is the name of the organization Okabe claims is after him?", options: ["SERN", "The Committee of 300", "Round Table Foundation", "The Organization"], answer: "SERN" },
    { stage: 'hard', question: "In Fullmetal Alchemist: Brotherhood, what is Truth often referred to as?", options: ["The World", "God", "The Gatekeeper", "The Universe"], answer: "God" },
    { stage: 'hard', question: "In Neon Genesis Evangelion, what is the origin of the Angels?", options: ["Adam", "Lilith", "Human Instrumentality Project", "SEELE"], answer: "Adam" },
    { stage: 'hard', question: "In Code Geass, what is the name of the operation led by Lelouch to overthrow Britannia?", options: ["Zero Requiem", "Black Knights", "Operation Ragnarok", "Rebellion of Pendragon"], answer: "Zero Requiem" },
    { stage: 'hard', question: "In Black Clover, what is the demon's name inside Asta's grimoire?", options: ["Liebe", "Zagred", "Lucifero", "Megicula"], answer: "Liebe" },
    { stage: 'hard', question: "In Fairy Tail, what type of Dragon Slayer Magic does Wendy Marvell use?", options: ["Sky Dragon Slayer", "Water Dragon Slayer", "Wind Dragon Slayer", "Healing Dragon Slayer"], answer: "Sky Dragon Slayer" },
    { stage: 'hard', question: "In JoJo's Bizarre Adventure, what is the name of Dio's Stand?", options: ["The World", "Star Platinum", "King Crimson", "Killer Queen"], answer: "The World" },
    { stage: 'hard', question: "In Re:Zero, how does Subaru gain the ability to 'Return by Death'?", options: ["Blessed by the Witch of Envy", "Cursed by Beatrice", "Made a contract with Roswaal", "Sacrificed his lifespan"], answer: "Blessed by the Witch of Envy" },
    { stage: 'hard', question: "In Tokyo Ghoul, what is the name of the CCG's special weapons?", options: ["Quinques", "Kagune", "RC Scanners", "Kakuja"], answer: "Quinques" },
    { stage: 'hard', question: "In Sword Art Online, who created the NerveGear system?", options: ["Akihiko Kayaba", "Sugou Nobuyuki", "Kikuoka Seijirou", "Shigemura Tetsuhiro"], answer: "Akihiko Kayaba" },
    { stage: 'hard', question: "In Vinland Saga, who is the historical figure Thorfinn is loosely based on?", options: ["Thorfinn Karlsefni", "Leif Erikson", "Canute the Great", "Egil Skallagrimsson"], answer: "Thorfinn Karlsefni" }
];

// Declare necessary variables
let currentQuestionIndex = 0; 
let score = 0;
let stage = "easy";
let timer;
let timeLeft = 60;

const designs = ["design-1", "design-2", "design-3", "design-4", "design-5"];

// Initialize the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    stage = "easy";
    loadStageQuestions(); // Load questions for the easy stage
}

// Load questions based on the current stage
function loadStageQuestions() {
    const questionSet = questions
        .filter(q => q.stage === stage) // Filter questions by stage
        .sort(() => Math.random() - 0.5) // Shuffle questions
        .slice(0, 5); // Get top 5 questions for the stage
    currentQuestionIndex = 0;
    loadQuestion(questionSet); // Load the first question
}

// Load a single question
function loadQuestion(questionSet) {
    if (currentQuestionIndex >= questionSet.length) {
        stageTransition(); // Transition to the next stage if no more questions
        return;
    }
    const questionData = questionSet[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question; // Display question
    const questionContainer = document.getElementById("question-container");
    const randomDesign = designs[Math.floor(Math.random() * designs.length)]; // Randomly choose a design
    questionContainer.className = `design ${randomDesign}`; // Apply design class

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, questionSet); // Check answer when clicked
        optionsContainer.appendChild(button);
    });

    timeLeft = 60; // Reset timer
    clearInterval(timer); 
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`; // Update timer
        if (timeLeft <= 0) timeOver(); // Call timeOver function if time runs out
    }, 1000);
}

// Check the selected answer and proceed
function checkAnswer(selected, questionSet) {
    const questionData = questionSet[currentQuestionIndex];
    if (selected === questionData.answer) { // Correct answer
        score += 1000;
        document.getElementById("score").textContent = `Berries: ${score}`;
        currentQuestionIndex++;
        loadQuestion(questionSet); // Load next question
    } else { // Incorrect answer
        gameOver(); // End the game if the answer is wrong
    }
}

// Transition to the next stage
function stageTransition() {
    if (stage === "easy") {
        stage = "normal";
    } else if (stage === "normal") {
        stage = "hard";
    } else {
        finishQuiz(); // End the quiz if all stages are completed
        return;
    }
    loadStageQuestions(); // Load next stage questions
}

// Handle the case when time runs out
function timeOver() {
    clearInterval(timer); // Stop the timer
    document.getElementById("final-score").textContent = `Time Over! You scored ${score} Berries!`;
    score = 0; // Reset score
    document.getElementById("score").textContent = `Berries: ${score}`; 
    document.getElementById("quiz-section").style.display = "none"; // Hide quiz section
    document.getElementById("result-section").style.display = "block"; // Show result section
}

// Handle the case when the game is over
function gameOver() {
    clearInterval(timer); // Stop the timer
    document.getElementById("final-score").textContent = `Game Over! You scored ${score} Berries!`;
    score = 0; // Reset score
    document.getElementById("score").textContent = `Berries: ${score}`; 
    document.getElementById("quiz-section").style.display = "none"; // Hide quiz section
    document.getElementById("result-section").style.display = "block"; // Show result section
}

// Finish the quiz and display the result
function finishQuiz() {
    clearInterval(timer); // Stop the timer
    document.getElementById("quiz-section").style.display = "none"; // Hide quiz section
    document.getElementById("result-section").style.display = "block"; // Show result section
    document.getElementById("final-score").textContent = `You finished the quiz! You scored ${score} Berries! You Won!!!`;
}

// Restart the quiz
function restartQuiz() {
    score = 0; 
    document.getElementById("score").textContent = `Berries: ${score}`;
    document.getElementById("quiz-section").style.display = "block"; // Show quiz section
    document.getElementById("result-section").style.display = "none"; // Hide result section
    timeLeft = 60; // Reset timer
    clearInterval(timer);

    startQuiz(); // Restart the quiz
}

// Initialize the quiz when the page loads
window.onload = startQuiz;
