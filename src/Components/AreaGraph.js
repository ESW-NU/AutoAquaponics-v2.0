
import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const AreaGraph = () => {
  return (
    <ResponsiveContainer width="190%" height="100%">
        <AreaChart
        width={400}
        height={100}
        data={data}
        margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
        }}
        >
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#009444" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#009444" stopOpacity={0}/>
    </linearGradient>
    </defs>
    <XAxis dataKey="name" style={{
        fontSize: '1rem',
        fontFamily: 'Inter',
    }}/>
    <YAxis style={{
        fontSize: '1rem',
        fontFamily: 'Inter',
    }}/>
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#009444" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
 </ResponsiveContainer>
  );
}

export default AreaGraph;