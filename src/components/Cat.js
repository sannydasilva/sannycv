import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import cat from "../assets/chat.glb";

function Cat() {
  const group = useRef();
  const { scene } = useGLTF(cat);
  scene.scale.set(1.5, 1.5, 1.5);
  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(-1.8, -0.4, 0);
  scene.rotation.set(0, Math.PI / 1, 0);

  const angleInDegrees = -30;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Cat;
