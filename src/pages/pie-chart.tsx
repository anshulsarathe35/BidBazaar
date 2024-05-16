import React, { useState, useEffect } from 'react';
import PieChart from '@/components/Base/PieChart';
import axios from 'axios';

const PieChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product/pie-chart-data');
        console.log(response);
        const transformedData = response.data.map((item: any) => ({
          title: item._id,
          value: item.count,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
        }));
        console.log(transformedData);
        setData(transformedData);
        // console.log(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);
  

  return (
    <div className='grid grid-cols-2 bg-gray-50'>
                <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto pl-28 md:h-screen lg:py-0">
                    <div className="w-[500px] bg-white rounded-lg drop-shadow-lg">
                        <div className="space-y-2 py-10 px-10">
                            <h1 className="text-2xl pb-3 text-center font-bold leading-tight tracking-tight text-mobile md:text-2xl">Auction Data Pie Chart</h1>
                            <PieChart data={data} />
                            </div></div></div></div>
    
  );
};

export default PieChartPage;


/* <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Auction Data Pie Chart</h1>
      <PieChart data={data} />
    </div> */


