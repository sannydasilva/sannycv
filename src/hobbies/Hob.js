import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Sofa from "../components/Sofa";
import Desktop from "../components/Desktop";
import Table from "../components/Table";
import Coffre from "../components/Coffre";
import C18 from "../components/C18";
import Paint from "../components/Paint";
import Ship from "../components/Ship";

function Hob() {
  console.log("Le composant Hob est rendu.");
  return (
    <div style={{ background: "white", height: "82%", width: "100%" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Sofa />
        <Desktop />
        <C18 />
        <Coffre />
        <Paint />
        <Ship />
        <Table />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Hob;
