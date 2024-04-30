import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ObjectLoader } from 'three';

const SceneRender = () => {
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    const fetchLatestModel = async () => {
      try {
        const response = await fetch('http://localhost:5000/latest-model');
        if (!response.ok) {
          throw new Error('Failed to fetch latest model.');
        }
        const data = await response.json();
        setModelUrl(data.url);
      } catch (error) {
        console.error('Error fetching latest model:', error);
      }
    };

    fetchLatestModel();
  }, []);

  
const ModelLoader = ({ modelUrl }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = modelUrl.endsWith('.gltf') ? new GLTFLoader() : new ObjectLoader();
    loader.load(modelUrl, (loadedModel) => {
      setModel(loadedModel.scene || loadedModel);
    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });
  }, [modelUrl]);

  return model ? <primitive object={model} /> : null;
};

  return (
    <Canvas>
      {/* Lights and Camera */}
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[5, 5, 5]} />
      <perspectiveCamera position={[0, 0, 5]} fov={75} aspect={700 / 500} near={0.1} far={100} />

      {/* Render the model if available */}
      {modelUrl && (
        <ModelLoader modelUrl={modelUrl} />
      )}
    </Canvas>
  );
};


export default SceneRender;
