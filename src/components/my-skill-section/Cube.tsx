import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

type Props = {};

function Cube({}: Props) {
  const textRef = useRef<THREE.Object3D>();
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sign(state.clock.elapsedTime) * 4;
    }
  });
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial>
        <RenderTexture attach='map'>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <color attach='background' args={['blue']} />
          {/* Replace <Text> with the appropriate JSX element or component */}
          <Text fontSize={4} color='#555' ref={textRef}>
            Skills
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
