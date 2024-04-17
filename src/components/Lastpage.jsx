 
import '../App.css' 
import { FaLocationArrow } from "react-icons/fa6";
function Lastpage() {
   
  return (
    <div className='w-full flex flex-col lg:h-[60vh]  overflow-hidden h-[40vh]'>
        <div className='flex lg:flex-row flex-col pt-20 lg:pt-0 relative h-[83%]  gap-5  lg:gap-0  items-center border-b border-black' >

          <div className='relative rounded-full  overflow-hidden parent px-6 '>
            <button className=' fbtn  lg:h-[20vh] lg:px-[100px] px-9 text-[40px] lg:text-[80px] font-medium  gap-5  flex items-center border-black rounded-full border hover:scale-[.9]'>INSTAGRAM <FaLocationArrow /></button>
           <div className='  lg:px-[100px] child absolute z-[2] bg-black  lg:h-[20vh] gap-5  flex items-center text-white px-9 text-[40px] lg:text-[80px] hover:scale-[.9] rounded-full font-medium'>INSTAGRAM <FaLocationArrow /></div>
            
          </div>
          <div className='relative rounded-full overflow-hidden parent  '>
            <button className=' fbtn  lg:h-[20vh] lg:px-[100px] px-9 text-[40px] lg:text-[80px] font-medium gap-5  flex items-center   border-black rounded-full border hover:scale-[.9]'>EMAIL <FaLocationArrow /></button>
           <div className='  lg:px-[100px] child absolute z-[2] bg-black  lg:h-[20vh] gap-5  flex items-center text-white px-9 text-[40px] lg:text-[80px] hover:scale-[.9] rounded-full font-medium'>EMAIL <FaLocationArrow /></div>
            
          </div>
           
            <div className='bg-black absolute bottom-[-100px]  h-[inherit] w-[inherit]'> </div>
        </div>
        <div className='flex items-center justify-between px-7   h-[17%]'>
          <h1>AXEL VANHESSCHE</h1>
          <img src="new.png" alt="" />
          <h1>2024 ©️ copyright </h1>
        </div>
    </div>
  )
}

export default Lastpage