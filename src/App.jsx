import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import DefaultLayout from './pages/DefaultLayout'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import GlobalContext from "./contexts/GlobalContext";
import NotFound from "./pages/NotFound";



import './App.css'

function App() {

  const [loading, setLoading] = useState(false);

  const values = {
    loading,
    setLoading
  }


  return (
    <>
      <GlobalContext.Provider value={values}>



        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/films/:id" element={<DetailsPage />} />
              <Route path="*" element={<NotFound />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
