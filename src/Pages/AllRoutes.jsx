import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Books } from '../Components/Books'
import { EditBook } from './EditBook'
import { Login } from './Login'
import { SingleBook } from './SingleBook'

export const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Books />} />
  <Route path="/books/:id" element={<SingleBook />} />
  <Route path="/books/:id/edit" element={<EditBook />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} /> 
    </Routes>
  )
}
