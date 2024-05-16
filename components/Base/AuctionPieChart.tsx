// // AuctionPieChart.tsx

// import React, { useEffect, useState } from 'react';
// import PieChart from './PieChart';
// import axios from 'axios';

// interface PieChartData {
//   _id: string;
//   count: number;
// }

// const AuctionPieChart: React.FC = () => {
//   const [data, setData] = useState<number[]>([]);
//   const [labels, setLabels] = useState<string[]>([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get<PieChartData[]>('http://localhost:5000/api/product/pie-chart-data'); // Replace this URL with your actual backend endpoint
//       const pieChartData = response.data;
//       const newData = pieChartData.map(item => item.count);
//       const newLabels = pieChartData.map(item => item._id);
//       setData(newData);
//       setLabels(newLabels);
//     } catch (error) {
//       console.error('Error fetching pie chart data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Auction Data Pie Chart</h2>
//       <PieChart data={data} labels={labels} />
//     </div>
//   );
// };

// export default AuctionPieChart;

// components/AuctionPieChart.tsx

// components/Base/AuctionPieChart.tsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


interface AuctionPieChartProps {
  data: number[];
  labels: string[];
}

const AuctionPieChart: React.FC<AuctionPieChartProps> = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          // Add more colors if needed
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default AuctionPieChart;
