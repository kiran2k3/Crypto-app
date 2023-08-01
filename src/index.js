import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';

import 'antd/dist/reset.css';

ReactDOM.render(
   
     <BrowserRouter>
         <Provider store={store}>
             <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);