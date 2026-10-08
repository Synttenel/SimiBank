import { useState } from "react";

import bgIntro from './images/intro-simi.mp4'

interface Props{

}

function Inside({  }: Props){

  return(
    <>
      <video className="w-full min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center object-cover "
        loop
        autoPlay
        muted
        >
        <source src={bgIntro} type="video/mp4"/>
        </video>
    </>
  )
}

export default Inside;