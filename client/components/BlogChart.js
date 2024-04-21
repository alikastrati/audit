import React from 'react';
import dynamic from 'next/dynamic';

const DynamicReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AnotherChart = ({ options, series }) => {
  return (
    <DynamicReactApexChart options={options} series={series} type="line" height={200} />
  );
};

export default AnotherChart;