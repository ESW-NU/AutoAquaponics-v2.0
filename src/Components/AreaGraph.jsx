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
  let color = "#009444";
  const high = (element) => element.y > 50;

  if (data.some(high)){
    color = "#ff0000";
  } else {
    color = "#009444";

  }
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
            <stop offset="25%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="x"
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
          dataKey="y"
          stroke="#009444"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
