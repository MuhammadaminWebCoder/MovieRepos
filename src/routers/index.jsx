import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pageRoutes } from '../hooks/routes'

const FilmRoutes = () => {
  return (
    <Routes>{pageRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}  />)}</Routes>
  )
}

export default FilmRoutes
