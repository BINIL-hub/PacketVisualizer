import React from "react";
import ProtocolPieChart from "../components/charts/ProtocolPieChart";
import TrafficChart from "../components/charts/TrafficChart";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 text-sm font-semibold mb-2">Network Traffic</h3>
          <TrafficChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 text-sm font-semibold mb-2">Protocol Distribution</h3>
          <ProtocolPieChart />
        </div>
      </div>

      {/* Packet Details + Protocol Tree */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Packet Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 text-sm font-semibold mb-3">Packet Details</h3>
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3">Timestamp</th>
                <th className="py-2 px-3">Source IP</th>
                <th className="py-2 px-3">Destination IP</th>
                <th className="py-2 px-3">Protocol</th>
                <th className="py-2 px-3">Size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-3">10:01</td>
                <td>192.168.1.2</td>
                <td>10.0.0.4</td>
                <td>TCP</td>
                <td>128</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3">10:02</td>
                <td>192.168.1.2</td>
                <td>10.0.0.5</td>
                <td>UDP</td>
                <td>130</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3">10:03</td>
                <td>192.168.1.2</td>
                <td>172.16.0.2</td>
                <td>TCP</td>
                <td>108</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3">10:05</td>
                <td>10.0.0.6</td>
                <td>10.0.0.7</td>
                <td>UDP</td>
                <td>228</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Protocol Tree */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 text-sm font-semibold mb-3">Protocol Tree</h3>
          <ul className="text-sm text-gray-700">
            <li>PVS</li>
            <ul className="ml-4">
              <li>ALEHeader</li>
              <ul className="ml-4">
                <li>Length</li>
                <li>Sequence</li>
                <li>NRFlag</li>
                <li>PCKTYPE</li>
              </ul>
              <li>SAIHeader</li>
              <ul className="ml-4">
                <li>UserData</li>
                <li>Control</li>
                <li>ACK</li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
