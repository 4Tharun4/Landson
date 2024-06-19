"use client"
import React, { useState } from 'react'
import Chart from "react-apexcharts";

export default function Analysischarts() {
    const [statte,setchart]= useState({
        series: [{
            name: 'Sales',
            data: [12,10,20,44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Expanses',
            data: [12,10,20,76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, ],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded',
                borderRadius: 0,
                borderRadiusApplication:{
        around:3,
        end:5
                }
              },
            },
            dataLabels: {
              enabled: false
              
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
            },
            yaxis: {  
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              // y: {
              //   formatter: function (val) {
              //     return "$ " + val + " thousands"
              //   }
              // }
            }
          },
        
        
     
    })
  return (
    <div className=' w-full h-[400px] px-5 py-5 bg-white shadow-lg rounded-lg'>
      <div className="main-class  text-xl">
        <h1>Analysis</h1>
      </div>
      <div className="chart-render  h-64">
        <Chart options={statte.options} series={statte.series} type='bar' height={350}/>
      </div>
    </div>
  )
}
