import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalTransaction'

function AddList({ itme}) {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = itme.Amount < 0 ? "-" : "+";

  return (
    <>
      <li className={itme.Amount < 0 ?"minus" :"plus"}>{itme.text}<span>{sign}${Math.abs(itme.Amount)}</span><button onClick={()=>deleteTransaction(itme.id)}  className={itme.Amount < 0 ?"delete-btn btn-minus" :"delete-btn  btn-plus"}>x</button></li>
    </>
  )
}

export default AddList