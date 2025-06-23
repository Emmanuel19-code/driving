"use client";
import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CalendarRange,
  Car,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Fuel,
  Layout,
  Notebook,
  SlidersHorizontal,
  Timer,
  User,
  User2,
} from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isPayrollOpen, setIsPayrollOpen] = useState(false);
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarWidth = isSidebarCollapsed ? "w-16" : "w-72";

  return (
    <div
      className={`bg-[#302394] ${sidebarWidth} min-h-screen transition-all duration-300 overflow-y-auto scrollbar-hide`}
    >
      <div className=" px-4 py-2">
        <div className="flex justify-end">
          {isSidebarCollapsed ? (
            <ArrowRightCircle
              className="text-white cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <ArrowLeftCircle
              className="text-white cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>
        {!isSidebarCollapsed && (
          <h4 className="text-slate-400 mt-4">OVERVIEW</h4>
        )}
        <div className="flex flex-col mt-4 gap-2">
          <SidebarLink
            href="/dashboard"
            icon={Layout}
            label="Dashboard"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/instructors"
            icon={User2}
            label="Instructors/Admins"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/students"
            icon={User2}
            label="Students"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/studentStatus"
            icon={Car}
            label="Student Status"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/serviceType"
            icon={Car}
            label="Services"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/companyCars"
            icon={Car}
            label="Company Cars"
            isCollapsed={isSidebarCollapsed}
          />
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => setIsPayrollOpen(!isPayrollOpen)}
          >
            {!isSidebarCollapsed && (
              <h4 className="text-slate-400">Employee Payment</h4>
            )}

            <ChevronDown
              className={`text-gray-500 transition-transform duration-200 ${
                isPayrollOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isPayrollOpen && (
            <div className="">
              <SidebarLink
                href="/payroll"
                icon={Car}
                label="Payroll"
                isCollapsed={isSidebarCollapsed}
              />
              <SidebarLink
                href="/deductionManagement"
                icon={Car}
                label="Set Deductions"
                isCollapsed={isSidebarCollapsed}
              />
              {/* Add more submenu items here if needed */}
            </div>
          )}
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={() => setIsTransactionsOpen(!isTransactionsOpen)}
          >
            {!isSidebarCollapsed && (
              <h4 className="text-slate-400">Transactions</h4>
            )}

            <ChevronDown
              className={`text-gray-500 transition-transform duration-200 ${
                isTransactionsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isTransactionsOpen && (
            <>
              <SidebarLink
                href="/payment"
                icon={CreditCard}
                label="Payments"
                isCollapsed={isSidebarCollapsed}
              />
              <SidebarLink
                href="/expense"
                icon={CircleDollarSign}
                label="Expenses"
                isCollapsed={isSidebarCollapsed}
              />
              <SidebarLink
                href="/fuel"
                icon={Fuel}
                label="Fuel"
                isCollapsed={isSidebarCollapsed}
              />
            </>
          )}

          <SidebarLink
            href="/schedules"
            icon={CalendarRange}
            label="Schedules"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/timeSlots"
            icon={Timer}
            label="Time Slots"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/reports"
            icon={Notebook}
            label="Reports"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/users"
            icon={User}
            label="Users"
            isCollapsed={isSidebarCollapsed}
          />
          <SidebarLink
            href="/settings"
            icon={SlidersHorizontal}
            label="Settings"
            isCollapsed={isSidebarCollapsed}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
