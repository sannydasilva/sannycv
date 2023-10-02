import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import sofa from "../assets/sofa.glb";

function Sofa() {
  const group = useRef();
  const { scene } = useGLTF(sofa);

  scene.scale.set(1 / 100, 1 / 100, 1 / 100);

  scene.position.set(-3, -0.5, 0);
  scene.rotation.set(0.1, Math.PI / 4, 0);

  const angleInDegrees = 20;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Sofa;
