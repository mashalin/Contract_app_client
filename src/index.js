import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import CustomerStore from './store/CustomerStore';
import CathedraStore from './store/CathedraStore';
import CourseStore from './store/CourseStore';
import AdminStore from './store/AdminStore';
import AnnounceStore from './store/AnnounceStore';
import FileStore from './store/FileStore';
import YearStore from './store/YearStore';
import ContractStore from './store/ContractStore';
import JournalStore from './store/JournalStore';

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    customer: new CustomerStore(),
    cathedra: new CathedraStore(),
    course: new CourseStore(),
    admin: new AdminStore(),
    announ: new AnnounceStore(),
    file: new FileStore(),
    year: new YearStore(),
    contract: new ContractStore(),
    journal: new JournalStore(),
  }} >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
