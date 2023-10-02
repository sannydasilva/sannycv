import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

import table from "../assets/table.glb";

function Table() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(table);

  scene.scale.set(0.3, 0.3, 0.3);

  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(0, -0.5, 1.5);
  scene.rotation.set(0.1, Math.PI / 5, 0);

  const angleInDegrees = -90;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  // const loadModel = (nodes) => {
  //   nodes.traverse((child) => {
  //     if (child.isMesh) {
  //       child.material.side = 1;
  //     }
  //   });
  // };

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Table;
