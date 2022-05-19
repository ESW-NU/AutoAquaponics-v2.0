import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const AreaGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={400}
        height={300}
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
            <stop offset="5%" stopColor="#009444" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#009444" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="name"
          style={{
            fontSize: "1rem",
            fontFamily: "Inter",
          }}
        />

        <YAxis
          style={{
            fontSize: "1rem",
            fontFamily: "Inter",
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#009444"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
