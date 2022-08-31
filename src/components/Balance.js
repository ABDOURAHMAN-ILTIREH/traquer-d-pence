import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalTransaction'

function Balance() {

  const {transaction} = useContext(GlobalContext)

  const Amount = transaction.map( itme => itme.Amount)
  const Balance = Amount.reduce( (acc, itme) => (acc+= itme), 0).toFixed(2)

  const income = Amount.filter( itme => itme > 0).reduce( (acc, itme) => (acc+=itme),0).toFixed(2)
  const expence = Amount.filter( itme => itme < 0).reduce( (acc, itme) => (acc+=itme),0).toFixed(2) 



  
  return (
    <div>
        <h2 className='underline'>balance</h2>
        <h3>Votre Solde</h3>
        <h3>${Balance}</h3>
        <div className="content-balance">
            <div className="income">
                <h3>REVENU</h3>
                <span>{income}</span>
            </div>
            <div className="expence">
                <h3>EXPENCE</h3>
                <span>{expence}</span>
            </div>
        </div>
    </div>
  )
}

export default Balance