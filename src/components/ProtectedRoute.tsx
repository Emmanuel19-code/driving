"use client";
import { useAppSelector } from "@/app/redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true); // trigger after component mounts
  }, []);

  useEffect(() => {
    if (isHydrated && !accessToken) {
      router.replace("/login");
    }
  }, [isHydrated, accessToken, router]);

  // Wait until redux-persist is hydrated
  if (!isHydrated) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
