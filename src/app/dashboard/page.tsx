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

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-2">
      {/* StatCard 1 */}
      <div className="w-full">
        <StatCard
          title="Students Population"
          primaryIcon={<User className="text-blue-600 w-4 h-4" />}
          dateRange="22 - 29 October 2023"
          details={[
            {
              title: "Total Population",
              amount: "175.00",
              changePercentage: 131,
              IconComponent: TrendingUp,
            },
            {
              title: "Males",
              amount: "175.00",
              changePercentage: 131,
              IconComponent: TrendingUp,
            },
            {
              title: "Females",
              amount: "147.00",
              changePercentage: -56,
              IconComponent: TrendingDown,
            },
          ]}
        />
      </div>
      <div className="w-full">
        <StatCard
          title="Cash Flow"
          primaryIcon={<DollarSign className="text-blue-600 w-4 h-4" />}
          dateRange="22 - 29 October 2023"
          details={[
            {
              title: "Money Received For Services",
              amount: "1000.00",
              changePercentage: 20,
              IconComponent: TrendingUp,
            },
            {
              title: "Expenses",
              amount: "200.00",
              changePercentage: -10,
              IconComponent: TrendingDown,
            },
          ]}
        />
      </div>
      <div className="w-full">
        <AlertCard />
      </div>
      <div className="w-full">
        <UpcomingPracticalSession/>
      </div>
    </div>
  );
};

export default Dashboard;
