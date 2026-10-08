import { useState } from "react";

import bgTvBoz from './images/tv-boz.mp4'

interface Props{

}

function Inside({  }: Props){

  return(
    <>
      <video className="w-200 min-w[800px] md:w-[100%] md:h-84  h-42 rounded-2xl snap-center object-cover "
        loop
        autoPlay
        muted
        >
        <source src={bgTvBoz} type="video/mp4"/>
        </video>
    </>
  )
}

export default Inside;