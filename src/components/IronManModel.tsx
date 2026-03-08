import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return mouse;
}

/* ── Particles ── */
function ParticleCloud({ count = 400 }) {
  const ref = useRef<THREE.Points>(null);
  const mouse = useMousePosition();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [new THREE.Color("#60d5ff"), new THREE.Color("#3a86ff"), new THREE.Color("#c8962d"), new THREE.Color("#ffffff")];
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      pos[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta) - 4;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015 + mouse.current.x * 0.2;
    ref.current.rotation.x = mouse.current.y * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.7} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ── Rings ── */
function EnergyRings() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1 + mouse.current.x * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 + mouse.current.y * 0.15;
  });
  const rings = [
    { r: 2.5, color: "#60d5ff", tilt: [1.2, 0, 0], opacity: 0.25 },
    { r: 3.2, color: "#3a86ff", tilt: [0.8, 0.5, 0.3], opacity: 0.2 },
    { r: 4.0, color: "#c8962d", tilt: [0.5, 1.0, 0], opacity: 0.3 },
  ];
  return (
    <group ref={groupRef} position={[1.5, 0, -2]}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={ring.tilt as [number, number, number]}>
          <torusGeometry args={[ring.r, 0.006, 16, 120]} />
          <meshStandardMaterial color={ring.color} emissive={ring.color} emissiveIntensity={2} toneMapped={false} transparent opacity={ring.opacity} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Hex Grid ── */
function HexGrid() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
      mat.opacity = 0.05 + Math.sin(state.clock.elapsedTime * 0.5 + i * 0.3) * 0.04;
    });
  });
  const hexes = useMemo(() => {
    const arr: { x: number; z: number }[] = [];
    for (let row = -6; row <= 6; row++)
      for (let col = -8; col <= 8; col++) {
        if (Math.random() > 0.4) arr.push({ x: col * 1.5, z: row * 1.3 + (col % 2 === 0 ? 0 : 0.65) });
      }
    return arr;
  }, []);
  return (
    <group ref={ref} position={[0, -4.5, -3]} rotation={[-0.3, 0, 0]}>
      {hexes.map((h, i) => (
        <mesh key={i} position={[h.x, 0, h.z]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.45, 6]} />
          <meshStandardMaterial color="#60d5ff" emissive="#60d5ff" emissiveIntensity={0.5} toneMapped={false} transparent opacity={0.06} wireframe />
        </mesh>
      ))}
    </group>
  );
}

/* ── Floating shards ── */
function TechShards() {
  return (
    <>
      {Array.from({ length: 18 }).map((_, i) => (
        <Float key={i} speed={0.5 + Math.random() * 1.2} floatIntensity={0.3 + Math.random() * 0.5} rotationIntensity={0.5}>
          <mesh position={[(Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, -3 + Math.random() * -4]}>
            {i % 2 === 0 ? <octahedronGeometry args={[0.03 + Math.random() * 0.05]} /> : <boxGeometry args={[0.02 + Math.random() * 0.04, 0.06 + Math.random() * 0.08, 0.01]} />}
            <meshStandardMaterial
              color={i % 3 === 0 ? "#60d5ff" : i % 3 === 1 ? "#3a86ff" : "#c8962d"}
              emissive={i % 3 === 0 ? "#60d5ff" : i % 3 === 1 ? "#3a86ff" : "#c8962d"}
              emissiveIntensity={2.5} toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.08} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[2, 0, 4]} intensity={0.8} color="#60d5ff" distance={12} />
      <pointLight position={[-3, 3, 2]} intensity={0.4} color="#3a86ff" distance={10} />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#c8962d" distance={8} />
      <ParticleCloud />
      <EnergyRings />
      <HexGrid />
      <TechShards />
    </>
  );
}

/* ── Cute Robot with face-tracking ── */
function CuteRobot() {
  const mouse = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const bobRef = useRef(0);

  useEffect(() => {
    let raf: number;
    const animate = () => {
      if (containerRef.current) {
        bobRef.current += 0.02;
        const bobY = Math.sin(bobRef.current) * 8;
        const bobRotate = Math.sin(bobRef.current * 0.7) * 2;

        // Face tracks pointer
        const rotY = mouse.current.x * 20;
        const rotX = mouse.current.y * -12;
        const tx = mouse.current.x * 15;
        const ty = mouse.current.y * -10 + bobY;

        containerRef.current.style.transform = `translate(${tx}px, ${ty}px) perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotate(${bobRotate}deg)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-end z-[5] pointer-events-none"
      style={{ transition: "transform 0.08s ease-out", right: "5%" }}
    >
      <div className="relative">
        {/* Glow layers */}
        <div className="absolute -inset-16 blur-[60px] opacity-25" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(200 90% 60% / 0.6), hsl(220 80% 60% / 0.2) 60%, transparent 80%)" }} />
        <div className="absolute -inset-8 blur-[30px] opacity-20" style={{ background: "radial-gradient(ellipse at 50% 70%, hsl(40 90% 50% / 0.3), transparent 60%)" }} />
        {/* Shadow underneath */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[60%] h-8 blur-2xl rounded-full opacity-30" style={{ background: "hsl(200 90% 60% / 0.4)" }} />
        <img
          src="/images/robot.png"
          alt="Cute AI Robot"
          className="h-[70vh] max-h-[650px] w-auto object-contain select-none"
          style={{ filter: "drop-shadow(0 0 40px rgba(96,213,255,0.3)) drop-shadow(0 0 80px rgba(58,134,255,0.15))" }}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function IronManScene() {
  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: "transparent", position: "absolute", inset: 0, zIndex: 1 }} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
      <CuteRobot />
    </div>
  );
}
