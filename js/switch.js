const factionNames = ["Grass/Asian Faction", "Desert/Mediterranean Faction", "Tundra/European Faction"];
const initialImagePaths = [
    [
        ["images/Grass/Allie.jpg", "images/Grass/Allie Cat.png"],
        ["images/Grass/Nya.jpg", "images/Grass/Nya-Been.png"],
        ["images/Grass/Grass_Swordsman_2.png", "images/Grass/Grass_Swordsman_1.png"],
        ["images/Grass/Grass_Spearman_1.png", "images/Grass/Grass_Spearman_2.png"],
        ["images/Grass/Grass_Bowman_2.png", "images/Grass/Grass_Bowman_1.png"],
        ["images/Grass/Grass_Assassin_1.png", "images/Grass/Grass_Assassin_2.png"],
        ["images/Grass/Grass_Wizard_2.png", "images/Grass/Grass_Wizard_1.png"],
        ["images/Grass/Grass_Berserker_1.png", "images/Grass/Grass_Berserker_2.png"],
        ["images/Grass/Grass_Sorcerer_2.png", "images/Grass/Grass_Sorcerer_1.png"]
    ],
    [
        ["images/Desert/Sam.jpg", "images/Desert/Samba.png"],
        ["images/Desert/Sib.jpg", "images/Desert/Sibil.png"],
        ["images/Desert/Desert_Swordsman_1.png", "images/Desert/Desert_Swordsman_2.png"],
        ["images/Desert/Desert_Spearman_2.png", "images/Desert/Desert_Spearman_1.png"],
        ["images/Desert/Desert_Bowman_1.png", "images/Desert/Desert_Bowman_2.png"],
        ["images/Desert/Desert_Assassin_2.png", "images/Desert/Desert_Assassin_1.png"],
        ["images/Desert/Desert_Wizard_1.png", "images/Desert/Desert_Wizard_2.png"],
        ["images/Desert/Desert_Berserker_2.png", "images/Desert/Desert_Berserker_1.png"],
        ["images/Desert/Desert_Sorcerer_1.png", "images/Desert/Desert_Sorcerer_2.png"]
    ],
    [
        ["images/Tundra/JR.jpg", "images/Tundra/JR.png"],
        ["images/Tundra/Emmie.jpg", "images/Tundra/Emmie.png"],
        ["images/Tundra/Tundra_Swordsman_1.png", "images/Tundra/Tundra_Swordsman_2.png"],
        ["images/Tundra/Tundra_Spearman_2.png", "images/Tundra/Tundra_Spearman_1.png"],
        ["images/Tundra/Tundra_Bowman_1.png", "images/Tundra/Tundra_Bowman_2.png"],
        ["images/Tundra/Tundra_Assassin_2.png", "images/Tundra/Tundra_Assassin_1.png"],
        ["images/Tundra/Tundra_Wizard_1.png", "images/Tundra/Tundra_Wizard_2.png"],
        ["images/Tundra/Tundra_Berserker_2.png", "images/Tundra/Tundra_Berserker_1.png"],
        ["images/Tundra/Tundra_Sorcerer_2.png", "images/Tundra/Tundra_Sorcerer_1.png"]
    ]
];

let currentFactionIndex = 0; // Initial index

function changeFaction(direction) {
    if (direction === "right") {
        currentFactionIndex = (currentFactionIndex + 1) % factionNames.length;
    } else if (direction === "left") {
        currentFactionIndex = (currentFactionIndex - 1 + factionNames.length) % factionNames.length;
    }

    const factionNameElement = document.getElementById("game_name");
    factionNameElement.textContent = factionNames[currentFactionIndex];

    // Get the array of initial image paths for the current faction
    const factionPaths = initialImagePaths[currentFactionIndex];

    // Get all card-front and card-back elements
    const cardFronts = document.querySelectorAll(".card-front img");
    const cardBacks = document.querySelectorAll(".card-back img");

    // Update card-front images
    cardFronts.forEach((front, index) => {
        front.src = factionPaths[index][0];
    });

    // Update card-back images
    cardBacks.forEach((back, index) => {
        back.src = factionPaths[index][1];
    });
}

document.getElementById("left_arrow").addEventListener("click", function () {
    changeFaction("left");
});

document.getElementById("right_arrow").addEventListener("click", function () {
    changeFaction("right");
});

function flipCard(element) {
    element.classList.toggle("flipped");
}