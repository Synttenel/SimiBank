import { useEffect, useState } from "react";

import tvMaze from './images/tv-maze-simi.mp4';
import tvBoz from './images/tv-boz.mp4';
import tvGalaxy from './images/tv-galaxy.mp4';
import tvRidge from './images/tv-ridge.mp4';
import tvGmod from './images/tv-gmod.mp4';
import tvSecret from './images/secret-simi.mp4';

import InsideInterface from "./InsideInterface";

interface Props{

}

function Inside({  }: Props){

  const [count, setCount] = useState(0);
  const [i, setI] = useState(0);
  const [videoArray, setVideoArray] = useState([
    {
      name: "tvGalaxy",
      vis: true,
    },
    {
      name: "tvBoz",
      vis: false,
    },
    {
      name: "tvMaze",
      vis: false,
    },
    {
      name: "tvRidge",
      vis: false,
    },
    {
      name: "tvGmod",
      vis: false,
    },
    {
      name: "tvSecret",
      vis: false,
    },
  ])
  const handleVideo = () => {
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    const currentIndex = i % videoArray.length;

    let currentVideo = document.getElementById(videoArray[i].name);
    let currentVideoName = videoArray[i].name;
    
    if (!currentVideo) return;
    currentVideo.currentTime = 0;
    currentVideo.play();

    setI(currentIndex);

    setVideoArray(prev => prev.map(object => ({
                ...object,
                vis: false
            })));
            setVideoArray(prev => prev.map(object => object.name === currentVideoName?{...object, vis: true}: object));

    setTimeout(() => {
      console.log(currentVideo.currentTime, "chegou ao fim")
      console.log(currentVideo.duration)
      setTimeout(() => {
        setI(prev => (prev + 1) % videoArray.length);
        console.log(currentVideo.id, videoArray, i);
        setCount(prev => prev + 1);
        return;
      }, currentVideo.duration * 1000)

    },1000)
    
    

  }
  useEffect(() => {
    handleVideo();
    
    
  },[count])

  return(
    <>

      <div className="relative">
      <InsideInterface />

      <video className="w-full rounded-2xl snap-center object-cover"
        autoPlay
        muted
        id="tvGalaxy"
        onClick={() => setCount(prev => prev + 1)}
        style={{display: videoArray[0].vis?"block":"none"}}
        >
        <source src={tvGalaxy} type="video/mp4" />
      </video>

      <video className="w-full rounded-2xl snap-center object-cover  "
        id="tvBoz"
        autoPlay
        muted
        style={{display: videoArray[1].vis?"block":"none"}}
        >
        <source src={tvBoz} type="video/mp4" />
      </video>

      <video className="w-full rounded-2xl snap-center object-cover  "
        id="tvMaze"
        autoPlay
        muted
        style={{display: videoArray[2].vis?"block":"none"}}
        >
        <source src={tvMaze} type="video/mp4" />
      </video>

      <video className="w-full rounded-2xl snap-center object-cover  "
        id="tvRidge"
        autoPlay
        muted
        style={{display: videoArray[3].vis?"block":"none"}}
        >
        <source src={tvRidge} type="video/mp4" />
      </video>

      <video className="w-full rounded-2xl snap-center object-cover  "
        id="tvGmod"
        autoPlay
        muted
        style={{display: videoArray[4].vis?"block":"none"}}
        >
        <source src={tvGmod} type="video/mp4" />
      </video>

      <video className="w-full rounded-2xl snap-center object-cover  "
        id="tvSecret"
        autoPlay
        muted
        style={{display: videoArray[5].vis?"block":"none"}}
        >
        <source src={tvSecret} type="video/mp4" />
      </video>
      </div>
    </>
  )
}

export default Inside;