import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Fragment } from 'react'

export const MainRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Fragment>
  )
}