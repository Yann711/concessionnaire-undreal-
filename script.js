/* ================================
   UNDREAL – Catalogue Véhicules
   Script principal
   ================================ */

// ---------- LANGUES ----------
let currentLang = "fr";

const translations = {
    fr: {
        subtitle: "Catalogue Véhicules",
        creators: "Créateurs"
    },
    en: {
        subtitle: "Vehicle Catalogue",
        creators: "Creators"
    },
    es: {
        subtitle: "Catálogo de Vehículos",
        creators: "Creadores"
    }
};

function setLang(lang) {
    currentLang = lang;
    const subtitle = document.getElementById("subtitle");
    const creators = document.getElementById("creators");

    if (subtitle) subtitle.textContent = translations[lang].subtitle;
    if (creators) creators.textContent = translations[lang].creators;
}

// ---------- DONNÉES VÉHICULES ----------
const vehicles = {
    "Supercars": [
        { name: "Adder", img: "https://static.wikia.nocookie.net/gtawiki/images/3/3a/Adder-GTAV.png" },
        { name: "Zentorno", img: "https://static.wikia.nocookie.net/gtawiki/images/6/69/Zentorno-GTAV.png" },
        { name: "T20", img: "https://static.wikia.nocookie.net/gtawiki/images/0/02/T20-GTAV.png" },
        { name: "Entity XF", img: "https://static.wikia.nocookie.net/gtawiki/images/5/5d/EntityXF-GTAV.png" }
    ],

    "Sportives": [
        { name: "Elegy RH8", img: "https://static.wikia.nocookie.net/gtawiki/images/0/0d/ElegyRH8-GTAV.png" },
        { name: "Jester", img: "https://static.wikia.nocookie.net/gtawiki/images/4/4b/Jester-GTAV.png" },
        { name: "Kuruma", img: "https://static.wikia.nocookie.net/gtawiki/images/8/86/Kuruma-GTAV.png" },
        { name: "Sultan", img: "https://static.wikia.nocookie.net/gtawiki/images/2/2e/Sultan-GTAV.png" }
    ],

    "Muscle": [
        { name: "Dominator", img: "https://static.wikia.nocookie.net/gtawiki/images/7/7a/Dominator-GTAV.png" },
        { name: "Gauntlet", img: "https://static.wikia.nocookie.net/gtawiki/images/0/05/Gauntlet-GTAV.png" },
        { name: "Buffalo", img: "https://static.wikia.nocookie.net/gtawiki/images/1/1f/Buffalo-GTAV.png" }
    ],

    "SUV": [
        { name: "Baller", img: "https://static.wikia.nocookie.net/gtawiki/images/4/4c/Baller-GTAV.png" },
        { name: "Cavalcade", img: "https://static.wikia.nocookie.net/gtawiki/images/b/b6/Cavalcade-GTAV.png" }
    ],

    "Motos": [
        { name: "Bati 801", img: "https://static.wikia.nocookie.net/gtawiki/images/d/dc/Bati801-GTAV.png" },
        { name: "Akuma", img: "https://static.wikia.nocookie.net/gtawiki/images/6/6b/Akuma-GTAV.png" },
        { name: "Sanchez", img: "https://static.wikia.nocookie.net/gtawiki/images/f/fb/Sanchez-GTAV.png" }
    ],

    "Utilitaires": [
        { name: "Benson", img: "https://static.wikia.nocookie.net/gtawiki/images/7/7b/Benson-GTAV.png" },
        { name: "Pounder", img: "https://static.wikia.nocookie.net/gtawiki/images/4/4f/Pounder-GTAV.png" }
    ]
};

// ---------- GÉNÉRATION DU MENU ----------
const menu = document.getElementById("menu");
const catalogue = document.getElementById("catalogue");

function generateMenu() {
    menu.innerHTML = "";
    Object.keys(vehicles).forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.addEventListener("click", () => showCategory(category));
        menu.appendChild(btn);
    });
}

// ---------- AFFICHAGE DES VÉHICULES ----------
function showCategory(category) {
    catalogue.innerHTML = "";

    vehicles[category].forEach(vehicle => {
        const card = document.createElement("div");
        card.className = "car";

        card.innerHTML = `
            <img src="${vehicle.img}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
        `;

        catalogue.appendChild(card);
    });
}

// ---------- INITIALISATION ----------
document.addEventListener("DOMContentLoaded", () => {
    setLang("fr");
    generateMenu();
    showCategory(Object.keys(vehicles)[0]);
});
