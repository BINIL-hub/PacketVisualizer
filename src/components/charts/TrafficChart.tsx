import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", packets: 30 },
  { time: "10:05", packets: 45 },
  { time: "10:10", packets: 70 },
  { time: "10:15", packets: 50 },
  { time: "10:20", packets: 90 },
];

const TrafficChart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-80">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        Packet Activity
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="packets"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;
