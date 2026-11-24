import type { CSSProperties } from "react";

type Props = {
  text: string;
  planetSize: number;
  hasRings?: boolean;
};

const LETTER_SPACE = 8;

export default function OrbitLabel({ text, planetSize, hasRings = false }: Props) {
  const radius = hasRings ? planetSize * 1.25 : planetSize / 2 + 9;

  const word = `${text.toUpperCase()} ★ `;
  const circumference = 2 * Math.PI * radius;
  const repeats = Math.max(1, Math.round(circumference / (word.length * LETTER_SPACE)));
  const letters = word.repeat(repeats).split("");
  const step = 360 / letters.length;

  return (
    <div
      className="label-band"
      style={{ "--r": `${radius}px` } as CSSProperties}
      aria-hidden
    >
      <div className="label-band-spin">
        {letters.map((letter, i) => (
          <span key={i} style={{ "--angle": `${i * step}deg` } as CSSProperties}>
            {letter === " " ? " " : letter}
          </span>
        ))}
      </div>
    </div>
  );
}
