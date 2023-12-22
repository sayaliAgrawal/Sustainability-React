import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "11:54:02",
    uv: 4,
    pv: 2,
    amt: 6.6,
  },
  {
    name: "12:00:11",
    uv: 3,
    pv: 1.3,
    amt: 6.48,
  },
  {
    name: "12:06:19",
    uv: 2,
    pv: 9.8,
    amt: 6.6,
  },
  {
    name: "12:12:28",
    uv: 2.7,
    pv: 3.9,
    amt: 6.6,
  },
  {
    name: "12:18:36",
    uv: 1.8,
    pv: 4.8,
    amt: 6.6,
  },
  {
    name: "12:24:44",
    uv: 2.3,
    pv: 3.8,
    amt: 9,
  },
  {
    name: "12:30:53",
    uv: 3.4,
    pv: 4.3,
    amt: 10,
  },
];

export default function App() {
  return (
    <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
  );
}
