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
let currentFactionIndex = 0;
function changeFaction(direction) {
    if (direction === "right") {
        currentFactionIndex = (currentFactionIndex + 1) % factionNames.length;
    } else if (direction === "left") {
        currentFactionIndex = (currentFactionIndex - 1 + factionNames.length) % factionNames.length;
    }
    const factionNameElement = document.getElementById("game_name");
    factionNameElement.textContent = factionNames[currentFactionIndex];

    const factionPaths = initialImagePaths[currentFactionIndex];
 
    const cardFronts = document.querySelectorAll(".card-front img");
    const cardBacks = document.querySelectorAll(".card-back img");
   
    cardFronts.forEach((front, index) => {
        front.src = factionPaths[index][0];
    });

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
let currentMapIndex = 0;

function changeMap(direction) {
    const mapElement = document.getElementById("map");
    const map2Element = document.getElementById("map2");
    const map3Element = document.getElementById("map3");
    const captionElement = document.getElementById("map_caption");

    if (direction === "right") {
        currentMapIndex = (currentMapIndex + 1) % 3;
    } else if (direction === "left") {
        currentMapIndex = (currentMapIndex - 1 + 3) % 3;
    }

    mapElement.style.display = "none";
    map2Element.style.display = "none";
    map3Element.style.display = "none";

    if (currentMapIndex === 0) {
        mapElement.style.display = "block";
    } else if (currentMapIndex === 1) {
        map2Element.style.display = "block";
    } else if (currentMapIndex === 2) {
        map3Element.style.display = "block";
    }

    if (currentMapIndex === 0) {
        captionElement.textContent = "Beginner";
    } else if (currentMapIndex === 1) {
        captionElement.textContent = "Intermediate";
    } else if (currentMapIndex === 2) {
        captionElement.textContent = "Advanced";
    }
}

document.getElementById("left_arrow").addEventListener("click", function () {
    changeMap("left");
});

document.getElementById("right_arrow").addEventListener("click", function () {
    changeMap("right");
});