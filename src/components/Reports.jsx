import React, { useContext, useEffect } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = () => {
  const { expenses } = useContext(ExpenseContext);

  const chartData = {
    labels: expenses.map(expense => expense.category),
    datasets: [
      {
        label: 'Expenses by Category',
        data: expenses.map(expense => expense.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  useEffect(() => {
    return () => {
      // Cleanup: destroy chart instance on unmount
      if (ChartJS.instances.length) {
        ChartJS.instances.forEach((instance) => instance.destroy());
      }
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Reports</h1>
      <Bar data={chartData} options={{ responsive: true }} />
      <h2 className="text-xl mt-4">Expenses List</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border">
              <td className="px-4 py-2">{expense.amount}</td>
              <td className="px-4 py-2">{expense.description}</td>
              <td className="px-4 py-2">{expense.date}</td>
              <td className="px-4 py-2">{expense.category}</td>
              <td className="px-4 py-2">{expense.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
