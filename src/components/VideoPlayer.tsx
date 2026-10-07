import { useEffect, useState } from "react";

import bgSunny from './images/sunny-simi.mp4'
import bgLightSnow from './images/light-snow-simi.mp4'
import bgLightRain from './images/light-rain-simi.mp4'


interface Props{
    currentCanvas: String,
}

function VideoPlayer({ currentCanvas }: Props){
  
  const [videoVis, setVideoVis] = useState([
    {
        name: "lightSnow",
        vis: true,
    },
    {
        name: "lightRain",
        vis: false,
    },
    {
        name: "sunny",
        vis: false,
    },
  ])

  useEffect(() => {
    console.log(currentCanvas, videoVis)
    switch(currentCanvas){
        case 'lightSnow':

            setVideoVis(prev => prev.map(object => ({
                ...object,
                vis: false
            })));
            setVideoVis(prev => prev.map(object => object.name === "lightSnow"?{...object, vis: true}: object));
        break;
        case 'lightRain':

            setVideoVis(prev => prev.map(object => ({
                ...object,
                vis: false
            })));
            setVideoVis(prev => prev.map(object => object.name === "lightRain"?{...object, vis: true}: object));
        break;
        case 'sunny':
            
            setVideoVis(prev => prev.map(object => ({
                ...object,
                vis: false
            })));
            setVideoVis(prev => prev.map(object => object.name === "sunny"?{...object, vis: true}: object));
        break;
            
    }
  },[currentCanvas])
          
       
    
  return(
    <>
      <video className="w-full min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center object-cover "
        loop
        autoPlay
        muted
        style={{visibility:videoVis[0].vis?"visible": "hidden",
            display:videoVis[0].vis?"block": "none",
        }}>
        <source src={bgLightSnow} type="video/mp4"/>
        </video>

    <video className="w-full min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center object-cover "
        loop
        autoPlay
        muted
        style={{visibility:videoVis[1].vis?"visible": "hidden",
            display:videoVis[1].vis?"block": "none"
        }}>
        <source src={bgLightRain} type="video/mp4"/>
        </video>



    <video className="w-full min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center object-cover "
        loop
        autoPlay
        muted
        style={{visibility:videoVis[2].vis?"visible": "hidden",
            display:videoVis[2].vis?"block": "none"
        }}>
        <source src={bgSunny} type="video/mp4"/>
        </video>
    </>
  )

  
}

export default VideoPlayer;