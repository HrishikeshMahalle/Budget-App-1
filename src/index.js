import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './Contexts/BudgetContext'

ReactDOM.render(
  <React.StrictMode>
  <BudgetsProvider>{/*  Any value inside budgetprovider's value is gonna be inside the childrens of bugdetprovider(in this case it is <App/>) all possible because of using useContext*/}
    <App />
  </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

