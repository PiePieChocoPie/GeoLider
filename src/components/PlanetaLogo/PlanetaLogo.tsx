import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";
import { OfficeMapModal } from "../officeMapModal/OfficeMapModal";


const Planet: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const meshRef = useRef<Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/textures/continents5.avif");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={meshRef} onClick={onClick}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const PlanetaLogo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Canvas
        style={{ width: 140, height: 140 }}
        camera={{ position: [0, 0, 3], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Planet onClick={handleOpenModal} />
      </Canvas>

      {isModalOpen && <OfficeMapModal onClose={handleCloseModal} />}
    </>
  );
};

export default PlanetaLogo;
