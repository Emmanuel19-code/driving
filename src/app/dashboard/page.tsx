"use client";
import React from "react";
import StatCard from "./StatCard";
import {
  DollarSign,
  TrendingDown,
  TrendingUp,
  User,
} from "lucide-react";
import AlertCard from "./AlertCard";
import UpcomingPracticalSession from "./UpcomingPracticalSession";
import { useGetAmountYetToBeReceivedQuery, useGetPaymentForThisYearQuery, useGetStudentStatQuery } from "@/state/api";

const Dashboard = () => {
  const {
    data: studentStat,
    isError: isStudentError,
    isLoading: isStudentLoading,
  } = useGetStudentStatQuery();

  const {
    data: paymentStat,
    isError: isPaymentError,
    isLoading: isPaymentLoading,
  } = useGetPaymentForThisYearQuery();
  const {
    data: amountToBeReceived,
    isError: amountToBeReceivedError,
    isLoading: isamountLoading
  } = useGetAmountYetToBeReceivedQuery();
 
  
  if (isStudentLoading || isPaymentLoading) {
    return <div className="p-4 text-gray-600">Loading dashboard stats...</div>;
  }

  if (isStudentError || isPaymentError) {
    return (
      <div className="p-4 text-red-600">
        Failed to load dashboard stats. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-2">
      {/* StatCard 1: Student Stats */}
      <div className="w-full">
        <StatCard
          title="Students Population"
          primaryIcon={<User className="text-blue-600 w-4 h-4" />}
          dateRange={`${studentStat?.year || ""}`}
          details={[
            {
              title: "Total Population",
              amount: `${studentStat?.total ?? 0}`,
            },
            {
              title: "Males",
              amount: `${studentStat?.male ?? 0}`,
            },
            {
              title: "Females",
              amount: `${studentStat?.female ?? 0}`,
            },
          ]}
        />
      </div>

      {/* StatCard 2: Payment Stats */}
      <div className="w-full">
        <StatCard
          title="Cash Flow "
          primaryIcon={<DollarSign className="text-green-600 w-4 h-4" />}
          dateRange={`${new Date().getFullYear()}`}
          details={[
            {
              title: "Money Received For Services ",
              amount: `${Number(paymentStat?.totalReceived || 0).toLocaleString()}`,
              changePercentage: 20, // Optional: use real calc
              IconComponent: TrendingUp,
            },
            {
              title: "Money To Be Received For Services ",
              amount: `${Number(amountToBeReceived?.data || 0).toLocaleString()}`,
              changePercentage: 20, // Optional: use real calc
              IconComponent: TrendingUp,
            },
            {
              title: "Expenses ",
              amount: "0.00", // Replace with actual expenses if you have it
              changePercentage: 0,
              IconComponent: TrendingDown,
            },
          ]}
        />
      </div>

      {/* Alerts */}
      <div className="w-full">
        <AlertCard />
      </div>

      {/* Upcoming Practical */}
      <div className="w-full">
        <UpcomingPracticalSession />
      </div>
    </div>
  );
};

export default Dashboard;
