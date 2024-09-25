import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    paymentMethod: '',
    startDate: '',
    endDate: ''
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Filter expenses based on category, payment method, and date range
  const filterExpenses = () => {
    let filtered = expenses;

    if (filters.category) {
      filtered = filtered.filter(expense => expense.category === filters.category);
    }
    if (filters.paymentMethod) {
      filtered = filtered.filter(expense => expense.paymentMethod === filters.paymentMethod);
    }
    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter(
        expense => new Date(expense.date) >= new Date(filters.startDate) &&
                   new Date(expense.date) <= new Date(filters.endDate)
      );
    }

    setFilteredExpenses(filtered);
  };

  // Handle sorting logic
  const handleSort = (criteria) => {
    const sortedExpenses = [...filteredExpenses].sort((a, b) => {
      if (criteria === 'amount') {
        return a.amount - b.amount;
      } else if (criteria === 'date') {
        return new Date(a.date) - new Date(b.date);
      } else if (criteria === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
    setFilteredExpenses(sortedExpenses);
  };

  // Update filteredExpenses when filters change
  React.useEffect(() => {
    filterExpenses();
  }, [filters, expenses]);

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block mb-2">Filter by Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="p-2 border rounded"
          >
            <option value="">All</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="rent">Rent</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Filter by Payment Method</label>
          <select
            name="paymentMethod"
            value={filters.paymentMethod}
            onChange={handleFilterChange}
            className="p-2 border rounded"
          >
            <option value="">All</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2 mb-4">
        <button
          onClick={() => handleSort('amount')}
          className="bg-gray-200 p-2 rounded"
        >
          Sort by Amount
        </button>
        <button
          onClick={() => handleSort('date')}
          className="bg-gray-200 p-2 rounded"
        >
          Sort by Date
        </button>
        <button
          onClick={() => handleSort('category')}
          className="bg-gray-200 p-2 rounded"
        >
          Sort by Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
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
            {filteredExpenses.map((expense, index) => (
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
    </div>
  );
};

export default ExpenseList;
