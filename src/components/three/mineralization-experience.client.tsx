"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Group,
  InstancedMesh,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Object3D,
  PointLight,
} from "three";

gsap.registerPlugin(ScrollTrigger);

type ProgressRef = MutableRefObject<number>;

const orbitData = [
  { radius: 2.05, rotation: [0.2, 0.3, 0.1], speed: 0.62 },
  { radius: 2.35, rotation: [1.1, 0.2, 0.7], speed: -0.48 },
  { radius: 2.65, rotation: [0.45, 1.3, 0.3], speed: 0.38 },
  { radius: 2.92, rotation: [1.4, 0.75, 0.1], speed: -0.31 },
  { radius: 3.18, rotation: [0.8, 0.4, 1.25], speed: 0.25 },
] as const;

function AtomicNucleus({ progress }: { progress: ProgressRef }) {
  const group = useRef<Group>(null);
  const residue = useRef<InstancedMesh>(null);
  const mineral = useRef<InstancedMesh>(null);
  const residueMaterial = useRef<MeshPhysicalMaterial>(null);
  const mineralMaterial = useRef<MeshPhysicalMaterial>(null);
  const core = useRef<Mesh<BufferGeometry, MeshPhysicalMaterial>>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const atoms = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const ring = index < 10 ? 0.62 : index < 24 ? 1.02 : 1.3;
        const angle = index * 2.399963;
        const y = 1 - ((index + 0.5) / 34) * 2;
        const radius = Math.sqrt(1 - y * y) * ring;
        return {
          x: Math.cos(angle) * radius,
          y: y * ring,
          z: Math.sin(angle) * radius,
          size: 0.28 + (index % 5) * 0.018,
          phase: index * 0.73,
        };
      }),
    [],
  );

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const value = progress.current;
    const mineralized = MathUtils.smoothstep(value, 0.34, 0.86);
    const expansion = 1 + Math.sin(value * Math.PI) * 0.16;

    atoms.forEach((atom, index) => {
      const vibration = 1 + Math.sin(time * 1.8 + atom.phase) * 0.018;
      dummy.position.set(
        atom.x * expansion,
        atom.y * expansion,
        atom.z * expansion,
      );
      dummy.scale.setScalar(atom.size * vibration);
      dummy.updateMatrix();
      residue.current?.setMatrixAt(index, dummy.matrix);

      // Keep the mineral shell just outside the residue surface during the crossfade.
      dummy.scale.multiplyScalar(1.055);
      dummy.updateMatrix();
      mineral.current?.setMatrixAt(index, dummy.matrix);
    });

    if (residue.current) residue.current.instanceMatrix.needsUpdate = true;
    if (mineral.current) mineral.current.instanceMatrix.needsUpdate = true;
    if (residueMaterial.current) {
      residueMaterial.current.opacity = 1 - mineralized;
    }
    if (mineralMaterial.current) {
      mineralMaterial.current.opacity = mineralized;
      mineralMaterial.current.emissiveIntensity = 0.18 + mineralized * 0.65;
    }
    if (group.current) {
      group.current.rotation.y = time * 0.18;
      group.current.rotation.x = 0.18 + Math.sin(time * 0.24) * 0.08;
      group.current.scale.setScalar(0.96 + mineralized * 0.14);
    }
    if (core.current) {
      core.current.scale.setScalar(0.72 + mineralized * 0.34);
      core.current.material.opacity = 0.16 + mineralized * 0.26;
      core.current.material.emissiveIntensity = 0.5 + mineralized * 1.4;
    }
  });

  return (
    <group ref={group}>
      <instancedMesh ref={residue} args={[undefined, undefined, atoms.length]}>
        <sphereGeometry args={[1, 14, 14]} />
        <meshPhysicalMaterial
          ref={residueMaterial}
          clearcoat={0.28}
          color="#18251f"
          metalness={0.38}
          opacity={1}
          roughness={0.55}
          transparent
        />
      </instancedMesh>
      <instancedMesh ref={mineral} args={[undefined, undefined, atoms.length]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshPhysicalMaterial
          ref={mineralMaterial}
          clearcoat={1}
          clearcoatRoughness={0.08}
          color="#dfffe8"
          emissive="#31e86d"
          emissiveIntensity={0.2}
          iridescence={0.45}
          metalness={0.04}
          opacity={0}
          roughness={0.1}
          transparent
        />
      </instancedMesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.82, 3]} />
        <meshPhysicalMaterial
          clearcoat={1}
          color="#5cf08a"
          emissive="#24c75b"
          emissiveIntensity={0.7}
          opacity={0.18}
          roughness={0.05}
          transmission={0.34}
          transparent
          wireframe
        />
      </mesh>
    </group>
  );
}

function ElectronOrbit({
  progress,
  radius,
  rotation,
  speed,
  index,
}: {
  progress: ProgressRef;
  radius: number;
  rotation: readonly [number, number, number];
  speed: number;
  index: number;
}) {
  const orbit = useRef<Group>(null);
  const ring = useRef<Mesh<BufferGeometry, MeshBasicMaterial>>(null);
  const electron = useRef<Mesh<BufferGeometry, MeshPhysicalMaterial>>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const value = progress.current;
    const reaction = MathUtils.smoothstep(value, 0.12, 0.82);

    if (orbit.current) {
      orbit.current.rotation.z = time * speed + value * (index + 1) * 0.55;
      orbit.current.scale.setScalar(
        0.86 + reaction * 0.19 + Math.sin(time * 0.7 + index) * 0.012,
      );
    }
    if (ring.current) {
      ring.current.material.opacity = 0.12 + reaction * 0.22;
    }
    if (electron.current) {
      electron.current.material.emissiveIntensity =
        1.2 + reaction * 2.8 + Math.sin(time * 2.2 + index) * 0.3;
    }
  });

  return (
    <group ref={orbit} rotation={[...rotation]}>
      <mesh ref={ring}>
        <torusGeometry args={[radius, 0.012, 6, 128]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color={index % 2 ? "#baffcc" : "#5cf08a"}
          opacity={0.16}
          transparent
        />
      </mesh>
      <mesh ref={electron} position={[radius, 0, 0]}>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshPhysicalMaterial
          clearcoat={1}
          color="#effff3"
          emissive="#5cf08a"
          emissiveIntensity={1.8}
          roughness={0.04}
        />
      </mesh>
      <mesh position={[-radius, 0, 0]} scale={0.58}>
        <sphereGeometry args={[0.11, 12, 12]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color="#9dffb9"
          opacity={0.72}
          transparent
        />
      </mesh>
    </group>
  );
}

function AtomicShells({ progress }: { progress: ProgressRef }) {
  const shell = useRef<Group>(null);

  useFrame((state) => {
    if (!shell.current) return;
    const time = state.clock.elapsedTime;
    shell.current.rotation.y = -time * 0.12 + progress.current * 1.4;
    shell.current.rotation.x = time * 0.035 + progress.current * 0.6;
  });

  return (
    <group ref={shell}>
      {orbitData.map((orbit, index) => (
        <ElectronOrbit
          index={index}
          key={orbit.radius}
          progress={progress}
          radius={orbit.radius}
          rotation={orbit.rotation}
          speed={orbit.speed}
        />
      ))}
      <mesh>
        <icosahedronGeometry args={[3.45, 3]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color="#5cf08a"
          opacity={0.035}
          transparent
          wireframe
        />
      </mesh>
    </group>
  );
}

function CarbonParticles({ progress }: { progress: ProgressRef }) {
  const mesh = useRef<InstancedMesh>(null);
  const count = 96;
  const dummy = useMemo(() => new Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const angle = index * 2.39996;
        const radius = 3.4 + (index % 11) * 0.24;
        return {
          angle,
          x: Math.cos(angle) * radius + 3.8,
          y: Math.sin(angle * 1.4) * 2.8,
          z: Math.sin(angle) * radius,
          delay: (index % 19) / 19,
          size: 0.028 + (index % 5) * 0.012,
        };
      }),
    [],
  );

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;

    seeds.forEach((seed, index) => {
      const local = MathUtils.clamp(
        (progress.current - 0.12 - seed.delay * 0.28) / 0.58,
        0,
        1,
      );
      const eased = local * local * (3 - 2 * local);
      dummy.position.set(
        MathUtils.lerp(seed.x + Math.sin(time * 0.35 + seed.angle) * 0.16, 0, eased),
        MathUtils.lerp(seed.y + Math.cos(time * 0.4 + seed.angle) * 0.12, 0, eased),
        MathUtils.lerp(seed.z, 0, eased),
      );
      const scale = seed.size * (1 - MathUtils.smoothstep(local, 0.78, 1));
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(index, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial
        blending={AdditiveBlending}
        color="#c8ffd7"
        opacity={0.72}
        transparent
      />
    </instancedMesh>
  );
}

function Scene({
  progress,
  onReady,
}: {
  progress: ProgressRef;
  onReady: (invalidate: () => void) => void;
}) {
  const model = useRef<Group>(null);
  const reactiveLight = useRef<PointLight>(null);
  const mineralLight = useRef<PointLight>(null);
  const backLight = useRef<PointLight>(null);
  const { invalidate } = useThree();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const reaction = MathUtils.smoothstep(progress.current, 0.1, 0.9);

    if (model.current) {
      model.current.rotation.y = time * 0.1 + progress.current * 0.8;
      model.current.position.y = Math.sin(time * 0.48) * 0.05;
      model.current.scale.setScalar(0.9 + reaction * 0.09);
    }
    if (reactiveLight.current) {
      reactiveLight.current.position.x = -3 + Math.sin(time * 0.48) * 1.2;
      reactiveLight.current.position.y = -1 + Math.cos(time * 0.55) * 0.8;
      reactiveLight.current.intensity = 22 + reaction * 24;
    }
    if (mineralLight.current) {
      mineralLight.current.position.x = 2 + Math.cos(time * 0.4) * 0.9;
      mineralLight.current.intensity = 10 + reaction * 20;
    }
    if (backLight.current) {
      backLight.current.intensity = 8 + reaction * 28;
    }
  });

  useEffect(() => {
    onReady(invalidate);
    invalidate();
  }, [invalidate, onReady]);

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight color="#f4fff7" intensity={3.8} position={[4, 6, 5]} />
      <directionalLight color="#78ff9d" intensity={2.4} position={[-5, 1, 3]} />
      <pointLight ref={reactiveLight} color="#35f471" intensity={24} position={[-3, -1, 4]} />
      <pointLight ref={mineralLight} color="#ffffff" intensity={10} position={[2, -4, 2]} />
      <pointLight ref={backLight} color="#5cf08a" intensity={10} position={[1, 2, -4]} />
      <group ref={model} position={[0.8, 0, 0]}>
        <AtomicShells progress={progress} />
        <AtomicNucleus progress={progress} />
        <CarbonParticles progress={progress} />
      </group>
    </>
  );
}

export function MineralizationExperience() {
  const container = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const invalidateScene = useRef<() => void>(() => undefined);
  const [isVisible, setIsVisible] = useState(true);
  const registerInvalidate = useCallback((invalidate: () => void) => {
    invalidateScene.current = invalidate;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      progress.current = 0.82;
      invalidateScene.current();
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: "#mineralization-story",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.05,
      onUpdate: (self) => {
        progress.current = self.progress;
        invalidateScene.current();
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!container.current) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setIsVisible(
          entry.isIntersecting &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        ),
      { rootMargin: "15% 0px" },
    );
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="mineral-canvas" aria-hidden="true">
      <div className="mineral-canvas__optics">
        <span className="mineral-canvas__halo mineral-canvas__halo--one" />
        <span className="mineral-canvas__halo mineral-canvas__halo--two" />
        <span className="mineral-canvas__prism" />
      </div>
      <Canvas
        camera={{ fov: 42, position: [0, 0, 9] }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "demand"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene onReady={registerInvalidate} progress={progress} />
      </Canvas>
      <div className="mineral-canvas__glass" />
      <div className="mineral-canvas__grain" />
    </div>
  );
}
