import { LucideIcon } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SidebarLinkProps {
    href:string,
    icon:LucideIcon,
    label:string,
    isCollapsed:boolean
}

const SidebarLinkTwo = ({href,icon:Icon,label,isCollapsed}:SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname  === "/" && href === "/dashboard") || (pathname === "/students/registerStudent" && href === "/students") || (pathname === "/serviceType/registerService" && href === "/serviceType") || (pathname === "/companyCars/registarCar" && "/companyCars")

  return (
    <Link href={href}>
     <div className={`cursor-pointer flex items-center ${isCollapsed?"justify-center py-4":"justify-start px-8 py-4"} hover:text-blue-500 gap-3 transition-colors ${isActive?"bg-blue-200 text-white":""} `}>
         <Icon className='w-6 h-6 !text-gray-700'/>
         <span className={`${isCollapsed?"hidden":"block"} text-sm text-gray-700 font-medium`}>
            {label}
         </span>
     </div>
    </Link>
  )
}

export default SidebarLinkTwo