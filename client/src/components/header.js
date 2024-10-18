import React, { useEffect, useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faInfoCircle, faEye, faSignOutAlt, faQuestionCircle, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Added faChartBar for the dashboard icon
import './header.css';

const Header = ({ userRole, onLogout }) => {
    const [activetab, setactivetab] = useState("homes");
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[1]; 
        setactivetab(path ? path : "homes");
    }, [location]);

    // If no user role is provided, redirect to login
    if (!userRole) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='header'>
            <Link to='/' className='logo'>H App</Link>
            <div className='header-right'>
                {/* Cashier routes */}
                {userRole === 'cashier' && (
                    <>
                        <Link to='/homes'>
                            <p className={`${activetab === 'homes' ? 'active' : ''}`} onClick={() => setactivetab('homes')}>
                                <FontAwesomeIcon icon={faHome} /> Home
                            </p>
                        </Link>
                        <Link to='/add'>
                            <p className={`${activetab === 'addEdit' ? 'active' : ''}`} onClick={() => setactivetab('addEdit')}>
                                <FontAwesomeIcon icon={faPlus} /> Add
                            </p>
                        </Link>
                        <Link to='/about'>
                            <p className={`${activetab === 'about' ? 'active' : ''}`} onClick={() => setactivetab('about')}>
                                <FontAwesomeIcon icon={faInfoCircle} /> About
                            </p>
                        </Link>
                        <Link to='/dashboard'>
                            <p className={`${activetab === 'dashboard' ? 'active' : ''}`} onClick={() => setactivetab('dashboard')}>
                                <FontAwesomeIcon icon={faChartBar} /> Dashboard
                            </p>
                        </Link>
                    </>
                )}

                {/* Admin routes */}
                {userRole === 'admin' && (
                    <>
                        <Link to='/homes'>
                            <p className={`${activetab === 'homes' ? 'active' : ''}`} onClick={() => setactivetab('homes')}>
                                <FontAwesomeIcon icon={faEye} /> View
                            </p>
                        </Link>
                    </>
                )}

                {/* Help and Logout (available for all roles) */}
                <Link to='/help'>
                    <p className={`${activetab === 'help' ? 'active' : ''}`} onClick={() => setactivetab('help')}>
                        <FontAwesomeIcon icon={faQuestionCircle} /> Help
                    </p>
                </Link>

                <p className={`${activetab === 'logout' ? 'active' : ''}`} onClick={onLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </p>
            </div>
        </div>
    );
};

export default Header;
