import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, BufferGeometry, Material, Group } from 'three'
import { useGLTF } from '@react-three/drei'

const ThreeScene = () => {
  const groupRef = useRef<Group>(null)
  const cube1Ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null)
  const cube2Ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null)
  const cube3Ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
    }
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x += delta * 0.2
      cube1Ref.current.rotation.y += delta * 0.1
      cube1Ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.x += delta * 0.15
      cube2Ref.current.rotation.z += delta * 0.1
      cube2Ref.current.position.y = Math.sin(state.clock.elapsedTime + 1) * 0.15
    }
    if (cube3Ref.current) {
      cube3Ref.current.rotation.y += delta * 0.2
      cube3Ref.current.rotation.z += delta * 0.15
      cube3Ref.current.position.y = Math.sin(state.clock.elapsedTime + 2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={cube1Ref} position={[-2, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial 
          color="#e5e7eb"
          metalness={0.1}
          roughness={0.9}
          envMapIntensity={0.3}
        />
      </mesh>
      <mesh ref={cube2Ref} position={[0, 0, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#f3f4f6"
          metalness={0.1}
          roughness={0.95}
          envMapIntensity={0.3}
        />
      </mesh>
      <mesh ref={cube3Ref} position={[2, 0, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
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