"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { PlanetInfo } from "./Planets";
import { PLANET_FACTS } from "./planetFacts";

const PlanetViewer = dynamic(() => import("./PlanetViewer"), {
  ssr: false,
  loading: () => <p className="viewer-loading">Loading planet…</p>,
});

type Props = {
  planet: PlanetInfo;
  onClose: () => void;
};

export default function PlanetModal({ planet, onClose }: Props) {
  const facts = PLANET_FACTS[planet.name];
  const [closing, setClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const requestClose = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) onClose();
    else setClosing(true);
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [requestClose]);

  return (
    <>
      <div
        className={`planet-modal-backdrop${closing ? " closing" : ""}`}
        onClick={requestClose}
      />

      <aside
        className={`planet-modal${closing ? " closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="planet-modal-title"
        onAnimationEnd={(e) => {
          if (closing && e.target === e.currentTarget) onClose();
        }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="planet-modal-close"
          onClick={requestClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="planet-modal-viewer">
          <PlanetViewer
            texture={planet.texture}
            axialTilt={facts.axialTilt}
            spinSpeed={facts.spinSpeed}
            hasRings={planet.name === "Saturn"}
          />
          <p className="viewer-hint">Drag to rotate · scroll to zoom</p>
        </div>

        <div className="planet-modal-info">
          <h2 id="planet-modal-title">{planet.name}</h2>
          <p className="planet-tagline">{facts.tagline}</p>

          {facts.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}

          <dl className="planet-stats">
            {facts.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
            <div>
              <dt>Axial tilt</dt>
              <dd>{facts.axialTilt}°</dd>
            </div>
          </dl>

          <div className="planet-funfact">
            <strong>Fun fact</strong>
            <p>{facts.funFact}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
