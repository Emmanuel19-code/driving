"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  CalendarRange,
  Car,
  CircleDollarSign,
  CreditCard,
  Fuel,
  Layout,
  Menu,
  Notebook,
  SlidersHorizontal,
  Timer,
  User,
  User2,
} from "lucide-react";
import React, { useState } from "react";
import SidebarLinkTwo from "./SidebarLinkTwo";
import Image from "next/image";

const SidebarTwo = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-4 ${
          isSidebarCollapsed ? "px-5" : "px-4"
        }`}
      >
        <div>
            <Image src="/driver.jpg" alt="" width={50} height={50}/>
        </div>
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          }font-extrabold text-lg`}
        >
          DRVING SYSTEM
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-grow mt-4 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide">
        <SidebarLinkTwo
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/instructors"
          icon={User2}
          label="Instructors/Admins"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/students"
          icon={User2}
          label="Students"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/studentStatus"
          icon={Car}
          label="Student Status"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/serviceType"
          icon={Car}
          label="Services"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/companyCars"
          icon={Car}
          label="Company Cars"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLinkTwo
          href="/payroll"
          icon={Car}
          label="Payroll"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/deductionManagement"
          icon={Car}
          label="Set Deductions"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLinkTwo
          href="/payment"
          icon={CreditCard}
          label="Payments"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/expense"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/fuel"
          icon={Fuel}
          label="Fuel Records"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLinkTwo
          href="/schedules"
          icon={CalendarRange}
          label="Schedules"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/timeSlots"
          icon={Timer}
          label="Setting Time For Practicals"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/report"
          icon={Notebook}
          label="Reports"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkTwo
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <div className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
        <p className="text-center text-xs text-gray-500 ">
          {" "}
          &copy; 2024 Emstock
        </p>
      </div>
    </div>
  );
};

export default SidebarTwo;
