import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import AddEdit from './pages/addEdit';
import View from './pages/view';
import About from './pages/about';
import Homes from './pages/homes';
import Login from './pages/Login';
import Header from './components/header'; 
import Logout from './pages/Logout'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardChart from './pages/Dashboardchart'; 

const AdminPage = () => {
  return <h1>Welcome Admin, you can only view the records.</h1>;
};

const PrivateRoute = ({ user, role, children }) => {
  if (!user) {
    return <Navigate to="/login" />; 
  }

  return user?.role === role ? children : <Navigate to="/login" />; 
};

function App() {
  const [user, setUser] = useState(null);
  const [salesData] = useState([
    { day: 'Monday', sales: 120, customers: 30 },
    { day: 'Tuesday', sales: 150, customers: 45 },
    { day: 'Wednesday', sales: 100, customers: 25 },
    { day: 'Thursday', sales: 180, customers: 50 },
    { day: 'Friday', sales: 200, customers: 60 },
  ]);

  const handleLogin = (userData) => {
    setUser(userData); 
  };

  const handleLogout = () => {
    setUser(null); 
  };

  return (
    <BrowserRouter>
      <div className="app">
        {user && <Header userRole={user.role} onLogout={handleLogout} />}
        <ToastContainer position="top-center" />

        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          
          <Route
            path="/"
            element={
              <PrivateRoute user={user} role="cashier">
                <Homes />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute user={user} role="cashier">
                <DashboardChart salesData={salesData} />
              </PrivateRoute>
            }
          />
          
          <Route path="/add" element={<PrivateRoute user={user} role="cashier"><AddEdit /></PrivateRoute>} />
          <Route path="/update/:id" element={<PrivateRoute user={user} role="cashier"><AddEdit /></PrivateRoute>} />
          <Route path="/view/:id" element={<PrivateRoute user={user} role="cashier"><View /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute user={user} role="cashier"><About /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
