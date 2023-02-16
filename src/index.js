import React from 'react';
import ReactDOM from 'react-dom/client';
import Appp from './Appp';
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./dashboard/src/contexts/BudgetsContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProvider>
    <Appp />
    </BudgetsProvider>
  </React.StrictMode>
);

