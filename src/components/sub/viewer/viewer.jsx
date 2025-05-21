import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import style from './viewer.module.css';
import ViewerHome from './home/ViewerHome';
import ViewerColor from './color/ViewerColor';
import ViewerSearch from './search/ViewerSearch';

export default function Viewer( props ) {
  const containerRef = useRef(null);
  const [sceneColor, setSceneColor] = useState('#000')
  const [isHome, setHome] = useState(false)
  const [isColor,setColor] = useState(false);
  const [isSearch,setSearch] = useState(false)
  const [isModel,setModel] = useState(null)
  const sceneRef = useRef(new THREE.Scene());
  const modelRef = useRef(null);
  const handleChildEvent = (home, model) => {
    setHome(home);
    setModel(model)
  }
  const handleColorEvent = (color) => {
    setColor(color)
  }
  const handleSearchEvent = (search) =>{
    setSearch(search)
  }
  useEffect(()=>{
    const scene = sceneRef.current;
    console.log(scene)
    const oldModel = scene.getObjectByName('model');
    if(oldModel) scene.remove(oldModel)
    const cube = new THREE.Mesh(
          new THREE.BoxGeometry(),
          new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
        );
      cube.name = 'model'; // ✅ 이름 설정!
      modelRef.current = cube
      scene.add(modelRef.current);
  console.log("모델 업데이트 후 scene:", scene);
  },[isModel])
  useEffect(() => {
    const scene = sceneRef.current
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
    renderer.autoClear = true
    container.appendChild(renderer.domElement);
    if(modelRef.current === null){
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
    );
    cube.name = 'model';
    modelRef.current = cube
    scene.add(modelRef.current);
    }
    
    scene.add(light);
    scene.background = new THREE.Color(sceneColor);
    const animate = () => {
      if(modelRef.current !== null){
        modelRef.current.rotation.y += 0.01;
      }
      renderer.clear(); // optional, 특히 post-processing 있을 때
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
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
    sceneRef.current.background = new THREE.Color(Math.random() * 0xffffff); // 랜덤색
  }
  return (
  <>
    <div ref={containerRef} className={style['viewer-container']} >
      {isHome && <ViewerHome props={handleChildEvent} />}  
      {isColor && <ViewerColor props={handleColorEvent} />}
      {isSearch && <ViewerSearch props={handleSearchEvent} />}
      <div className={style['icon-warpper']}>
        <div onClick={() => setHome(true)}>홈</div>
        <div>회전</div>
        <div onClick={() => setColor(true)}>색상</div>
        <div>보기</div>
        <div>정보</div>
        <div onClick={() => setSearch(true)}>지도</div>
      </div>
    </div>
  </>
  );
}