'use client'
import React, { useState } from 'react'
import { BarChart } from '@tremor/react';
const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
  },
  {
    name: 'Ferns',
    'Number of threatened species': 281,
  },
  {
    name: 'Arachnids',
    'Number of threatened species': 251,
  },
  {
    name: 'Corals',
    'Number of threatened species': 232,
  },
  {
    name: 'Algae',
    'Number of threatened species': 98,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();
export default function Analysischarts() {
   
  return (
    <div className=' w-full h-[400px] px-5 py-5 bg-white shadow-lg rounded-lg'>
      <div className="main-class  text-xl">
        <h1>Analysis</h1>
      </div>
      <div className="chart-render  ">
      <BarChart
    data={chartdata}
    index="name"
    categories={['Number of threatened species']}
    colors={['blue']}
    valueFormatter={dataFormatter}
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
  />
      </div>
    </div>
  )
}
