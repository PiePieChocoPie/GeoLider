import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";
import { Text } from "@react-three/drei";

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

      <Text
        position={[0, 0, 1.5]} // чуть ближе к камере, перед планетой
        fontSize={1.8}           // размер буквы
        color="#4A90E2"        // цвет буквы (синий)
        anchorX="center"
        anchorY="middle"
      >
        G
      </Text>

      <Planet />
    </Canvas>
  );
};

export default PlanetaLogo;
