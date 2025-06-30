"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", revenue: 5000, expense: 2000 },
  { month: "Feb", revenue: 7000, expense: 3000 },
  { month: "Mar", revenue: 6000, expense: 2500 },
  { month: "Apr", revenue: 8000, expense: 4000 },
];

const RevenueExpenseGraph = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" name="Revenue" />
          <Line type="monotone" dataKey="expense" stroke="#f59e0b" name="Expenses" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueExpenseGraph;
