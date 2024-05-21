import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const DemoExam = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default DemoExam
