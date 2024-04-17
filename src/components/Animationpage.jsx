import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../App.css'
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from 'locomotive-scroll';
import { img } from '../assets';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function animation() {
const ref = useRef();

useGSAP(()=>{
 var t1 = gsap.timeline({

    scrollTrigger:{
        trigger:'.main',
        start:'50% 50%',
        end:'250% 50%',
        scrub:true,
        pin:true,
      
    }
 })
t1.to('.svg ',{
    maskSize:'480%'
},'a')
t1.to('.img',{
     
    backgroundSize:'100%',
},'a')
t1.from('.fst', {
   
    y: 180,           
    duration: 1,     
    delay: 1,       
    stagger: true  
});


t1.to('.svg2',{
    maskSize:'480%'
},'b')
t1.to('.img2',{
     
    backgroundSize:'100%',
},'b')
t1.from('.snd', {
   
    y: 180,           
    duration: 1,     
    delay: 1,       
    stagger: true  
});
},{scope:ref})
return (
    <div ref={ref}>
        <div className="main w-full h-screen">
            <div className="svg w-full h-screen relative ">
                <div className='absolute flex flex-col lg:flex-row bottom-[30vh] lg:bottom-[20vh] left-[6%] lg:left-[9%] overflow-hidden   '>

                    <h1 className='text-[70px] lg:text-[140px] fst leading-none   h  text-white font-semibold  '>ROAD </h1>
                    <h1 className='text-[70px] lg:text-[140px] fst leading-none   h  text-white font-semibold  '> TRIP</h1>

                </div>
                <div className="img bg-[url(ani1.avif)] bg-cover bg-center bg-no-repeat w-full  h-full">
                    <div className="svg2 w-full h-screen relative ">

                    <div className='absolute flex flex-col lg:flex-row bottom-[30vh] lg:bottom-[20vh] left-[6%] lg:left-[9%] overflow-hidden   '>

                        <h1 className='text-[70px] lg:text-[140px] snd leading-none   h  text-white font-semibold  '>SUMMER </h1>
                        <h1 className='text-[70px] lg:text-[140px] snd leading-none   h  text-white font-semibold  '> POOL</h1>

                        </div>
                        <div className={`img2 bg-[url(ani23.avif)] bg-cover bg-center bg-no-repeat w-full  h-full`}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default animation