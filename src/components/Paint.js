import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

import paint from "../assets/paint.glb";

function Paint() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(paint);

  scene.scale.set(1, 1, 1);

  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(1, -0.5, -1);
  scene.rotation.set(0, Math.PI / 2, 0);

  const angleInDegrees = -30;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Paint;
