import Chart from '@/components/echarts';
import { useState } from 'react';

const App = () => {
  const [chartsData, setChartsData] = useState({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  });
  return (
    <>
      <Chart chartsData={chartsData}></Chart>
      <Chart chartsData={chartsData}></Chart>
    </>
  );
};

export default App;
