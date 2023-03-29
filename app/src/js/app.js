class TitleFactsTextChanger {
  constructor(
    planetNameEl,
    planetRotationTimeEl,
    planetRevolutioTimeEl,
    planetRadiusEl,
    planetTempEl,
    infoLinkEl
  ) {
    this.planetNameEl = planetNameEl;
    this.planetRotationTimeEl = planetRotationTimeEl;
    this.planetRevolutioTimeEl = planetRevolutioTimeEl;
    this.planetRadiusEl = planetRadiusEl;
    this.planetTempEl = planetTempEl;
    this.infoLinkEl = infoLinkEl;
  }

  changeText(
    newNameText,
    newRotationTimeText,
    newRevolutionTimeText,
    newRadiusText,
    newTempText,
    newInfoLink
  ) {
    this.planetNameEl.textContent = newNameText.textContent;
    this.planetRotationTimeEl.textContent = newRotationTimeText;
    this.planetRevolutioTimeEl.textContent = newRevolutionTimeText;
    this.planetRadiusEl.textContent = newRadiusText;
    this.planetTempEl.textContent = newTempText;
    this.infoLinkEl.href = newInfoLink;
  }
}

class InfoImgTextChange {
  constructor(infoText, planetImg) {
    this.infoText = infoText;
    this.planetImg = planetImg;
  }

  changeInfoTextImg(theText, theImg) {
    this.infoText.textContent = theText;
    this.planetImg.src = theImg;
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
let planetImg = document.querySelector(".planet-img");

const infoImgTextChange = new InfoImgTextChange(infoTextEl, planetImg);

const {
  mercuryInfoText,
  venusInfoText,
  earthInfoText,
  marsInfoText,
  jupiterInfoText,
  saturnInfoText,
  uranusInfoText,
  neptuneInfoText,
} = overviewTexts();

const mercuryOverviewImg = "../../images/planet-mercury.svg";
const venusOverviewImg = "../../images/planet-venus.svg";
const earthOverviewImg = "../../images/planet-earth.svg";
const marsOverviewImg = "../../images/planet-mars.svg";
const jupiterOverviewImg = "../../images/planet-jupiter.svg";
const saturnOverviewImg = "../../images/planet-saturn.svg";
const uranusOverviewImg = "../../images/planet-uranus.svg";
const neptuneOverviewImg = "../../images/planet-neptune.svg";

allListitems[0].addEventListener("click", () => {
  textChangingFun(
    "mercury",
    "58.6 days",
    "87.97 days",
    "2439.7 km",
    "430 °C",
    "https://en.wikipedia.org/wiki/Mercury_(planet)",
    mercuryInfoText,
    mercuryOverviewImg,
    ["venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
  );
});
allListitems[1].addEventListener("click", () => {
  textChangingFun(
    "venus",
    "243 days",
    "224.7 days",
    "6051.8 km",
    "471 °C",
    "https://en.wikipedia.org/wiki/venus_(planet)",
    venusInfoText,
    venusOverviewImg,
    ["mercury", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
  );
});

allListitems[2].addEventListener("click", () => {
  textChangingFun(
    "earth",
    "0.99 days",
    "365.26 days",
    "6.371 km",
    "16 °C",
    "https://en.wikipedia.org/wiki/earth_(planet)",
    earthInfoText,
    earthOverviewImg,
    ["venus", "mercury", "mars", "jupiter", "saturn", "uranus", "neptune"]
  );
});
allListitems[3].addEventListener("click", () => {
  textChangingFun(
    "mars",
    "1.03 days",
    "1.88 years",
    "3389.5 km",
    "-28 °C",
    "https://en.wikipedia.org/wiki/mars_(planet)",
    marsInfoText,
    marsOverviewImg,
    ["venus", "earth", "mercury", "jupiter", "saturn", "uranus", "neptune"]
  );
});
allListitems[4].addEventListener("click", () => {
  textChangingFun(
    "jupiter",
    "9.93 hours",
    "11.86",
    "69.911 km",
    "-108 °C",
    "https://en.wikipedia.org/wiki/jupiter_(planet)",
    jupiterInfoText,
    jupiterOverviewImg,
    ["venus", "earth", "mars", "mercury", "saturn", "uranus", "neptune"]
  );
});
allListitems[5].addEventListener("click", () => {
  textChangingFun(
    "saturn",
    "10.8 hours",
    "29.46 years",
    "58.232 km",
    "-138 °C",
    "https://en.wikipedia.org/wiki/saturn_(planet)",
    saturnInfoText,
    saturnOverviewImg,
    ["venus", "earth", "mars", "jupiter", "mercury", "uranus", "neptune"]
  );
});
allListitems[6].addEventListener("click", () => {
  textChangingFun(
    "uranus",
    "17.2 hours",
    "84 years",
    "25.362 km",
    "-195 °C",
    "https://en.wikipedia.org/wiki/uranus_(planet)",
    uranusInfoText,
    uranusOverviewImg,
    ["venus", "earth", "mars", "jupiter", "saturn", "mercury", "neptune"]
  );
});
allListitems[7].addEventListener("click", () => {
  textChangingFun(
    "neptune",
    "16.08 hours",
    "164.79 years",
    "24.622 km",
    "-201 °C",
    "https://en.wikipedia.org/wiki/neptune_(planet)",
    neptuneInfoText,
    neptuneOverviewImg,
    ["venus", "earth", "mars", "jupiter", "saturn", "uranus", "mercury"]
  );
});

overviewButton.addEventListener("click", () => {
  changeTheText("mercury", mercuryInfoText, mercuryOverviewImg);
  changeTheText("venus", venusInfoText, venusOverviewImg);
  changeTheText("earth", earthInfoText, earthOverviewImg);
  changeTheText("mars", marsInfoText, marsOverviewImg);
  changeTheText("jupiter", jupiterInfoText, jupiterOverviewImg);
  changeTheText("saturn", saturnInfoText, saturnOverviewImg);
  changeTheText("uranus", uranusInfoText, uranusOverviewImg);
  changeTheText("neptune", neptuneInfoText, neptuneOverviewImg);
});

internalStructureButton.addEventListener("click", () => {
  changeTheText(
    "mercury",
    `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`,
    "../../images/planet-mercury-internal.svg"
  );
  changeTheText(
    "venus",
    `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`,
    "../../images/planet-venus-internal.svg"
  );
  changeTheText(
    "earth",
    `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`,
    "../../images/planet-earth-internal.svg"
  );
  changeTheText(
    "mars",
    `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`,
    "../../images/planet-mars-internal.svg"
  );
  changeTheText(
    "jupiter",
    `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`,
    "../../images/planet-jupiter-internal.svg"
  );
  changeTheText(
    "saturn",
    `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`,
    "../../images/planet-saturn-internal.svg"
  );
  changeTheText(
    "uranus",
    `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`,
    "../../images/planet-uranus-internal.svg"
  );
  changeTheText(
    "neptune",
    `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
    "../../images/planet-neptune-internal.svg"
  );
});

surfaceGeologyButton.addEventListener("click", () => {
  changeTheText(
    "mercury",
    `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`,
    "../../images/geology-mercury.png"
  );
  changeTheText(
    "venus",
    `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`,
    "../../images/geology-venus.png"
  );
  changeTheText(
    "earth",
    `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`,
    "../../images/geology-earth.png"
  );
  changeTheText(
    "mars",
    `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`,
    "../../images/geology-mars.png"
  );
  changeTheText(
    "jupiter",
    `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`,
    "../../images/geology-jupiter.png"
  );
  changeTheText(
    "saturn",
    `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`,
    "../../images/geology-saturn.png"
  );
  changeTheText(
    "uranus",
    `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`,
    "../../images/geology-uranus.png"
  );
  changeTheText(
    "neptune",
    `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`,
    "../../images/geology-neptune.png"
  );
});

function overviewTexts() {
  const mercuryInfoText = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`;

  const venusInfoText = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`;

  const earthInfoText = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`;

  const marsInfoText = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the [Red Planet].`;

  const jupiterInfoText = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`;

  const saturnInfoText = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`;

  const uranusInfoText = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`;

  const neptuneInfoText = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`;
  return {
    mercuryInfoText,
    venusInfoText,
    earthInfoText,
    marsInfoText,
    jupiterInfoText,
    saturnInfoText,
    uranusInfoText,
    neptuneInfoText,
  };
}

function changeTheText(mainClass, text, imgSrc) {
  if (main.classList.contains(mainClass)) {
    infoImgTextChange.changeInfoTextImg(`${text}`, imgSrc);
  }
}

function textChangingFun(
  planetName,
  rotTime,
  revTime,
  radius,
  avgTemp,
  sourceLink,
  planetInfoText,
  planetOverviewImg,
  planetsClassesDeleted
) {
  titleFactsTextChanger.changeText(
    planetName,
    rotTime,
    revTime,
    radius,
    avgTemp,
    sourceLink
  );
  infoImgTextChange.changeInfoTextImg(planetInfoText, planetOverviewImg);
  main.classList.add(planetName);
  main.classList.remove(...planetsClassesDeleted);
}

const humberguerButton = document.querySelector(".humberguer");

class OpenPlanetsList {
  constructor(planetsList) {
    this.planetsList = planetsList;
  }

  toggleShowClass() {
    this.planetsList.classList.toggle("show");
  }
  removeShowClass() {
    this.planetsList.classList.remove("show");
  }
}
let planetsList = document.querySelector(".planets-list");
let allPlanetsListElments = document.querySelectorAll(".planet");

const planetsListOpen = new OpenPlanetsList(planetsList);

humberguerButton.addEventListener("click", () => {
  planetsListOpen.toggleShowClass();
});

allPlanetsListElments.forEach((item) => {
  item.addEventListener("click", () => {
    planetsListOpen.removeShowClass();
  });
});
