import React from 'react';
import ApexCharts from 'react-apexcharts';

// COLORS USED: golden yellow: '#ffba3b'; salmon pink: '#ff8fa0'; nori green: '#025c41'

const Chart = () => {
  // Set up the chart options and series
  const options = {
    chart: {
      type: 'line',
    },
    grid: {show: false},
    stroke: {
        curve: 'smooth',
        width: 10,
      },
    markers: {
        size: 15,
        strokeWidth: 0,
        colors: ['#025c41'],
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal', 
            gradientToColors: ['#ff8fa0'], 
            stops: [0, 100], 
            colorStops: [
                {
                    offset: 0,
                    color: '#ffba3b', 
                    opacity: 1
                },
                {
                    offset: 100,
                    color: '#ff8fa0', 
                    opacity: 1
                }
            ]
        }
    },
    xaxis: {
        type: 'datetime',
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        title: {
            text: "Month",
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#ffba3b',
            }
        },
        labels: {
            style: {
                colors: '#ff8fa0', 
                fontSize: '12px', 
                fontWeight: 400     
            },
        },
    },
    yaxis: {
        title: {
            text: "Mood",
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#ffba3b',
            }
        },
        labels: {
            style: {
                colors: '#ff8fa0', 
                fontSize: '12px',  
                fontWeight: 400     
            },
        },
    },
  };

  const series = [
    {
      name: 'Mood',
      data: [1,2,5,4,5,3,1,4,2],
    },
  ];

  return (
    <div id="chart">
      {/* Render the chart component with options and series */}
      <ApexCharts options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default Chart;
