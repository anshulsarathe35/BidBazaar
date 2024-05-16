// pages/pie-chart.tsx

import React from 'react';
import AuctionPieChart from './AuctionPieChart';
import Navbar from './Navbar';

const PieChartPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-4">Auction Data Pie Chart</h1>
        <AuctionPieChart />
      </div>
    </>
  );
};

export default PieChartPage;
