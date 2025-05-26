import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CalendarRange,
  Car,
  CircleDollarSign,
  CreditCard,
  Layout,
  Notebook,
  SlidersHorizontal,
  User,
  User2,
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  

  const sidebarClassNames = ` ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } transition-all duration-300 bg-[#302394] h-screen fixed overflow-y-auto scrollbar-hide `;

  return (
    <div className={sidebarClassNames}>
      <div className="mt-14 px-4 py-2">
        <div className="flex justify-end">
          {isSidebarCollapsed ? (
            <ArrowRightCircle className="text-white" onClick={toggleSidebar} />
          ) : (
            <ArrowLeftCircle className="text-white" onClick={toggleSidebar} />
          )}
        </div>
        <div>
          {!isSidebarCollapsed && <h4 className="text-slate-400 ">OVERVIEW</h4>}

          <div className="flex-grow mt-4 ">
            <SidebarLink
              href="/"
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
              href="/theoryandpractical"
              icon={Car}
              label="Theory/Practical"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/companyCars"
              icon={Car}
              label="Company Cars"
              isCollapsed={isSidebarCollapsed}
            />
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
              href="/schedules"
              icon={CalendarRange}
              label="Schedules"
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
    </div>
  );
};

export default Sidebar;
