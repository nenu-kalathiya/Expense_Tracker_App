// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reports from './components/Reports';
import Settings from './components/Settings'; // Import Settings component

const App = () => {
  return (
    <ExpenseProvider>
      <Router>
        <div className="container mx-auto p-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} /> {/* Settings route */}
          </Routes>
        </div>
      </Router>
    </ExpenseProvider>
  );
};

export default App;
