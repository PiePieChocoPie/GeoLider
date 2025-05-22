import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type Props = {
  z: number;
  color: string;
  roughness: number;
};

export function MountainLayer({ z, color, roughness }: Props) {
  const ref = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    const detail = 100;
    for (let i = 0; i < detail; i++) {
      const x = (i / detail) * 20 - 10;
      const y = Math.sin(x * roughness) * 1.5 + Math.random() * 0.3;
      points.push(x, y, 0);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geom;
  }, [roughness]);

  return (
    <mesh ref={ref} position={[0, -3, z]} geometry={geometry}>
      <meshStandardMaterial color={color} roughness={1} flatShading />
    </mesh>
  );
}
