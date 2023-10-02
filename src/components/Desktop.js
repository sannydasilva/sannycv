import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import buffet from "../assets/buffet.glb";

function Desktop() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(buffet);

  scene.scale.set(1, 1, 1);

  scene.position.set(3.5, -0.5, 0);
  scene.rotation.set(0, Math.PI / 2, 0);

  const angleInDegrees = 200;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Desktop;
