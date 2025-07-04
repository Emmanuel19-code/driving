"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StoreProvider from "@/app/redux";
import ProtectedRoute from "./ProtectedRoute";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gray-100 w-full h-screen">
      <Sidebar />
      <main className="flex flex-col w-full  ">
        <Header />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ProtectedRoute>
        <DashboardLayout>{children}</DashboardLayout>
      </ProtectedRoute>
    </StoreProvider>
  );
};

export default DashboardWrapper;
