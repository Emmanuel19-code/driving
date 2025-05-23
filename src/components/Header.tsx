"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell } from "lucide-react";
import Badge from "@mui/material/Badge";
const Header = () => {
  const [invisible, setInvisible] = useState(false);
  return (
    <div className="bg-white  w-full z-40 px-4 py-1 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
      {/* Left side */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Image
            src="/driver.jpg"
            alt="driver"
            width={50}
            height={50}
            className="rounded-full"
          />
        <h4 className="font-semibold text-sm sm:text-lg whitespace-nowrap truncate">
          ACCRA DRIVING SCHOOL
        </h4>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 sm:gap-4 ml-auto">
        <Badge
          variant="dot"
          color="error"
          max={99}
          overlap="circular"
          invisible={invisible}
          className="w-10 h-10 rounded-full border cursor-pointer flex items-center justify-center"
        >
          <Bell className="w-4" />
        </Badge>

        <Avatar className="w-10 h-10 border cursor-pointer">
          <AvatarImage src="/driver.jpg" alt="profile" />
          <AvatarFallback className="bg-gray-200 text-gray-700">
            EM
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
