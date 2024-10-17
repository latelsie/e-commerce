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
            path="/add"
            element={
              <PrivateRoute user={user} role="cashier">
                <AddEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <PrivateRoute user={user} role="cashier">
                <AddEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/view/:id"
            element={
              <PrivateRoute user={user} role="cashier">
                <View />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute user={user} role="cashier">
                <About />
              </PrivateRoute>
            }
          />

          
          <Route
            path="/Homes"
            element={
              <PrivateRoute user={user} role="admin">
                <Homes />
              </PrivateRoute>
            }
          />

          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
