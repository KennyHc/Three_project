import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, BufferGeometry, Material, Group } from 'three'
import { useGLTF } from '@react-three/drei'

const ThreeScene = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null)
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 100, 16, 1, 3]} />
        <meshStandardMaterial 
          color="#e5e7eb"
          metalness={0.1}
          roughness={0.9}
          envMapIntensity={0.3}
        />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#f3f4f6"
          metalness={0.1}
          roughness={0.95}
          envMapIntensity={0.3}
        />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial 
          color="#d1d5db"
          metalness={0.1}
          roughness={0.85}
          envMapIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

export default ThreeScene 