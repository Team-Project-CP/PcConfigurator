"use client";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float, useGLTF } from "@react-three/drei";
import { useRef, useEffect, Suspense, useState } from "react";
import { PerspectiveCamera as PerspectiveCameraType, Object3D, Vector3, Raycaster, Vector2, Plane } from "three";
import * as THREE from "three";

interface PCViewerProps {
  selectedComponents: {
    cpu: any;
    gpu: any;
    ram: any;
    storage: any;
    motherboard: any;
    case: any;
    cooling: any;
    psu: any;
  };
}

// Компоненты для загрузки 3D моделей
function Model({ 
  url, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1 
}: { 
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const { scene } = useGLTF(url) as { scene: Object3D };
  return <primitive object={scene} position={position} rotation={rotation} scale={scale} />;
}

// Компонент для управления камерой
function CameraController({ cameraRef }: { cameraRef: React.RefObject<PerspectiveCameraType> }) {
  const [keys, setKeys] = useState({
    w: false,
    a: false,
    s: false,
    d: false
  });

  const { camera, scene, gl } = useThree();
  const raycaster = new Raycaster();
  const mouse = new Vector2();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const mouseDownTime = useRef<number>(0);
  const mouseDownPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Функция для плавного перемещения камеры
  const moveCameraToTarget = (targetPosition: Vector3) => {
    const startPosition = camera.position.clone();
    const startTime = Date.now();
    const duration = 1000; // Длительность анимации в миллисекундах

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Плавная интерполяция позиции
      camera.position.lerpVectors(startPosition, targetPosition, progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  // Функция для проверки, находится ли точка в пределах canvas
  const isPointInCanvas = (event: MouseEvent) => {
    const canvas = gl.domElement;
    const rect = canvas.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  };

  // Функция для получения нормализованных координат мыши относительно canvas
  const getNormalizedMousePosition = (event: MouseEvent) => {
    const canvas = gl.domElement;
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };

  // Обработчик нажатия кнопки мыши
  const handleMouseDown = (event: MouseEvent) => {
    if (!isPointInCanvas(event)) return;
    mouseDownTime.current = Date.now();
    mouseDownPosition.current = { x: event.clientX, y: event.clientY };
  };

  // Обработчик отпускания кнопки мыши
  const handleMouseUp = (event: MouseEvent) => {
    if (!isPointInCanvas(event)) return;

    const timeDiff = Date.now() - mouseDownTime.current;
    const distance = Math.sqrt(
      Math.pow(event.clientX - mouseDownPosition.current.x, 2) +
      Math.pow(event.clientY - mouseDownPosition.current.y, 2)
    );

    // Проверяем, был ли это клик (короткое нажатие без значительного перемещения)
    if (timeDiff < 200 && distance < 5) {
      getNormalizedMousePosition(event);
      raycaster.setFromCamera(mouse, camera);

      const intersectionPoint = new Vector3();
      if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
        const newPosition = intersectionPoint.clone().add(
          new Vector3(0, 0, 2)
        );
        moveCameraToTarget(newPosition);
      }
    }
  };

  // Обновляем плоскость при изменении позиции камеры
  useEffect(() => {
    const updatePlane = () => {
      // Обновляем нормаль плоскости, чтобы она всегда была перпендикулярна направлению камеры
      const cameraDirection = new Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      plane.normal.copy(cameraDirection);
      plane.constant = 0; // Плоскость проходит через начало координат
    };

    updatePlane();
  }, [camera]);

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [camera, gl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'w': setKeys(prev => ({ ...prev, w: true })); break;
        case 'a': setKeys(prev => ({ ...prev, a: true })); break;
        case 's': setKeys(prev => ({ ...prev, s: true })); break;
        case 'd': setKeys(prev => ({ ...prev, d: true })); break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'w': setKeys(prev => ({ ...prev, w: false })); break;
        case 'a': setKeys(prev => ({ ...prev, a: false })); break;
        case 's': setKeys(prev => ({ ...prev, s: false })); break;
        case 'd': setKeys(prev => ({ ...prev, d: false })); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const moveSpeed = 0.1;
    const moveCamera = () => {
      if (!cameraRef.current) return;

      const camera = cameraRef.current;
      const direction = new Vector3();
      const rotation = camera.rotation.clone();

      // Получаем направление камеры для горизонтального движения
      direction.set(0, 0, -1).applyQuaternion(camera.quaternion);
      direction.y = 0; // Ограничиваем движение по горизонтали
      direction.normalize();

      // Вычисляем боковое направление
      const right = new Vector3();
      const top = new Vector3();
      right.crossVectors(new Vector3(0, 1, 0), direction);
      top.crossVectors(new Vector3(1, 0, 0), direction);

   
    };

    const animationFrame = requestAnimationFrame(function animate() {
      moveCamera();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [keys, cameraRef]);

  return null;
}

export default function PCViewer({ selectedComponents }: PCViewerProps) {
  const cameraRef = useRef<PerspectiveCameraType>(null);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 8);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 0, 8]}
          fov={50}
        />
        <CameraController cameraRef={cameraRef} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={0}
          maxDistance={20}
          zoomSpeed={1.5}
          rotateSpeed={0.5}
          panSpeed={0.5}
          dampingFactor={0.05}
        />
        <Environment preset="city" />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        
        <Suspense fallback={null}>
          {/* Корпус ПК */}
          {selectedComponents.case && (
            <Float
              speed={1.5}
              rotationIntensity={0.2}
              floatIntensity={0.2}
            >
              <Model 
                url="/Models/cabinet.glb"
                position={[0, 0, 0]}
                scale={2.5}
              />
            </Float>
          )}

          {/* Материнская плата */}
          {selectedComponents.motherboard && (
            <Float
              speed={1.6}
              rotationIntensity={0.15}
              floatIntensity={0.15}
            >
              <Model 
                url="/Models/asus_z170-p_motherboard.glb"
                position={[0.3 , 1, -0.1]}
                scale={0.1}
                rotation={[1.57, 0, 1.5]}
              />
            </Float>
          )}

          {/* CPU */}
          {selectedComponents.cpu && (
            <Float
              speed={2}
              rotationIntensity={0.3}
              floatIntensity={0.3}
            >
              <Model 
                url="/Models/intel_cpu.glb"
                position={[0.25, 1.2, -0.1]}
                scale={0.1}
                rotation={[0, 0, 1.5]}
              />
            </Float>
          )}

          {/* GPU */}
          {selectedComponents.gpu && (
            <Float
              speed={1.8}
              rotationIntensity={0.25}
              floatIntensity={0.25}
            >
              <Model 
                url="/Models/nvidia_geforce_rtx_3080_founders_edition.glb"
                position={[-16.3, -13.7, -0.9]}
                scale={2}
                rotation={[1.6, 0, 1.6]}
              />
            </Float>
          )}

          {/* RAM */}
          {selectedComponents.ram && (
            <Float
              speed={2.2}
              rotationIntensity={0.35}
              floatIntensity={0.35}
            >
              <Model 
                url="/Models/crucial_8_gb_ddr4_2133_ram.glb"
                position={[0,0,0]}
                scale={0.15}
                rotation={[0, 0, 0]}
              />
            </Float>
          )}

          {/* Хранилище */}
          {selectedComponents.storage && (
            <Float
              speed={1.7}
              rotationIntensity={0.2}
              floatIntensity={0.2}
            >
              <Model 
                url="/Models/ssd_noname_m.2_256gb.glb"
                position={[0.2, 0.5, -0.2]}
                scale={0.05}
                rotation={[1.6, 0, 1.5]}
              />
            </Float>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
} 