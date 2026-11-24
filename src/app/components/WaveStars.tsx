"use client";
import { useEffect, useRef } from "react";
type Star = { x: number; y: number; r: number; phase: number };
const AMPLITUDE = 12;
const WAVELENGTH = 320;
const SPEED = 0.0008;
export default function WaveStars() {
const canvasRef = useRef<HTMLCanvasElement>(null);
useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;
const ctx = canvas.getContext("2d");
if (!ctx) return;
let stars: Star[] = [];
let frameId = 0;
function resize() {const dpr = window.devicePixelRatio || 1;
const w = window.innerWidth;
const h = window.innerHeight;
canvas!.width = w * dpr;
canvas!.height = h * dpr;
ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
stars = Array.from({ length: Math.floor((w * h) / 2500) }, () => ({
x: Math.random() * w,
y: Math.random() * h,
r: Math.random() * 1.4 + 0.3,
phase: Math.random() * Math.PI * 2,
}));
}
function draw(time: number) {
ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
ctx!.fillStyle = "#fff";
for (const s of stars) {
const wave = Math.sin((s.x / WAVELENGTH) * Math.PI * 2 - time * SPEED);
const y = s.y + wave * AMPLITUDE;
ctx!.globalAlpha = 0.6 + 0.4 * Math.sin(time * 0.002 + s.phase);
ctx!.beginPath();
ctx!.arc(s.x, y, s.r, 0, Math.PI * 2);
ctx!.fill();
}
ctx!.globalAlpha = 1;
frameId = requestAnimationFrame(draw);
}
resize();
window.addEventListener("resize", resize);
frameId = requestAnimationFrame(draw);
return () => {
cancelAnimationFrame(frameId);
window.removeEventListener("resize", resize);
};
}, []);
return <canvas ref={canvasRef} className="wave-stars" aria-hidden />; 
}