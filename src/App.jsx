import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import DefaultLayout from './pages/DefaultLayout'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
// import ReviewForm from "./pages/ReviewFormPage";



import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/films/:id" element={<DetailsPage />} />
            {/* <Route path="/Reviews" element={<ReviewForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
