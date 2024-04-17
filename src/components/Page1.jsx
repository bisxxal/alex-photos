import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';
import { useGSAP } from "@gsap/react";
import { img } from '../assets'
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
function Page1() {
  const ref = useRef(null);
  
useGSAP(()=>{  
  gsap.from('.fimg', {
    y: 900,
    duration: 1,
    delay: 0.3,
    stagger:true
  });
 },{scope:ref})
 
  useEffect(() => {
   

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
        
      }
    });

    timeline.to('.ani', {
      fontSize: '50px',
      duration: 1
    });

 
  }, []);

  
  return (
    <div ref={ref}>
      <div onClick={()=> settoglge(true)} className={`  main  w-full lg:h-[500vh]  overflow-hidden ` }>
        <div className='navbar z-10 w-full fixed pl-[300px] pt-3 flex justify-between '>
          <div className='ani absolute left-7 text-[240px] lg:text-[400px] tracking-normal font-thin leading-none  '>
             
            <h1 className='h1'>AXEL</h1>
            
            
            <h1 className='h1'>VANHESSCHE</h1>
          
          </div>
          <div className=' hidden lg:flex justify-between ml-[60px] w-[20vw] items-end'>
            <h1   >PHOTOGRAPHER FROM FRANCE BASED IN PARIS</h1>
            <h1>LAST UPDATE FEB 2024</h1>
          </div>
          <div className=' hidden lg:flex justify-between pr-8 gap-2 items-end text-[25px]'>
            <h1>INDEX,</h1>
            <h1 className='text-gray-400'>WORK,</h1>
            <h1 className='text-gray-400'>GALLERY,</h1>
            <h1 className='text-gray-400'>ABOUT</h1>
          </div>
        </div>

        <div className="hero  w-full   bg-[#ffff] h-[80vh] lg:h-[100vh] gap-8 lg:gap-0 mt-16 flex flex-col-reverse lg:flex-row px-6">
          <div className='w-full lg:w-1/2 h-[100%]    flex items-end'>  
          <div className='w-[60%] lg:w-[30%] lg:h-[25%]  overflow-hidden mb-8 '>
             <img className='fimg w-full h-full object-cover' src={img.pg12} alt="" /></div>
            </div>
          <div className='w-full mt-[150px] lg:w-1/2 h-[100%] lg:mt-9 flex  justify-end items-center'> 
           <div className='w-[80%]    lg:w-[68%] overflow-hidden '>
             <img className='fimg w-full h-full object-cover' src={img.pg1} alt="" /></div>
            </div>
        </div>

        {/* //page3  */}

        <div    className="page3  w-full h-[40vh] lg:h-[85vh] mb-10   lg:bg-[#FFFF] flex justify-end lg:justify-start pr-10 lg:pr-[unset]">
        <img className='lg:ml-[60vh]  object-cover' src={img.pg2} alt="" />
        </div>
        {/* //page4 */}

        <div data-scroll   data-scroll-speed="-.1" className="page4  w-full h-[88vh]  px-[30px] bg-[#fff] lg:justify-between flex flex-col lg:flex-row">
          <div>
{/*  */}
        <img className='w-[70%] lg:w-full h-[90%] object-cover' src={img.pg3} alt="" />
          </div>
          <div className='flex  justify-end lg:block'>
        <img className='w-[50%]  lg:h-[44vh] lg:w-[18vw] object-cover' src={img.pg32} alt="" />

          </div>
        </div>
        {/* //page5 */}


        <div data-scroll   data-scroll-speed="-.3" className="page5 w-full lg:h-[205vh]  px-[30px] bg-[#ffff]  ">

          <div className='justify-between   h-[89vh] lg:h-[105vh] py-7 lg:py-[unset] flex flex-col gap-[40px] lg:gap-[unset] lg:flex-row w-full'>
           <div className='w-full lg:w-1/2  items-center flex  '>

        <img className='h-[45vh] lg:h-[48vh] lg:w-[15vw] object-cover' src={img.pg4} alt="" />
          </div >
          <div className='w-full lg:w-1/2  ml-9'>
        <img className=' w-  h-[50%] lg:h-[70vh] object-cover' src={img.pg42} alt="" />

          </div>
        </div>





          <div data-scroll   data-scroll-speed="-.3" className='justify-between  h-[89vh] lg:h-[105vh]  flex flex-col lg:flex-row   w-full'>
           <div className='w-full lg:w-1/2  items-center flex  '>

        <img className=' lg:h-[67vh] w-[50vw] lg:w-[22vw] object-cover' src={img.pg5} alt="" />
          </div >
          <div className='w-full lg:w-1/2 flex justify-end'>
        <img className=' w-  h-[80%] object-cover' src={img.pg52} alt="" />

          </div>
        </div>
 

        </div>


      </div>
    </div>
  );
}

export default Page1;
