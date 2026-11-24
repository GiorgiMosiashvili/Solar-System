
export type PlanetFacts = {
  tagline: string;
  summary: string[];
  stats: { label: string; value: string }[];
  funFact: string;
  axialTilt: number;
  spinSpeed: number;
};

export const PLANET_FACTS: Record<string, PlanetFacts> = {
  Mercury: {
    tagline: "The smallest planet, and the closest to the Sun",
    summary: [
      "Mercury is a small, rocky planet covered in craters, a lot like our Moon. It has almost no atmosphere to hold in heat.",
      "That makes it a world of extremes: the day side bakes while the night side freezes. It orbits the Sun faster than any other planet, which is why the Romans named it after their speedy messenger god.",
    ],
    stats: [
      { label: "Type", value: "Terrestrial (rocky)" },
      { label: "Diameter", value: "4,879 km" },
      { label: "Distance from Sun", value: "57.9 million km (0.39 AU)" },
      { label: "Length of year", value: "88 Earth days" },
      { label: "Length of day", value: "176 Earth days (sunrise to sunrise)" },
      { label: "Moons", value: "0" },
      { label: "Temperature", value: "−180 °C to 430 °C" },
    ],
    funFact: "A single day on Mercury (sunrise to sunrise) lasts two of its years.",
    axialTilt: 0.03,
    spinSpeed: 0.12,
  },
  Venus: {
    tagline: "The hottest planet, wrapped in toxic clouds",
    summary: [
      "Venus is almost the same size as Earth, but it is a very different world. A thick carbon-dioxide atmosphere traps heat in a runaway greenhouse effect, making its surface hot enough to melt lead.",
      "Its clouds are made of sulfuric acid and reflect so much sunlight that Venus is the brightest planet in our night sky.",
    ],
    stats: [
      { label: "Type", value: "Terrestrial (rocky)" },
      { label: "Diameter", value: "12,104 km" },
      { label: "Distance from Sun", value: "108.2 million km (0.72 AU)" },
      { label: "Length of year", value: "225 Earth days" },
      { label: "Rotation", value: "243 Earth days, backwards" },
      { label: "Moons", value: "0" },
      { label: "Surface temperature", value: "About 465 °C" },
    ],
    funFact: "Venus spins backwards, so on Venus the Sun rises in the west and sets in the east.",
    axialTilt: 177.4,
    spinSpeed: 0.1,
  },
  Earth: {
    tagline: "Our home, and the only world known to have life",
    summary: [
      "Earth is the largest of the rocky planets and the only place we know of with liquid water on its surface. Oceans cover about 71% of it.",
      "A nitrogen-and-oxygen atmosphere and a magnetic field protect life from harmful radiation, and the Moon steadies the tilt of its axis, which helps keep the climate stable.",
    ],
    stats: [
      { label: "Type", value: "Terrestrial (rocky)" },
      { label: "Diameter", value: "12,742 km" },
      { label: "Distance from Sun", value: "149.6 million km (1 AU)" },
      { label: "Length of year", value: "365.25 days" },
      { label: "Length of day", value: "24 hours" },
      { label: "Moons", value: "1" },
      { label: "Average temperature", value: "About 15 °C" },
    ],
    funFact: "Earth's 23.4° tilt is the reason we have seasons, not its distance from the Sun.",
    axialTilt: 23.4,
    spinSpeed: 0.35,
  },
  Mars: {
    tagline: "The cold, dusty Red Planet",
    summary: [
      "Mars gets its red colour from iron oxide (rust) in its soil. It has a thin carbon-dioxide atmosphere, polar ice caps, and seasons much like Earth's.",
      "Dry river valleys and lake beds show that liquid water once flowed there, which is why rovers keep searching Mars for signs of ancient life.",
    ],
    stats: [
      { label: "Type", value: "Terrestrial (rocky)" },
      { label: "Diameter", value: "6,779 km" },
      { label: "Distance from Sun", value: "227.9 million km (1.52 AU)" },
      { label: "Length of year", value: "687 Earth days" },
      { label: "Length of day", value: "24 h 37 min" },
      { label: "Moons", value: "2 (Phobos and Deimos)" },
      { label: "Average temperature", value: "About −65 °C" },
    ],
    funFact: "Olympus Mons on Mars is the tallest volcano in the solar system, about 2.5 times the height of Mount Everest.",
    axialTilt: 25.2,
    spinSpeed: 0.33,
  },
  Jupiter: {
    tagline: "The giant king of the planets",
    summary: [
      "Jupiter is a gas giant made mostly of hydrogen and helium. It is more than twice as massive as all the other planets combined.",
      "Its stripes are bands of clouds pulled sideways by its very fast spin. The Great Red Spot is a storm bigger than Earth that has been raging for centuries.",
    ],
    stats: [
      { label: "Type", value: "Gas giant" },
      { label: "Diameter", value: "139,820 km" },
      { label: "Distance from Sun", value: "778.5 million km (5.2 AU)" },
      { label: "Length of year", value: "11.9 Earth years" },
      { label: "Length of day", value: "9 h 56 min (the shortest)" },
      { label: "Moons", value: "95+" },
      { label: "Cloud-top temperature", value: "About −110 °C" },
    ],
    funFact: "Jupiter's moon Ganymede is bigger than the planet Mercury.",
    axialTilt: 3.1,
    spinSpeed: 0.6,
  },
  Saturn: {
    tagline: "The jewel of the solar system",
    summary: [
      "Saturn is a gas giant famous for its bright rings. They're made of billions of pieces of ice and rock, from tiny grains to chunks as big as houses.",
      "The rings are hundreds of thousands of kilometres wide but mostly only about ten metres thick. Saturn also has more known moons than any other planet.",
    ],
    stats: [
      { label: "Type", value: "Gas giant" },
      { label: "Diameter", value: "116,460 km" },
      { label: "Distance from Sun", value: "1.43 billion km (9.5 AU)" },
      { label: "Length of year", value: "29.4 Earth years" },
      { label: "Length of day", value: "10 h 33 min" },
      { label: "Moons", value: "270+" },
      { label: "Cloud-top temperature", value: "About −140 °C" },
    ],
    funFact: "Saturn is less dense than water. In a big enough bathtub, it would float.",
    axialTilt: 26.7,
    spinSpeed: 0.55,
  },
  Uranus: {
    tagline: "The tilted ice giant that rolls around the Sun",
    summary: [
      "Uranus is an ice giant: below its hydrogen-and-helium atmosphere is a thick layer of water, ammonia and methane ices. Methane gas gives it its pale blue-green colour.",
      "Something huge probably knocked it over long ago, because it spins on its side. Each pole gets about 42 years of sunlight followed by 42 years of darkness.",
    ],
    stats: [
      { label: "Type", value: "Ice giant" },
      { label: "Diameter", value: "50,724 km" },
      { label: "Distance from Sun", value: "2.87 billion km (19.2 AU)" },
      { label: "Length of year", value: "84 Earth years" },
      { label: "Length of day", value: "17 h 14 min, backwards" },
      { label: "Moons", value: "28+" },
      { label: "Cloud-top temperature", value: "About −195 °C" },
    ],
    funFact: "Uranus was the first planet discovered with a telescope, by William Herschel in 1781.",
    axialTilt: 97.8,
    spinSpeed: 0.45,
  },
  Neptune: {
    tagline: "The windy blue world at the edge",
    summary: [
      "Neptune is the farthest planet from the Sun: a dark, cold ice giant coloured deep blue by methane in its atmosphere.",
      "Even though it gets very little sunlight, it has the fastest winds in the solar system, blowing at up to about 2,000 km/h.",
    ],
    stats: [
      { label: "Type", value: "Ice giant" },
      { label: "Diameter", value: "49,244 km" },
      { label: "Distance from Sun", value: "4.5 billion km (30.1 AU)" },
      { label: "Length of year", value: "165 Earth years" },
      { label: "Length of day", value: "16 h 6 min" },
      { label: "Moons", value: "16" },
      { label: "Cloud-top temperature", value: "About −200 °C" },
    ],
    funFact: "Neptune was found by maths before anyone saw it: its position was predicted in 1846 from the way it tugged on Uranus.",
    axialTilt: 28.3,
    spinSpeed: 0.45,
  },
};
