import type { CSSProperties } from "react";
import type { PlanetInfo } from "./Planets";

export default function Planet({ name, texture, size, spin }: PlanetInfo) {
return (
<div
className={`planet3d planet-${name.toLowerCase()}`}
style={{"--size": `${size}px`,
"--texture": `url(${texture})`,
"--spin": `${Math.abs(spin)}s`,
"--spin-direction": spin < 0 ? "reverse" : "normal",
} as CSSProperties}
>
{name === "Saturn" && (
<>
<span className="ring ring-back" />
<span className="ring ring-front" />
</>
)}
</div>
);
}