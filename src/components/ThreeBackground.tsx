import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Trail } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Mesh, Points, BufferGeometry, PointsMaterial } from 'three';
import * as THREE from 'three';

// Animated distorted sphere
const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 100, 200]} scale={1.5} position={position} ref={meshRef}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

// Wireframe Torus
const WireframeTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// Rotating Dodecahedron
const RotatingDodecahedron = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={0.8}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
};

// Particle field
const ParticleField = () => {
  const pointsRef = useRef<Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Glowing Ring
const GlowingRing = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.05, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Rotating Cube Frame
const CubeFrame = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.004;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={1.2}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#ff0080"
          wireframe
          emissive="#ff0080"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00ffff" />
        <pointLight position={[10, 10, 5]} intensity={1} color="#ff00ff" />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#ff0080" />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Central animated spheres */}
        <AnimatedSphere position={[-3, 1, -2]} color="#00ffff" />
        <AnimatedSphere position={[3, -1, -3]} color="#8b00ff" />
        
        {/* Wireframe Torus */}
        <WireframeTorus position={[0, 0, -5]} color="#00ffff" />
        
        {/* Rotating geometries */}
        <RotatingDodecahedron position={[-4, -2, 0]} color="#ff0080" />
        <RotatingDodecahedron position={[4, 2, -1]} color="#8b00ff" />
        
        {/* Cube frames */}
        <CubeFrame position={[5, 0, -4]} />
        <CubeFrame position={[-5, 0, -3]} />
        
        {/* Glowing rings */}
        <GlowingRing position={[0, 0, -6]} color="#00ffff" />
        <GlowingRing position={[0, 0, -4]} color="#ff0080" />
        
        {/* Particle field */}
        <ParticleField />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
