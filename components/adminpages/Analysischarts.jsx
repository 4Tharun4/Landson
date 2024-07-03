'use client'
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    Sales: 4000,
    Product: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    Sales: 3000,
    Product: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    Sales: 2000,
    Product: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    Sales: 2780,
    Product: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    Sales: 1890,
    Product: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    Sales: 2390,
    Product: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    Sales: 3490,
    Product: 4300,
    amt: 2100,
  },
  {
    name: "AUG",
    Sales: 3490,
    Product: 4300,
    amt: 2100,
  },
  {
    name: "SEP",
    Sales: 3490,
    Product: 4300,
    amt: 2100,
  },
  {
    name: "OCT",
    Sales: 3490,
    Product: 4300,
    amt: 2100,
  },
  {
    name: "NOV",
    Sales: 3490,
    Product: 4300,
    amt: 2100,
  },
  {
    name: "DEC",
    Sales: 3490,
    Product: 4300,
    amt: 2100,
  },
];

export default function Analysischarts() {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart 
      width={1120}
      height={350}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip shared={true}  />
      <Legend />
      <Bar dataKey="Product" fill="#8884d8"  radius={[10,10,0,0]}  barSize={10}/>
      <Bar dataKey="Sales" fill="#82ca9d" radius={[10,10,0,0]} width={3} barSize={10} />
    </BarChart>
    // </ResponsiveContainer>
  );
}
