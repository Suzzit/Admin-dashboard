import React, {useEffect} from 'react';
import './App.css';
import './style.scss'
import Sidebar from './components/Sidebar';
import WebFont from 'webfontloader';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito Sans']
      }
    });
  }, [])
  
  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
