import './Home.css';
import React from 'react';
import {Header} from "./components/header.js"
import {Balance} from "./components/balance.js"
import {IncomeExpenses} from "./components/incomeExpenses.js"
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState';


function Home() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default Home;
