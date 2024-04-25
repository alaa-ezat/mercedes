import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import ModelView from "./modelview";
import { models } from "../constants"; 

const Model = () => {
  const [model, setModel] = useState({
    title: "SL63 AMG",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
  });
  
  // References for the animation frame and WebGL group
  const myAnimationFrameId = useRef(null);
  const small = useRef(new THREE.Group());

  // Handling animation
  useEffect(() => {
    const animate = () => {
      // Any animation logic goes here
      myAnimationFrameId.current = requestAnimationFrame(animate);
    };
    myAnimationFrameId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(myAnimationFrameId.current);
    };
  }, []);

  // Handling resource cleanup
  useEffect(() => {
    return () => {
      // Dispose geometries, materials, textures
      small.current.children.forEach(child => {
        if (child.geometry) {
          child.geometry.dispose();
        }
        if (child.material) {
          child.material.dispose();
        }
      });
    };
  }, []);


  

  // GSAP animation for headings
  useEffect(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-2">
          <div className="w-full h-[75vh] md:h-[75vh] overflow-hidden relative">
            <ModelView 
              index={1}
              groupRef={small}
              item={model}
            />
            <Canvas 

              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;