"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { PerspectiveCamera as PerspectiveCameraType } from "three";

interface PCViewerProps {
  selectedComponents: {
    cpu: any;
    gpu: any;
    ram: any;
    storage: any;
    motherboard: any;
    case: any;
  };
}

export default function PCViewer({ selectedComponents }: PCViewerProps) {
  const cameraRef = useRef<PerspectiveCameraType>(null);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 5);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 0, 5]}
          fov={75}
        />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          rotateSpeed={0.5}
        />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Базовый корпус ПК */}
        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.2}
        >
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[2, 4, 1]} />
            <meshStandardMaterial 
              color="#333333"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>

        {/* CPU */}
        {selectedComponents.cpu && (
          <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.3}
          >
            <mesh position={[0, 1, 0.6]} castShadow>
              <boxGeometry args={[1, 0.2, 0.2]} />
              <meshStandardMaterial 
                color="#666666"
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        )}

        {/* GPU */}
        {selectedComponents.gpu && (
          <Float
            speed={1.8}
            rotationIntensity={0.25}
            floatIntensity={0.25}
          >
            <mesh position={[0, 0, 0.6]} castShadow>
              <boxGeometry args={[1.5, 0.1, 0.3]} />
              <meshStandardMaterial 
                color="#444444"
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        )}

        {/* RAM */}
        {selectedComponents.ram && (
          <Float
            speed={2.2}
            rotationIntensity={0.35}
            floatIntensity={0.35}
          >
            <mesh position={[0.8, 1.5, 0.6]} castShadow>
              <boxGeometry args={[0.1, 0.8, 0.2]} />
              <meshStandardMaterial 
                color="#555555"
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        )}
      </Canvas>
    </div>
  );
} 