import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import TtlPrice from '../components/TtlPrice'

const PaidContainer = styled.section`
>ul{
  border:3px solid;
  margin : 10px;
  padding : 10px;
  list-style:none;
  >.paid-img{
    width : 100px; height : 100px;
  }
  >li{
    display : inline;
    margin : 5px;
  }
}
`
const PayDone = ({cartItem,ttlPrice, handleReset}) => {

  return <PaidContainer id = 'paid-container'>
    <h1>결제가 완료되었습니다.</h1>
    
    {cartItem.map((el,idx)=>{
      return <ul key = {idx}>
      <img className='paid-img' src = {el.img} alt = 'paid-img'/>
      <li>{el.title}</li>
      <li>{el.cartCount}</li>
      <li>{el.price * el.cartCount} </li>
      </ul>
    })}
  
    <TtlPrice ttlPrice = {ttlPrice} cartItem = {cartItem}></TtlPrice>
    <Link to ='/'><button onClick = {handleReset}>처음으로</button></Link>
    </PaidContainer>
}

export default PayDone;