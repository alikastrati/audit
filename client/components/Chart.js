// Chart.js
import React from 'react';
import dynamic from 'next/dynamic';

const DynamicReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart = ({ options, series }) => {
  return (
    <DynamicReactApexChart options={options} series={series} type="bar" height={200} />
  );
};

export default Chart;
