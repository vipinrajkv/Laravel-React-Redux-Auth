import React, { useContext, useEffect } from 'react'
import {Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import axiosInstance from '../axiosInstance'
const token = localStorage.getItem('token');
export default function UserHeader({isLoggedIn}) {
	// const tokenData =  useSelector(state => state.auth.token) ?? token ;
	const userName =  useSelector(state => state.auth.user_name) ?? '';
	const navigate = useNavigate();

	// useEffect(() => {     // This useEffect is not being used for anything, shall be removed
    // }, [tokenData]);

	if (!isLoggedIn) {
		return <Navigate to='/login'/>
	}

	const userLogOut = (e) => {
        e.preventDefault();
		axiosInstance.get('/logout').then(()=>{
			localStorage.removeItem('token');
			navigate('/login');
		})
    }

  return (
	<>
	<nav className="navbar navbar-default navbar-static-top">
	<div className="container-fluid">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle navbar-toggle-sidebar collapsed">
				MENU
			</button>
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
				data-target="#bs-example-navbar-collapse-1">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="#">
				Laravel React Crud 
			</a>
		</div>

		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav navbar-right">
				<li><a href="http://www.pingpong-labs.com" target="_blank">Hi, {userName ? `${userName.charAt(0).toUpperCase()}${userName.slice(1)}` : "User"}</a></li>
				<li className="dropdown ">
					<a href="#" className="dropdown-toggle" onClick={userLogOut} data-toggle="dropdown" role="button" aria-expanded="false">
						Logout
					</a>
				</li>
			</ul>
		</div>
	</div>
	</nav>
	<div className="container-fluid main-container"/>
	<Outlet/>
	</>
  )
}
