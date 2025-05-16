import { useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'



const Sidebar = () => {
   const dispatch = useDispatch();
   const isSidebarCollapsed = useAppSelector(
    (state)=>state.global.isSidebarCollapsed
   );
   const toggleSidebar = ()=>{
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
   }
   console.log(isSidebarCollapsed);
   
   const sidebarClassNames = ` ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  }  transition-all duration-300 bg-[#302394]  h-screen fixed`;
    return (
      <div className={sidebarClassNames}>
         <div className='mt-12 px-4 py-2'>
          <div className='flex justify-end'>
            {
              isSidebarCollapsed ? <ArrowRightCircle className='text-white' onClick={toggleSidebar}/> : <ArrowLeftCircle className='text-white' onClick={toggleSidebar}/>
            }
          </div>
            <div>
              {
                !isSidebarCollapsed && <h4 className='text-slate-400 '>OVERVIEW</h4>
              }
                
                <div>
                   
                </div>
            </div>
         </div>
      </div>
  )
}

export default Sidebar