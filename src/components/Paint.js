import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import paint from "../assets/paint.glb";

function Paint() {
  const group = useRef();
  const { scene } = useGLTF(paint);
  const [isHovered, setIsHovered] = useState(false);

  scene.scale.set(1, 1, 1);
  /*position de l'objet (Axe des x : Horizontal, positif vers la droite et négatif vers la gauche.
                           Axe des y : Vertical, positif vers le haut et négatif vers le bas.
                           Axe des z : Profondeur, positif en avant et négatif en arrière.)*/
  scene.position.set(1, -0.5, -1);
  scene.rotation.set(0, Math.PI / 2, 0);

  const angleInDegrees = -30;
  const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convertit l'angle en radians
  scene.rotation.y += angleInRadians;

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <group ref={group}>
      <primitive
        object={scene}
        onPointerOver={handleHover}
        onPointerOut={handleUnhover}
      />
      {isHovered && (
        <Html position={[1, 0, -1]}>
          <div style={{ color: "white", background: "black", padding: "5px" }}>
            Chevalet peinture
          </div>
        </Html>
      )}
    </group>
  );
}

export default Paint;
