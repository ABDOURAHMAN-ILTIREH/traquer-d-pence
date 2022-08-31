import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalTransaction'
import AddList from './AddList'

function Transaction() {
  const {transaction} = useContext(GlobalContext)
  return (
    <>
        <h2 className='underline'>histoire</h2>
      <ul className="list">
       { transaction.slice().reverse().map( itme => (
        <AddList  key={itme.id} itme={itme}/>
       ))}
      </ul>
    </>
  )
}

export default Transaction