import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import ship from "../assets/ship.glb";

function Ship() {
  const group = useRef(); // Référence pour le groupe contenant le modèle 3D
  const { scene } = useGLTF(ship);
  const [isHovered, setIsHovered] = useState(false);

  scene.scale.set(1 / 3, 1 / 3, 1 / 3);
  scene.position.set(3.2, 0.9, 0.5);
  scene.rotation.set(0.3, Math.PI / 5, 0);

  const angleInDegrees = 100;
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
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
        <Html position={[3.2, 1.5, 0.5]}>
          <div style={{ color: "white", background: "black", padding: "5px" }}>
            Bateau pirate
          </div>
        </Html>
      )}
    </group>
  );
}

export default Ship;
