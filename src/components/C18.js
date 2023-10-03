import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import c18 from "../assets/c18.glb";

function C18() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(c18);
  const [isHovered, setIsHovered] = useState(false);

  scene.scale.set(1 / 20, 1 / 20, 1 / 20);
  scene.position.set(-0.5, -0.1, 1.5);
  scene.rotation.set(0.1, Math.PI / 5, 0);

  const angleInDegrees = -90;
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
        <Html position={[-0.5, -0.1, 1.5]}>
          <div style={{ color: "white", background: "black", padding: "5px" }}>
            Figurine C18
          </div>
        </Html>
      )}
    </group>
  );
}

export default C18;
