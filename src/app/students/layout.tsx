import DashboardWrapperTwo from "@/components/DashboardWrapperTwo";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardWrapperTwo>{children}</DashboardWrapperTwo>;
};

export default layout;
