"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell } from "lucide-react";
import Badge from "@mui/material/Badge";
const Header = () => {
  const [invisible, setInvisible] = useState(false);
  return (
    <div className="bg-white flex w-full z-40 p-2">
      <div className="flex-1">
        <div className="flex flex-row items-center ">
          <Image
            src="/driver.jpg"
            alt="driver"
            width={64}
            height={64}
            className="rounded-full"
          />
          <h4 className="font-semibold text-lg">ACCRA DRIVING SCHOOL</h4>
        </div>
      </div>

      <div className="flex flex-row  items-center mr-10 ">
        <Badge
          variant="dot"
          color="error"
          max={99}
          overlap="circular"
          invisible={invisible}
          className="w-10 h-10 rounded-full  border cursor-pointer gap-x-4 flex items-center justify-center"
        >
          <Bell className="w-4" />
        </Badge>

        <Avatar className="border w-10 h-10  cursor-pointer">
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
