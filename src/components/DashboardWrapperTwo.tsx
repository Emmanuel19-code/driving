"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import StoreProvider, { useAppSelector } from "@/app/redux";
import SidebarTwo from "./SidebarTwo";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed);
 

  return (
    <div className={` flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <SidebarTwo />
      <main
        className={`flex flex-col w-full h-full py-4 px-9 bg-gray-50 ${isSidebarCollapsed?"md:pl-24":"md:pl-72"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapperTwo = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapperTwo;