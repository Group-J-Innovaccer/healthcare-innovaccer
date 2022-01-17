import React from 'react';
import { checkAuthenticated, logout } from '../api/auth'
import './Home.css';


const Header = ({ isAuthenticated, setIsAuthenticated }) => {

    const logoutUser = async () => {
        const res = await logout();
        if (res) {
            localStorage.clear()
            setIsAuthenticated(checkAuthenticated())
        }
    }

    return (
        <div>
            <div className="topnav">
                <a className="active" href="/">DocEasy</a>
                <div className="topnav-right">
                    <a href="/about">About Us</a>
                    {!isAuthenticated ? <><a href="/addappointment">Make Appoinment</a><a href="/patientlogin">Patient Portal</a> <a href="/doctor_login">Doctor Portal</a></> : <a role="button" onClick={logoutUser}>Logout</a> }
                </div>
            </div>
        </div>
    )
}

export default Header;