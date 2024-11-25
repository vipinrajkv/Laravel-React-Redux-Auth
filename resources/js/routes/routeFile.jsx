import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import List from '../components/list'
import Create from '../components/create'
import Edit from '../components/edit'
import LoginForm from '../components/loginForm'
import DefaultHeader from "../components/header";
import LeftNav from '../components/leftNav'
import RegisterForm from '../components/registerForm'
import UserHeader from '../components/userHeader'
import { useSelector } from 'react-redux'
export default function RouterLayout() {


  const isLoggedIn =  useSelector(state => state.auth.token); //placed here to trigger rerender the page when token is found in local storage

  return (
    <Routes>
      <Route element={<UserHeader />}>
        <Route path="/" element={<><LeftNav /><List /></>} />
        <Route path='/product/create' element={<><LeftNav /><Create /></>}></Route>
        <Route path='/products/:id/edit' element={<><LeftNav /><Edit /></>}></Route>
      </Route>

      <Route element={<DefaultHeader />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm/>} />
      </Route>
    </Routes>
  )
}
