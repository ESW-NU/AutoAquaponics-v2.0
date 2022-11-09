import React from "react";
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
  const range = data.some((element) => element.y > element.t.max || element.y < element.t.min);
  console.log(data);
  if(!data[0]) return;
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
          <linearGradient id="colorG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#009444" stopOpacity={1} />
            <stop offset="95%" stopColor="#009444" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient id="colorR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="red" stopOpacity={1} />
            <stop offset="95%" stopColor="red" stopOpacity={0.5} />
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
          stroke={range ? "red" : "green"}
          fillOpacity={1}
          fill={`url(#color${range ? "R" : "G"})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
