import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAuthContext } from '../../hooks/useAuthContext';
import "./UserCharts.css"
const apiURL = import.meta.env.VITE_BACKEND_URL;

ChartJS.register(ArcElement, Tooltip, Legend);

const UserCharts = () => {

    const [chartType, setChartType] = useState('points');
    const [labels, setLabels] = useState([]);
    const [items, setItems] = useState([]);
    const [points, setPoints] = useState([]);
;
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async() => {
          try {
            if(user) {
              const config = {
                headers: {
                  Authorization: `Bearer ${user?.accessToken}`
                }
              };
              const response = await axios.get(`${apiURL}/recycle/stats`, config);
              if (response && response.status === 200 && response.data.data) {
                const updatedStats = response.data.data.map((object) => ({
                    label: object._id,
                    item: object.totalItems,
                    point: object.totalPoints,
                  }));
                  
                  setLabels(updatedStats.map((item) => item.label));
                  setItems(updatedStats.map((item) => item.item));
                  setPoints(updatedStats.map((item) => item.point));
              }
            }
          } catch(error) {
            console.log(error);
            toast.error(error?.message);
          }
        }
  
        fetchData();
      }, [user]);  

    const data = {
        labels: labels,
        datasets: [
          {
            label: chartType === 'points' ? 'no. of points' : 'no. of items',
            data: chartType === 'points' ? points : items,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
        ],
      };

  return (
    <div className='chart__container'>
      <div className='chart__type__container'>
        <span onClick={() => setChartType('items')}>View Items</span>
        <span onClick={() => setChartType('points')}>View Points</span>
      </div>
      {labels.length > 0 ? (
        <Doughnut data={data} />
      ) : (
        <p>No Data available...</p>
      )}
    </div>
  )
}

export default UserCharts