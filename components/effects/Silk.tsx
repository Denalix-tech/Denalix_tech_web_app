"use client";

import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import "./Silk.css";

const VERT = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const FRAG = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3 uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;
uniform float uAspect;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2 r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 aspectCorrectedUv = vec2((vUv.x - 0.5) * max(uAspect, 1.0) + 0.5, (vUv.y - 0.5) * max(1.0 / uAspect, 1.0) + 0.5);
  vec2 uv = rotateUvs(aspectCorrectedUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

export function Silk({
  speed = 1.5,
  scale = 1,
  color = "#0EA5E9",
  noiseIntensity = 1.2,
  rotation = 0,
  className = ""
}: SilkProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const propsRef = useRef({ speed, scale, color, noiseIntensity, rotation });
  propsRef.current = { speed, scale, color, noiseIntensity, rotation };

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);

    const initial = propsRef.current;
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: initial.speed },
        uScale: { value: initial.scale },
        uNoiseIntensity: { value: initial.noiseIntensity },
        uColor: { value: new Color(initial.color) },
        uRotation: { value: initial.rotation },
        uAspect: { value: 1 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      program.uniforms.uAspect.value = width / Math.max(height, 1);
    }
    window.addEventListener("resize", resize);
    resize();

    let animateId = 0;
    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      const current = propsRef.current;
      program.uniforms.uTime.value = t * 0.0002 * current.speed;
      program.uniforms.uSpeed.value = current.speed;
      program.uniforms.uScale.value = current.scale;
      program.uniforms.uNoiseIntensity.value = current.noiseIntensity;
      program.uniforms.uRotation.value = current.rotation;
      program.uniforms.uColor.value = new Color(current.color);
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ctnDom} className={`silk-container ${className}`.trim()} />;
}
