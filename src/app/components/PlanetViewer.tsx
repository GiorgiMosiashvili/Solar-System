"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import {
  DoubleSide,
  MathUtils,
  RingGeometry,
  SRGBColorSpace,
  Vector3,
  type Group,
  type PerspectiveCamera,
  type Texture,
} from "three";

type Props = {
  texture: string;
  axialTilt: number;
  spinSpeed: number;
  hasRings: boolean;
};

const useSRGB = (tex: Texture | Texture[]) => {
  for (const t of Array.isArray(tex) ? tex : [tex]) t.colorSpace = SRGBColorSpace;
};

const RING_INNER = 1.24;
const RING_OUTER = 2.27;

function SaturnRings() {
  const ringTexture = useTexture("/textures/saturn-ring.png", useSRGB);

  const geometry = useMemo(() => {
    const g = new RingGeometry(RING_INNER, RING_OUTER, 128, 1);
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    const v = new Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      uv.setXY(i, (v.length() - RING_INNER) / (RING_OUTER - RING_INNER), 0.5);
    }
    return g;
  }, []);

  return (
    <mesh geometry={geometry} rotation-x={-Math.PI / 2}>
      <meshStandardMaterial map={ringTexture} transparent side={DoubleSide} depthWrite={false} />
    </mesh>
  );
}

function Globe({ texture, axialTilt, spinSpeed, hasRings }: Props) {
  const map = useTexture(texture, useSRGB);
  const spinRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (spinRef.current) spinRef.current.rotation.y += delta * spinSpeed;
  });

  return (
    <group rotation-z={MathUtils.degToRad(axialTilt)}>
      <group ref={spinRef}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={map} roughness={1} metalness={0} />
        </mesh>
      </group>
      {hasRings && <SaturnRings />}
    </group>
  );
}

function FitCamera({ radius }: { radius: number }) {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const width = useThree((state) => state.size.width);
  const height = useThree((state) => state.size.height);

  useEffect(() => {
    const tanHalfFov = Math.tan(MathUtils.degToRad(camera.fov / 2));
    const aspect = width / height;
    const fitVertically = radius / tanHalfFov;
    const fitHorizontally = radius / (tanHalfFov * aspect);
    camera.position.setLength(Math.max(fitVertically, fitHorizontally) * 1.3);
  }, [camera, width, height, radius]);

  return null;
}

export default function PlanetViewer(props: Props) {
  const radius = props.hasRings ? RING_OUTER : 1;

  return (
    <Canvas camera={{ position: [0, 0.6, 4], fov: 40 }} dpr={[1, 2]}>
      <FitCamera radius={radius} />
      <color attach="background" args={["#05050f"]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[-5, 1.5, 3]} intensity={3} />
      <Stars radius={60} depth={40} count={2500} factor={3} fade speed={0.6} />

      <Suspense fallback={null}>
        <Globe {...props} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        minDistance={radius * 1.6}
        maxDistance={radius * 12}
      />
    </Canvas>
  );
}
