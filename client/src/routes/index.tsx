import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from '../components/Navbar'
import { Fragment } from 'react'

export const MainRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Fragment>
  )
}