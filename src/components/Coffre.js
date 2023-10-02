import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import coffre from "../assets/coffre.glb";

function Coffre() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(coffre);

  scene.scale.set(1 / 10, 1 / 10, 1 / 10);

  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(0, -0.5, 3.7);
  scene.rotation.set(0, Math.PI / 3, 0);

  const angleInDegrees = 150;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Coffre;
