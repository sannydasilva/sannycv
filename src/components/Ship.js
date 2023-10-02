import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

import ship from "../assets/ship.glb";

function Ship() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(ship);

  scene.scale.set(1 / 60, 1 / 60, 1 / 60);

  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(3.3, 0.4, 0.5);
  scene.rotation.set(0.1, Math.PI / 5, 0);

  const angleInDegrees = 100;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Ship;
