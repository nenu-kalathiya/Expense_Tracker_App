// src/context/ExpenseContext.jsx
import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([
        { amount: 50, description: 'Groceries', date: '2024-09-10', category: 'food', paymentMethod: 'cash' },
        { amount: 100, description: 'Bus Ticket', date: '2024-09-12', category: 'travel', paymentMethod: 'credit' },
    ]);

    const [profile, setProfile] = useState({
        photo: 'url_to_profile_photo',
        number: '1234567890',
        email: 'user@example.com',
    });

    return (
        <ExpenseContext.Provider value={{ expenses, setExpenses, profile, setProfile }}>
            {children}
        </ExpenseContext.Provider>
    );
};
