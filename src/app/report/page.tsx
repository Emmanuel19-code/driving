"use client";
import React, { useEffect, useState } from "react";
import StatCard from "./StatCard";
import {
  User,
  Car,
  Fuel,
  DollarSign,
  TrendingDown,
  Users,
} from "lucide-react";
import { useGetReportSummaryQuery } from "@/state/api";

const ReportsPage = () => {
  const [reportData, setReportData] = useState<any>({});
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const { data: reportInfo, isLoading, isError } = useGetReportSummaryQuery();

  useEffect(() => {
    if (reportInfo?.data) {
      setReportData(reportInfo.data);
      setSelectedYears(Object.keys(reportInfo.data).sort().reverse());
    }
  }, [reportInfo]);

  const toggleYear = (year: string) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <main className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Reports Dashboard</h2>

      <section>
        <h3 className="text-lg font-semibold mb-2">Select Year(s)</h3>
        <div className="flex gap-4 flex-wrap">
          {Object.keys(reportData).map((year) => (
            <button
              key={year}
              onClick={() => toggleYear(year)}
              className={`px-4 py-1 rounded border ${
                selectedYears.includes(year)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </section>

      {selectedYears.map((year) => (
        <section key={year} className="space-y-6">
          <h3 className="text-xl font-semibold">Year: {year}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <StatCard
              title="Students Enrolled"
              value={reportData[year].students}
              icon={<User className="w-5 h-5" />}
            />
            <StatCard
              title="Male Students"
              value={reportData[year].male}
              icon={<User className="w-5 h-5 text-blue-600" />}
            />
            <StatCard
              title="Female Students"
              value={reportData[year].female}
              icon={<User className="w-5 h-5 text-pink-500" />}
            />
            <StatCard
              title="Instructors"
              value={reportData[year].instructors}
              icon={<Users className="w-5 h-5 text-orange-500" />}
            />
            <StatCard
              title="Revenue"
              value={`₵${reportData[year].revenue.toLocaleString()}`}
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title="Amount Left To Be Received"
              value={`₵${reportData[year].pending.toLocaleString()}`}
              icon={<TrendingDown className="w-5 h-5 text-red-600" />}
            />
            <StatCard
              title="Company Cars"
              value={reportData[year].cars}
              icon={<Car className="w-5 h-5" />}
            />
            <StatCard
              title="Fuel Loaded"
              value={`₵${reportData[year].fuel.toLocaleString()}`}
              icon={<Fuel className="w-5 h-5 text-indigo-600" />}
            />
          </div>

          <div className="mt-6">
            <h4 className="text-md font-semibold mb-2">Fuel Breakdown by Car</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(reportData[year]?.fuelByCar || {}).map(
                ([regNo, data]: any) => (
                  <div
                    key={`${year}-car-${regNo}`}
                    className="bg-white rounded shadow p-4 flex flex-col gap-2 text-sm"
                  >
                    <div className="font-semibold">{regNo}</div>
                    <div>Amount: ₵{parseFloat(data.amount).toLocaleString()}</div>
                    <div>Litres: {parseFloat(data.litres).toLocaleString()}L</div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default ReportsPage;
