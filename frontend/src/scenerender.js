import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

const RotatingBox = () => {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the mesh on the x and y axes
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh>
  );
};

const SceneRender = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <RotatingBox />
    </Canvas>
  );
};

export default SceneRender;
