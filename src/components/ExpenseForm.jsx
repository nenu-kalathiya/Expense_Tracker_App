import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseForm = () => {
  const { setExpenses } = useContext(ExpenseContext);
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: '',
    category: '',
    otherCategory: '', // New state for custom category
    paymentMethod: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.amount || isNaN(formData.amount)) {
      errors.amount = 'Please enter a valid amount';
    }
    if (!formData.date) {
      errors.date = 'Please select a valid date';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }
    if (!formData.category && !formData.otherCategory) {
      errors.category = 'Please select a category or enter a custom category';
    }
    if (!formData.paymentMethod) {
      errors.paymentMethod = 'Please select a payment method';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, process the data
      const finalCategory = formData.category === 'other' ? formData.otherCategory : formData.category;
      setExpenses((prev) => [
        ...prev,
        { ...formData, category: finalCategory }
      ]);
      setFormData({
        amount: '',
        description: '',
        date: '',
        category: '',
        otherCategory: '', // Reset otherCategory
        paymentMethod: ''
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <div>
        <label className="block mb-2">Amount</label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
      </div>

      <div>
        <label className="block mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>

      <div>
        <label className="block mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div>
        <label className="block mb-2">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="rent">Rent</option>
          <option value="shopping">Shopping</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
      </div>

      {formData.category === 'other' && (
        <div>
          <label className="block mb-2">Custom Category</label>
          <input
            type="text"
            name="otherCategory"
            value={formData.otherCategory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter custom category"
          />
        </div>
      )}

      <div>
        <label className="block mb-2">Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
        </select>
        {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
