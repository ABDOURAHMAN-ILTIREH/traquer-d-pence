import React,{useState, useContext} from 'react'
import {GlobalContext} from '../Context/GlobalTransaction'
function AddTransaction() {
  const {AddTransaction} = useContext(GlobalContext)
  // Add Transaction 

  const onSubmit = e =>{
    e.preventDefault()
    const newTransaction ={
      Amount: +Amount,
      id: Math.floor(Math.random()*100),
      text
    }
    AddTransaction(newTransaction)
  }

  const [text, setText] = useState('')
  const [Amount, setAmount] = useState('')
  return (
    <div className='addtransacrtion'>
         <h2 className='underline'>Ajouter De Nouvelles Transactions</h2>
         <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter a text' />
            </div>
            <div className="form-control">
            <label className='Amount'>
                 Montant<br />
                (Négatif - Dépense, Possitif - Revenu)
            </label>
                <input type="number" value={Amount} onChange={(e)=>setAmount(e.target.value)} placeholder='enter a number' />
            </div>
            <button className="btn">Ajouter Des Transactions</button>
         </form>
    </div>
  )
}

export default AddTransaction