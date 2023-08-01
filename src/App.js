import React from 'react';
import { Routes, Route , Link} from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';
import { Navbar, Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News } from './components';
import './App.css'; 

const App = () => {
  return (
    <div className='app'>
       <div className='navbar'>
            <Navbar />
       </div>
       <div className='main'>
           <Layout>
               <div className='routes'>
                <Routes>
                    <Route  path="/"  exact Component={Homepage}></Route>
                    <Route  path="/exchanges" exact Component={Exchanges}></Route>
                    <Route  path="/cryptocurrencies" exact Component={Cryptocurrencies }></Route>
                    <Route  path="/crypto/:coinId" exact Component={CryptoDetails}></Route>
                    <Route  path="/news" exact Component={News}></Route>
                </Routes> 
               </div>
           </Layout>
      
       <div className='footer'>
       <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
            Cryptoverse Inc. <br />
                All rights reserved
             </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
        </div>
       </div>
    </div>
  )
}

export default App

