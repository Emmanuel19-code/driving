"use client";
import React from "react";
import Navbar from "./Navbar";
import SidebarTwo from "./SidebarTwo";
import useIdleLock from "@/hooks/useIdleLock";
import IdleLockModal from "@/components/IdleLockModal";
import StoreProvider, { useAppSelector } from "@/app/redux";
import ProtectedRoute from "./ProtectedRoute";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const { isLocked, unlock } = useIdleLock(5 * 60 * 1000); // 5 minutes

  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen relative">
      <SidebarTwo />

      <main
        className={`flex flex-col w-full h-full py-4 px-9 bg-gray-50 transition-all duration-200 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        } ${isLocked ? "pointer-events-none opacity-50" : ""}`}
      >
        <Navbar />
        {children}
      </main>

      <IdleLockModal open={isLocked} onUnlock={unlock} />
    </div>
  );
};


const DashboardWrapperTwo = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ProtectedRoute>
        <DashboardLayout>{children}</DashboardLayout>
      </ProtectedRoute>
    </StoreProvider>
  );
};


export default DashboardWrapperTwo;
