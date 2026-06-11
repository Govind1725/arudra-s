'use client'

import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingStars() {
  const stars = useMemo(() => {
    const positions = new Float32Array(300 * 3)
    const colors = new Float32Array(300 * 3)
    const sizes = new Float32Array(300)
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
      const color = new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.6)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      sizes[i] = Math.random() * 0.3 + 0.1
    }
    return { positions, colors, sizes }
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={stars.positions.length / 3}
          array={stars.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={stars.colors.length / 3}
          array={stars.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={stars.sizes.length}
          array={stars.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingDiamond() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    meshRef.current.rotation.y += 0.005
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.4, 16, 32]} scale={1.5}>
        <MeshDistortMaterial
          color="#FF6B9D"
          emissive="#FF6B9D"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
    </Float>
  )
}

function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
    meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.2
    meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Torus args={[1.2, 0.1, 16, 48]} scale={1.2}>
        <MeshDistortMaterial
          color="#4ECDC4"
          emissive="#4ECDC4"
          emissiveIntensity={0.2}
          transparent
          opacity={0.5}
          distort={0.2}
          speed={3}
          roughness={0.3}
          metalness={0.6}
        />
      </Torus>
    </Float>
  )
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[-3, 1, -2]}>
        <MeshDistortMaterial
          color="#A78BFA"
          emissive="#A78BFA"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.3}
        />
      </Sphere>
    </Float>
  )
}

function Shapes() {
  return (
    <>
      <FloatingDiamond />
      <FloatingRing />
      <Globe />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B9D" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ECDC4" />
          <pointLight position={[0, 0, 10]} intensity={0.3} color="#FFB347" />
          <FloatingStars />
          <Shapes />
        </Suspense>
      </Canvas>
    </div>
  )
}
