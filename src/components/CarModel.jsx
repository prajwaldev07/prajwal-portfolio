"use client";

import { useGLTF } from "@react-three/drei";

export default function CarModel(props) {
  const { scene } = useGLTF("/models/f1_car.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/f1_car.glb");
