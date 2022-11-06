import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import './style.scss'
import WebFont from 'webfontloader';
import Loader from './utils/Loader';
import Sidebar from './components/Sidebar';

const Dashboard = lazy(() => import('./pages/Dashboard'))


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
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
