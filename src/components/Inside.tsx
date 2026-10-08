import { useState } from "react";

import tvMaze from './images/tv-maze-simi.mp4';
import tvBoz from './images/tv-boz.mp4';
import tvGalaxy from './images/tv-galaxy.mp4';
import tvRidge from './images/tv-ridge.mp4';
import tvGmode from './images/tv-gmod.mp4';
import tvSecret from './images/secret-simi.mp4';

interface Props{

}

function Inside({  }: Props){

  return(
    <>
      <video className="w-full rounded-2xl snap-center object-cover  "
        loop
        autoPlay
        muted
        >
        <source src={tvGalaxy} type="video/mp4"/>
        </video>
    </>
  )
}

export default Inside;