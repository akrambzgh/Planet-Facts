class TitleFactsTextChanger {
  constructor(
    planetName,
    planetRotationTime,
    planetRevolutioTime,
    planetRadius,
    planetTemp,
    infoLink
  ) {
    this.planetName = planetName;
    this.planetRotationTime = planetRotationTime;
    this.planetRevolutioTime = planetRevolutioTime;
    this.planetRadius = planetRadius;
    this.planetTemp = planetTemp;
    this.infoLink = infoLink;
  }

  changeText(
    newNameText,
    newRotationTimeText,
    newRevolutionTimeText,
    newRadiusText,
    newTempText,
    newInfoLink
  ) {
    this.planetName.textContent = newNameText;
    this.planetRotationTime.textContent = newRotationTimeText;
    this.planetRevolutioTime.textContent = newRevolutionTimeText;
    this.planetRadius.textContent = newRadiusText;
    this.planetTemp.textContent = newTempText;
    this.infoLink.href = newInfoLink;
  }
}

class InfoImgTextChange {
  constructor(inofText) {
    this.inofText = inofText;
  }

  changeInfoText(theText) {
    this.inofText.textContent = theText;
  }
}

let main = document.querySelector("main");

const planetNameText = document.getElementById("name");
const planetRotationTimeText = document.querySelector(".rot-time");
const planetRevolutionTimeText = document.querySelector(".rev-time");
const planetRadiusText = document.querySelector(".radius");
const planetTempText = document.querySelector(".temp");
const planetInfoLink = document.querySelector(".source");

const titleFactsTextChanger = new TitleFactsTextChanger(
  planetNameText,
  planetRotationTimeText,
  planetRevolutionTimeText,
  planetRadiusText,
  planetTempText,
  planetInfoLink
);
let allListitems = document.querySelectorAll(".planet");

const overviewButton = document.querySelector(".overview");
const internalStructureButton = document.querySelector(".intertanl-strucutre");
const surfaceGeologyButton = document.querySelector(".surface-geology");

let infoTextEl = document.querySelector(".about-planet-text");

const infoImgTextChange = new InfoImgTextChange(infoTextEl);

const mercuryInfoText = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`;

const venusInfoText = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`;

const earthInfoText = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`;

const marsInfoText = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the [Red Planet].`;

const jupiterInfoText = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`;

const saturnInfoText = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`;

const uranusInfoText = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`;

const neptuneInfoText = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`;

allListitems[0].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "mercury",
    "58.6 days",
    "87.97 days",
    "2439.7 km",
    "430 °C",
    "https://en.wikipedia.org/wiki/Mercury_(planet)"
  );
  infoImgTextChange.changeInfoText(mercuryInfoText);
  main.classList.add("mercury");
  main.classList.remove(
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  );
});
allListitems[1].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "venus",
    "243 days",
    "224.7 days",
    "6051.8 km",
    "471 °C",
    "https://en.wikipedia.org/wiki/Venus"
  );
  infoImgTextChange.changeInfoText(venusInfoText);
  main.classList.add("venus");
  main.classList.remove(
    "mercury",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  );
});
allListitems[2].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "earth",
    "0.99 days",
    "365.26 days",
    "6,371 km",
    "16 °C",
    "https://en.wikipedia.org/wiki/Earth"
  );
  infoImgTextChange.changeInfoText(earthInfoText);
  main.classList.add("earth");
  main.classList.remove(
    "venus",
    "mercury",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  );
});
allListitems[3].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "mars",
    "1.03 days",
    "1.88 years",
    "3389.5 km",
    "-28 °C",
    "https://en.wikipedia.org/wiki/Mars"
  );
  infoImgTextChange.changeInfoText(marsInfoText);
  main.classList.add("mars");
  main.classList.remove(
    "venus",
    "earth",
    "mercury",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  );
});
allListitems[4].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "jupiter",
    "9.93 hours",
    "11.86 years",
    "69.911 km",
    "-108 °C",
    "https://en.wikipedia.org/wiki/Jupiter"
  );
  infoImgTextChange.changeInfoText(jupiterInfoText);
  main.classList.add("jupiter");
  main.classList.remove(
    "venus",
    "earth",
    "mars",
    "mercury",
    "saturn",
    "uranus",
    "neptune"
  );
});
allListitems[5].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "saturn",
    "10.8 hours",
    "29.46 years",
    "58.232 km",
    "-138 °C",
    "https://en.wikipedia.org/wiki/Saturn"
  );
  infoImgTextChange.changeInfoText(saturnInfoText);
  main.classList.add("saturn");
  main.classList.remove(
    "venus",
    "earth",
    "mars",
    "jupiter",
    "mercury",
    "uranus",
    "neptune"
  );
});
allListitems[6].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "uranus",
    "17.2 hours",
    "84 years",
    "25.362 km",
    "-195 °C",
    "https://en.wikipedia.org/wiki/Uranus"
  );
  infoImgTextChange.changeInfoText(uranusInfoText);
  main.classList.add("uranus");
  main.classList.remove(
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "mercury",
    "neptune"
  );
});
allListitems[7].addEventListener("click", () => {
  titleFactsTextChanger.changeText(
    "neptune",
    "16.08 hours",
    "164.79 years",
    "24.622 km",
    "-201 °C",
    "https://en.wikipedia.org/wiki/Neptune"
  );
  infoImgTextChange.changeInfoText(neptuneInfoText);
  main.classList.add("neptune");
  main.classList.remove(
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "mercury"
  );
});

overviewButton.addEventListener("click", () => {
  changeTheText("mercury", mercuryInfoText);
  changeTheText("venus", venusInfoText);
  changeTheText("earth", earthInfoText);
  changeTheText("mars", marsInfoText);
  changeTheText("jupiter", jupiterInfoText);
  changeTheText("saturn", saturnInfoText);
  changeTheText("uranus", uranusInfoText);
  changeTheText("neptune", neptuneInfoText);
});

function changeTheText(mainClass, text) {
  if (main.classList.contains(mainClass)) {
    infoImgTextChange.changeInfoText(`${text}`);
  }
}
