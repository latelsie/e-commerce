import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faInfoCircle, faEye, faSignOutAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
import './header.css';

const Header = ({ userRole }) => {
    const [activetab, setactivetab] = useState("homes");
    const location = useLocation();

   
    useEffect(() => {
        const path = location.pathname.split('/')[1]; 
        setactivetab(path ? path : "homes");
    }, [location]);

    return (
        <div className='header'>
            <Link to='/' className='logo'>H App</Link>
            <div className='header-right'>
               
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
                    </>
                )}

               
                {userRole === 'admin' && (
                    <>
                        <Link to='/homes'>
                            <p className={`${activetab === 'homes' ? 'active' : ''}`} onClick={() => setactivetab('homes')}>
                                <FontAwesomeIcon icon={faEye} /> View
                            </p>
                        </Link>
                    </>
                )}

                
                <Link to='/help'>
                    <p className={`${activetab === 'help' ? 'active' : ''}`} onClick={() => setactivetab('help')}>
                        <FontAwesomeIcon icon={faQuestionCircle} /> Help
                    </p>
                </Link>

                
                <Link to='/logout'>
                    <p className={`${activetab === 'Logout' ? 'active' : ''}`} onClick={() => setactivetab('Logout')}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
