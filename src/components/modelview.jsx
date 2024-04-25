import React, { Suspense } from "react";
import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./lights";
import Loader from "./loader";
import Mercedes from "./mercedes";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item, 
}) => {
  const isSmallDevice = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleControlEnd = () => {
    if (controlRef && controlRef.current) {
      const azimuthalAngle = controlRef.current.getAzimuthalAngle();
      setRotationState(azimuthalAngle);
    }
  };

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 6]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={handleControlEnd}
      />

      <group
        ref={groupRef}
        position={[0, 0, 0]}
        dispose={null}
        rotation={isSmallDevice ? [0, 0, 0] : [0, Math.PI / 2, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Mercedes scale={1.2} item={item} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
