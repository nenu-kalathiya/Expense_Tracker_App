import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default Home;
