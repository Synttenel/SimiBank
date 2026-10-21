import { useState } from "react";

import type { SetStateAction } from "react";

import type { Dispatch } from "react";

import type { Screen } from "./types";


import tvToShop from './images/tv-to-shop-simi.mp4'
import tvToKitchen from './images/tv-to-kitchen-simi.mp4'
import tvToItems from './images/tv-to-items-simi.mp4'

import shopToTv from './images/shop-to-tv-simi.mp4'

import kitchenToTv from './images/kitchen-to-tv-simi.mp4'

import itemsToTv from './images/items-to-tv-simi.mp4'
import type { whereToGo } from "./whereToGo";

interface Props{
    onNavigate: Dispatch<SetStateAction<Screen>>,
    whereToGo: whereToGo,
    setWhereToGo: Dispatch<SetStateAction<whereToGo>>,
}

function Transition({ onNavigate, whereToGo, setWhereToGo }: Props){
  
    switch(whereToGo){
        case 'tvToShop':
            return(
            <video className="w-full  snap-center object-cover"
            autoPlay
            muted
            onEnded={() => onNavigate('shop')}>
                <source src={tvToShop} type="video/mp4" />
            </video>
            )
        case 'tvToKitchen':
            return(
            <video className="w-full snap-center object-cover"
            autoPlay
            muted
            onEnded={() => onNavigate('kitchen')}>
                <source src={tvToKitchen} type="video/mp4" />
            </video>
            )
        case 'tvToItems':
            return(
            <video className="w-full snap-center object-cover"
            autoPlay
            muted
            onEnded={() => onNavigate('items')}>
                <source src={tvToItems} type="video/mp4" />
            </video>

            )

        case 'shopToTv':
            return(
            
            <video className="w-full  snap-center object-cover"
            autoPlay
            muted
            onEnded={() => onNavigate('menu')}>
                <source src={shopToTv} type="video/mp4" />
            </video>
            
            )
        
        case 'kitchenToTv':
            return(
            <video className="w-full  snap-center object-cover"
            autoPlay
            muted
            onEnded={() => onNavigate('menu')}>
                <source src={kitchenToTv} type="video/mp4" />
            </video>
            
            )

        case 'itemsToTv':
            return(
            
            <video className="w-full  snap-center object-cover"
            autoPlay
            muted
            onEnded={() => onNavigate('menu')}>
                <source src={itemsToTv} type="video/mp4" />
            </video>
            )
    }
}

export default Transition;