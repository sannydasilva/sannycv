import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";

import c18 from "../assets/c18.glb";

function C18() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(c18);

  //Fonction pour faire tourner l'objet automatiquement
  //   const animate = () => {
  //     group.current.rotation.y += 0.001; // Ajustez la vitesse de rotation ici
  //   };

  //   // Demande une nouvelle frame d'animation
  //   useFrame(() => animate());

  scene.scale.set(1 / 20, 1 / 20, 1 / 20);

  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(-0.5, -0.1, 1.5);
  scene.rotation.set(0.1, Math.PI / 5, 0);

  const angleInDegrees = -90;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default C18;
