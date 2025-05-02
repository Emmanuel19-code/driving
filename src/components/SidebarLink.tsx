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
  const isActive = pathname === href || (pathname  === "/" && href === "/dashboard")
  return (
    <Link href={href}>
    <div className={`cursor-pointer flex items-center ${isCollapsed?"justify-center py-2":"justify-start px-8 py-4"}  gap-3  ${isActive?"bg-white text-[#302394]":""} `}>
        <Icon className={`w-5 h-5  ${isActive?"!text-[#302394]":"!text-white"}`}/>
        <span className={`${isCollapsed?"hidden":"block"} text-gray-700 font-medium`}>
           {label}
        </span>
    </div>
   </Link>
  )
}

export default SidebarLink