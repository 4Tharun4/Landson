'use client'
import React, { useState, Component } from 'react'
import Chart from "react-apexcharts";

export default class Analysischarts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        tooltip:{
          enable:false
        },
        
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep","Nov","Dec"]
        },
       
      },
      series: [
        {
          name: "Sales",
          data: [30, 40, 45, 50, 49, 60, 70, 91,2,4,4]
        },
        {
          name: "Orders",
          data: [30, 40, 45, 50, 49, 60, 70, 91,2,4,4]
        },
      ]
    };
  }

  render()  {
   
  return (
    <div className=' w-full h-[400px] px-5 py-5 bg-white shadow-lg rounded-lg'>
      <div className="main-class  text-xl">
        <h1>Analysis</h1>
      </div>
      <div className="chart-render  ">
      <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={350}
            />
      </div>
    </div>
  )
}
}
