import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { convertTimestamp } from '../WeatherService';



const Precipitation = ({data}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '% Chance of Rain',
          },
        }, 
    }
    
    const labels = data.map(a => convertTimestamp(a.dt))
    const precipitationChance = data.map(a => a.precipitation)
    const chartData = {
      labels,
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: precipitationChance
        }
      ]
    }

    return (
        <div className="col-lg-6 col-md-12">
            <div className="card-body bg-dark text-light text-center rounded-3 h-100">
                <Bar data={chartData} options={options}/>
            </div>
        </div>
    )
}

export default Precipitation