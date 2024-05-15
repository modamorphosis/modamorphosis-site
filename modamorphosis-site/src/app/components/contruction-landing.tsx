"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { NearestFilter, TextureLoader, Vector2 } from "three";

const FullScreenPlane = () => {
  const viewport = useThree((state) => state.viewport);
  const texture = useLoader(TextureLoader, "/img/MM_BG.png");

  // Set texture filtering to nearest-neighbor here
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;

  const resolution = new Vector2(viewport.width, viewport.height);

  const ref = useRef<THREE.ShaderMaterial>(null);

  const uniforms = {
    u_texture: { type: "t", value: texture },
    u_resolution: { type: "vec2", value: resolution },
    u_time: { type: "float", value: 0 },
  };

  const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;

  const fragmentShader = `
  precision highp float;

    uniform sampler2D u_texture;
    uniform vec2 u_resolution;
    uniform float u_time;
    varying vec2 vUv;

    // MTAT.03.015 Computer Graphics
    // https://courses.cs.ut.ee/2013/cg/
    //
    // Basic ripple effect example

    // Params = (wave frequency in Hz, number of waves per unit distance)
    vec2 params = vec2(2.5, 10.0);
      
    // Simple circular wave function
    float wave(vec2 pos, float t, float freq, float numWaves, vec2 center) {
      float d = length(pos - center);
      d = log(1.0 + exp(d));
      return 1.0/(1.0+20.0*d*d) *
          sin(2.0*3.1415*(-numWaves*d + t*freq));
    }

    // This height map combines a couple of waves
    float height(vec2 pos, float t) {
      float w;
      w = wave(pos, t, params.x, params.y, vec2(0.5, -0.5));
      w += wave(pos, t, params.x, params.y, -vec2(0.5, -0.5));
      return w;
    }

    // Discrete differentiation to calculate normals
    vec2 normal(vec2 pos, float t) {
      return vec2(height(pos - vec2(0.01, 0), t) - height(pos, t), 
                  height(pos - vec2(0, 0.01), t) - height(pos, t));
    }

    void main() {
      // Ensure params are set correctly for the wave calculations
      params = vec2(1.5, 3.0);
      
      vec2 uv = vUv;
      vec2 uvn = 2.0 * uv - vec2(1.0);	
      uv += normal(uvn, u_time*0.1);
      
      gl_FragColor = texture2D(u_texture, uv);
    }`;

  useFrame((state) => {
    if (ref.current) {
      ref.current.uniforms.u_time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[viewport.width * 1.2, viewport.height * 1.2, 1]}>
      <planeBufferGeometry attach="geometry" />
      <shaderMaterial
        ref={ref}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};

const ConstructionLanding = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 2, 10]} />
        <FullScreenPlane />
      </Canvas>
    </div>
  );
};

export default ConstructionLanding;
