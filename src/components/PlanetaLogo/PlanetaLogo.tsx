import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";


const Planet: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  const texture = useLoader(THREE.TextureLoader, "/textures/continents3.png");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const PlanetaLogo: React.FC = () => {
  return (
    <Canvas style={{ width: 140, height: 140 }} camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Planet />
    </Canvas>
  );
};

export default PlanetaLogo;
