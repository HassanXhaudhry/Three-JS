import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const AnimatedModelViewer = ({
  path,
  scale,
  initialRotation = [0, Math.PI / 2, 0]
}) => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    const loader = new GLTFLoader();
    let model;

    loader.load(
      path,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.set(...initialRotation);
        
        scene.add(model);

        setIsLoaded(true);

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, [path, scale, initialRotation]);

  return (
    <canvas
      ref={canvasRef}
      className={`canvas-style transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}
      style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-400px',
        zIndex: "1000",
        ...(window.innerWidth <= 768 && {
          top: '50%',
          left: '50%',
          bottom: 'unset',
          transform: 'translate(-50%, -50%)',
        }),
      }}
    />
  );
};

export default AnimatedModelViewer;