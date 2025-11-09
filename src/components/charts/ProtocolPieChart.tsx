import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "TCP", value: 400 },
  { name: "UDP", value: 300 },
  { name: "PVS", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

const ProtocolPieChart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-80">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        Protocol Distribution
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProtocolPieChart;
