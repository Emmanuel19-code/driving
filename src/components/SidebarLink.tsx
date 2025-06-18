import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface SidebarLinkProps
 {
    href:string,
    icon:LucideIcon,
    label:string,
    isCollapsed:boolean
 }

const SidebarLink = ({href,icon:Icon,label,isCollapsed}:SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname  === "/" && href === "/dashboard") || (pathname === "/students/registerStudent" && href === "/students") || (pathname === "/serviceType/registerService" && href === "/serviceType") || (pathname === "/companyCars/registarCar" && "/companyCars")
  return (
    <Link href={href}>
    <div className={`cursor-pointer flex items-center ${isCollapsed?"justify-center py-2":"justify-start px-8 py-2"}  gap-3 rounded  ${isActive?"bg-white text-[#302394]":""} `}>
        <Icon className={`w-4 h-5  ${isActive?"!text-[#302394]":"!text-white"}`}/>
        <span className={`${isCollapsed?"hidden":"block"} ${isActive && "!text-[#302394]"} text-white `}>
           {label}
        </span>
    </div>
   </Link>
  )
}

export default SidebarLink