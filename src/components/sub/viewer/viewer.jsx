import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import style from './viewer.module.css';

export default function Viewer() {
  const containerRef = useRef(null);
  const [sceneColor, setSceneColor] = useState('#000')
      const scene = new THREE.Scene();
      useEffect(()=>{
      scene.background = new THREE.Color(Math.random() * 0xffffff); // 랜덤색
        console.log(scene)
      },[sceneColor])
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const width = container.clientWidth;
    const height = container.clientHeight;


    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.AmbientLight(color, intensity);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    scene.background = new THREE.Color(sceneColor);
    scene.add(cube);
    scene.add(light);
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  window.addEventListener('resize', resize);
    return () => {
          window.addEventListener('resize', resize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);
  const onClickChangeColor = () => {
    scene.background = new THREE.Color(Math.random() * 0xffffff); // 랜덤색
  }
  return (
  <div ref={containerRef} className={style['viewer-container']} >
    <div className={style['icon-warpper']}>
      <div onClick={onClickChangeColor}>홈</div>
      <div>회전</div>
      <div>색생</div>
      <div>보기</div>
      <div>정보</div>
      <div>지도</div>
    </div>
  </div>
  );
}