// // PieChart.tsx

// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';


// interface PieChartProps {
//   data: number[];
//   labels: string[];
// }

// const PieChart: React.FC<PieChartProps> = ({ data, labels }) => {
//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         data: data,
//         backgroundColor: [
//           'red',
//           'blue',
//           'yellow',
//           'green',
//           // Add more colors if needed
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <Pie data={chartData} />
//     </div>
//   );
// };

// export default PieChart;
// components/PieChart.js

// import React from 'react';
// import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';

// const PieChart = (data:any) => {
//   return (
//     <div style={{ height: '400px' }}>
//       <MinimalPieChart
//         data={data}
//         label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
//         labelStyle={{
//           fontSize: '5px',
//           fontFamily: 'sans-serif',
//           fill: '#6A2135',
//         }}
//         radius={40}
//         animate
//         animationDuration={500}
//         animationEasing="ease-out"
//       />
//     </div>
//   );
// };

// export default PieChart;


import React from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';

const PieChart = ({ data }: { data: { _id: string; count: number }[] }) => {
  console.log(data)
  const chartData = data.map((item: any) => ({
    title: item._id,
    value: item.count,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }));

  console.log(chartData);


  return (
    <div style={{ height: '800px' }}>
      <MinimalPieChart
        data={data}
        label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
        labelStyle={{
          fontSize: '6px',
          fontFamily: 'sans-serif',
          fill: '#6A2135',
        }}
        radius={40}
        animate
        animationDuration={500}
        animationEasing="ease-out"
      />
    </div>
  );
};

export default PieChart;


