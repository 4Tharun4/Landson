"use client"
import React, { useState } from 'react'
import Chart from "react-apexcharts";


export default function LargeCards({title,sales,charttype}) {
  const [state ,setstate] = useState({
    series: [{
      name: 'Weekly sales',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        toolbar:{
         show:false
        },
        selection: {
          enabled: false
        },
        height: 300,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
        }
      },
      dataLabels: {
        enabled: false,
       
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
        xaxis: {
          show:false,
        
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
        // crosshairs: {
        //   fill: {
        //     type: 'gradient',
        //     gradient: {
        //       colorFrom: '#D8E3F0',
        //       colorTo: '#BED1E6',
        //       stops: [0, 100],
        //       opacityFrom: 0.4,
        //       opacityTo: 0.5,
        //     }
        //   }
        // },
        tooltip: {
          enabled: false,
          
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        datalabels: {
          show: false,
        }
       
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  

  })
  return (
    <div className='  justify-between w-[100%] flex gap-2 p-4 h-36 bg-white shadow-lg rounded-lg mt-5'>
      <div className="title  flex flex-col     ">
        <h1 className=' text-sm'>{title}</h1>
        <div className="sales pt-10">
          <h1 className=' text-xl font-bold'>{sales}</h1>
        </div>
      </div>
      <div className="charts w-44 overflow-hidden">
        <Chart options={state.options} series={state.series} type={charttype} width={200}/>
      </div>
    </div>
  )
}
