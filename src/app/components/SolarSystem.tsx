"use client";

import { useState, type CSSProperties } from "react";
import { PLANETS, type PlanetInfo } from "./Planets";
import Planet from "./Planet";
import OrbitLabel from "./OrbitLabel";
import PlanetModal from "./PlanetModal";

export default function SolarSystem() {
  const [selected, setSelected] = useState<PlanetInfo | null>(null);

  return (
    <>
      <div className="solar-stage">
        <div className={`solar-system${selected ? " is-paused" : ""}`}>
          <div className="sun" />

          {PLANETS.map((p) => (
            <div
              key={p.name}
              className="orbit"
              style={{
                "--radius": `${p.orbit}px`,
                "--period": `${p.period}s`,
                "--offset": p.offset,
              } as CSSProperties}
            >
              <div className="orbit-arm">
                <button
                  type="button"
                  className="planet-holder"
                  aria-label={`${p.name}: open details`}
                  onClick={() => setSelected(p)}
                >
                  <div className="upright">
                    <Planet {...p} />
                    <OrbitLabel text={p.name} planetSize={p.size} hasRings={p.name === "Saturn"} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <PlanetModal key={selected.name} planet={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
