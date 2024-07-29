
import './App.css';
import HotelList from './component/HotelList';
import Detail from './component/Detail';
import React from 'react';
import Register from './component/Register';
import Upload  from './component/Upload';
import {SecureUpload} from './component/SecureUpload'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Manage from './component/Manage';
import Login from './component/Login';
export default function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/hotellist' element={<HotelList/>}/>
        <Route path='/detailhotel/:_id' element={<Detail/>}/>
        <Route path='/registerOwner' element={<Register/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/secure_upload' element={<SecureUpload/>}/>
        <Route path='/manage' element={<Manage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </Router>
    </div>
  );  
}
