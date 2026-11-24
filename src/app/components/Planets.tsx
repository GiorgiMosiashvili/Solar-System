export type PlanetInfo = {
  name: string;
  href: string;
  texture: string;
  size: number;
  orbit: number;
  period: number;
  spin: number;
  offset: number;
};

export const PLANETS: PlanetInfo[] = [
  { name: "Mercury", href: "#", texture: "/textures/mercury.jpg", size: 12, orbit: 75, period: 12, spin: 20, offset: 0.1 },
  { name: "Venus", href: "#", texture: "/textures/venus.jpg", size: 18, orbit: 102, period: 18, spin: -30, offset: 0.55 },
  { name: "Earth", href: "#", texture: "/textures/earth.jpg", size: 20, orbit: 130, period: 25, spin: 8, offset: 0.8 },
  { name: "Mars", href: "#", texture: "/textures/mars.jpg", size: 15, orbit: 158, period: 35, spin: 9, offset: 0.3 },
  { name: "Jupiter", href: "#", texture: "/textures/jupiter.jpg", size: 40, orbit: 200, period: 60, spin: 5, offset: 0.65 },
  { name: "Saturn", href: "#", texture: "/textures/saturn.jpg", size: 32, orbit: 245, period: 85, spin: 5, offset: 0.05 },
  { name: "Uranus", href: "#", texture: "/textures/uranus.jpg", size: 24, orbit: 282, period: 120, spin: -7, offset: 0.4 },
  { name: "Neptune", href: "#", texture: "/textures/neptune.jpg", size: 23, orbit: 315, period: 160, spin: 7, offset: 0.9 },
];
