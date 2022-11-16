
import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const data = [
    {
        uv: 4000,
    },
    {
        uv: 4000,
    },
];

const Gauge = () => {
    return (
        <AreaChart
          width={150}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis style={{
        fontSize: '1rem',
        fontFamily: 'Inter',
    }}/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#009444" fill="#009444" />
        </AreaChart>
    );
}

export default Gauge;