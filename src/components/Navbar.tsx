"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Bell, LogOut, Menu, Moon, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { setIsDarkMode } from "../state";
import Badge from "@mui/material/Badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLogoutMutation } from "@/state/api";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      console.log(response);

      //router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  return (
    <div className="flex justify-between items-center w-full mb-2">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 "
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500 " size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>

          <Badge
            variant="dot"
            color="error"
            max={99}
            overlap="circular"
            className="w-10 h-10 rounded-full border cursor-pointer flex items-center justify-center"
          >
            <Bell className="w-4" />
          </Badge>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-10 h-10 border cursor-pointer">
                <AvatarImage src="/driver.jpg" alt="profile" />
                <AvatarFallback className="bg-gray-200 text-gray-700">
                  EM
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-28 mr-2.5" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut />
                  LogOut
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href="/settings">
          <Settings size={24} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
