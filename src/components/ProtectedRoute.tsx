"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/redux";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
  const accessToken = useAppSelector((state) => state.global.accessToken);

  useEffect(() => {
    if (!accessToken) {
      router.replace("/");
    }
  }, [accessToken, router]);

  if (!accessToken) return null; 

  return <>{children}</>;
};

export default ProtectedRoute;
