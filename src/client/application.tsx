import React, {useState} from "react";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import SquareBox from "./square-box";

import Nebula from "../nebula"

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
  let nebula = new Nebula();
  console.log(nebula);
  let [boxList, updateBoxList] = useState(nebula.getBoxList());
  nebula.on('box-list-updated', ()=>{
    updateBoxList(nebula.getBoxList());
  });

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {boxList.map(box => 
          <SquareBox
            position={[box.x, box.y, box.z]}
            rotation={[box.pitch, box.yaw, box.roll]}
            color={box.color}
            scale={box.scale}
          />
        )}
      </Canvas>

      <Leva />
    </>
  );
};

export default Application;
