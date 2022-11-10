import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.scss'
import WebFont from 'webfontloader';
import Loader from './utils/Loader';
import Sidebar from './components/Sidebar';
import Profilebar from './components/Profilebar'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Cards = lazy(() => import('./pages/CardsPage'))


function App() {
  useEffect(() => {
    WebFont.load({  
      google: {
        families: ['Nunito Sans']
      }
    });
  }, [])

  return (
    <div className='App'>
      <Profilebar />  
      <Suspense fallback={<Loader />}>
        <Router>
          <Sidebar />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path='/cards' element={<Cards />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
