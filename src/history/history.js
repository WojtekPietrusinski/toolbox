import { Bar } from "react-chartjs-2";
import React from "react"; 
import 'chart.js/auto';
 
export function History(){
    return(
      <div>
        <div>
        <Bar 
        data={{
          labels: ['Fees + media', 'Food', 'Fuel', 'Subscriptions', 'Clothes', ],
          datasets: [
            {
              label: 'last month expenses in $',
              data: [430, 300, 100, 40, 200],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={400}
        options={{
          maintainAspectRatio: false,
        }}
        />
        </div>
        {/* <div>
          <Bar 
        data={{
          labels: ['Fees + media', 'Food', 'Fuel', 'Subscriptions', 'Clothes', ],
          datasets: [
            {
              label: 'last month expenses in $',
              data: [430, 300, 100, 40, 200],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={400}
        options={{
          maintainAspectRatio: false,
        }}
        />
        </div> */}
      </div>  
    
      )
  };
  export default History;