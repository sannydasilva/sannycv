import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Sofa from "../components/Sofa";
import Desktop from "../components/Desktop";
import Table from "../components/Table";
import Coffre from "../components/Coffre";
import C18 from "../components/C18";
import Paint from "../components/Paint";
import Ship from "../components/Ship";
import Cat from "../components/Cat";

function Hob() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  const controls = useRef();

  const handleUpdate = () => {
    // Limitez l'angle vertical pour empêcher de voir en dessous de la scène
    if (controls.current) {
      const { current: orbitControls } = controls;
      if (orbitControls.getPolarAngle() < 0) {
        orbitControls.setPolarAngle(0);
      }
    }
  };

  return (
    <div style={{ background: "white", height: "82%", width: "100%" }}>
      {isLoading ? (
        <h2
          style={{ textAlign: "center", fontSize: "2rem", paddingTop: "100px" }}
        >
          Je vous laisse deviner dans cette scène, quels sont mes hobbies <br />{" "}
          (si vous êtes sur mobile, vous pouvez zoomer, faire tourner la scène
          avec 1 doigt et vous déplacer avec 2 doigts !)
        </h2>
      ) : (
        <div style={{ background: "white", height: "82%", width: "100%" }}>
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} />
            <Sofa />
            <Cat />
            <Desktop />
            <C18 />
            <Coffre />
            <Paint />
            <Ship />
            <Table />
            <OrbitControls ref={controls} onUpdate={handleUpdate} />
          </Canvas>
        </div>
      )}
    </div>
  );
}

export default Hob;
