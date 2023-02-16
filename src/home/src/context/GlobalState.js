import React, { createContext, useReducer} from "react";
import { Transaction } from "../components/Transaction";
import AppReducer from "./AppReducer"

const initialState = {
    transactions:  []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [ state, disptach ] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        disptach({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        disptach({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}