import React,{createContext, useReducer} from "react";
import  AppReducer from './AppReducer'

const intialState = {
     transaction : [
        // { id:1, text:"flower" , Amount: -40},
        // { id:2, text:"solary" , Amount:400},
        // { id:3, text:"book" , Amount: -10},
        // { id:4, text:"camera" , Amount: 150},

    ]
}
 // create context
export const GlobalContext = createContext(intialState);

// create Provider

export const GlobalProvider = ({children}) =>{

    const [ state, dispatch] = useReducer(AppReducer, intialState)
    
    // delete content
    function deleteTransaction(id){
      dispatch({

        type :"DELETE_TRANSACTION",
        payload : id
      })
    }

    // Add Transaction 
    function AddTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transaction : state.transaction,deleteTransaction, AddTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

