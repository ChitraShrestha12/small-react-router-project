import React from 'react'
import { Header } from '../Components/Header'
import './App.css'
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
