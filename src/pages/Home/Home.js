import React from 'react';
import './home.css';

import Sidebar from '../../componenets/Sidebar/Sidebar';
import Navbar from '../../componenets/navbar/Navbar';
import Widget from '../../widget/Widget';
//import Featured from '../../componenets/featured/Featured';
import Chart from '../../componenets/chart/Chart';


const Home = () => {
  return (
    <div className='home'>
      <Sidebar />

      <div className='Container'>
        <Navbar />

        <div className='Widgets'>
          <Widget type="customers" />
          <Widget type="orders" />
          <Widget type="earnings"  />
          <Widget type="balance" />
        
        </div>
        <div className='charts'>

          <Chart/>
        </div>
      </div>
    </div>

  )
}

export default Home;
