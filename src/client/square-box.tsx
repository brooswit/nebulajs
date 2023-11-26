import { MeshProps, useFrame } from "@react-three/fiber";
import React, { useState } from "react";

interface SquareBoxProps extends MeshProps {
  color: string;
  scale: number;
}

const SquareBox = (props: SquareBoxProps) => {
  const mesh = React.useRef();

  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={props.scale}
        // onClick={() => setActive(!active)}
        // onPointerOver={() => setHover(true)}
        // onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={props.color}
        />
      </mesh>
    </>
  );
};

export default SquareBox;
