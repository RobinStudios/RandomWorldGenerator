// Word banks for random generation
const planetPrefixes = ["Zy", "Xan", "Vel", "Qua", "Or", "Neb", "Thal", "Cry", "Lum", "Aeg"];
const planetSuffixes = ["ora", "ion", "aris", "os", "eth", "une", "ara", "yx", "mir", "oth"];

const climates = ["Arctic Wasteland", "Volcanic Inferno", "Tropical Paradise", "Icy Tundra", "Radiated Desert", "Lush Forest", "Frozen Ocean", "Blazing Savanna", "Dark Gas Clouds"];

const gravityLevels = ["0.5g (Very Low)", "0.8g (Low)", "1g (Earth-like)", "1.3g (High)", "2g (Extreme Gravity)"];

const species = ["Crystalline Entities", "Moss Giants", "Lava Worms", "Skyfishers", "Metallic Dragons", "Void Walkers", "Glass Serpents", "Bioluminescent Fauna", "Stone Sentinels"];

const dangerLevels = ["Low", "Moderate", "High", "Extreme", "Cataclysmic"];

const resources = ["Rare Minerals", "Plasma Vents", "Ancient Relics", "Living Metal", "Frozen Helium", "Quantum Crystals", "Mystic Waters", "Dark Energy Wells"];

document.getElementById('generateBtn').addEventListener('click', generateWorld);
document.getElementById('copyBtn').addEventListener('click', copyWorld);

function generateWorld() {
  const name = planetPrefixes[Math.floor(Math.random() * planetPrefixes.length)] +
               planetSuffixes[Math.floor(Math.random() * planetSuffixes.length)];

  const climate = climates[Math.floor(Math.random() * climates.length)];
  const gravity = gravityLevels[Math.floor(Math.random() * gravityLevels.length)];
  const speciesDominant = species[Math.floor(Math.random() * species.length)];
  const danger = dangerLevels[Math.floor(Math.random() * dangerLevels.length)];
  const resource1 = resources[Math.floor(Math.random() * resources.length)];
  const resource2 = resources[Math.floor(Math.random() * resources.length)];
  const resource3 = resources[Math.floor(Math.random() * resources.length)];

  const description = `On ${name}, ${generatePlanetDescription(climate, speciesDominant)}.`

  const worldText = `
    🌎 <strong>Planet Name:</strong> ${name}<br>
    🌡️ <strong>Climate:</strong> ${climate}<br>
    🌍 <strong>Gravity:</strong> ${gravity}<br>
    👽 <strong>Dominant Species:</strong> ${speciesDominant}<br>
    ⚡ <strong>Danger Level:</strong> ${danger}<br>
    🪨 <strong>Resources:</strong> ${resource1}, ${resource2}, ${resource3}<br><br>
    <em>"${description}"</em>
  `;

  document.getElementById('worldOutput').innerHTML = worldText;
}

function copyWorld() {
  const outputText = document.getElementById('worldOutput').innerText;
  navigator.clipboard.writeText(outputText).then(() => {
    alert("World copied to clipboard!");
  });
}

function generatePlanetDescription(climate, species) {
  const templates = [
    `the ${climate.toLowerCase()} is home to the resilient ${species.toLowerCase()}`,
    `${species} roam freely across the ${climate.toLowerCase()}`,
    `legends speak of ${species.toLowerCase()} thriving in the ${climate.toLowerCase()}`,
    `travelers fear the ${climate.toLowerCase()}, domain of the ${species.toLowerCase()}`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}
