import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import TtlPrice from '../components/TtlPrice'

const CartContainer = styled.section`
>.select-box{
  border:3px solid;
  >.remove-btn{
  text-align : right;
  cursor: pointer;
  margin : 5px;
  padding : 10px;
  }
  >.selected-items{
  margin : 5px;
  padding :10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  >input{
    width : 10%;
  }
  >.selected-img{
    width : 100px;
    height : 100px;
  }
}
}
`
//cart의 인풋과 체크박스는 선택한 아이템만큼 매핑되어서 나타나져야함.
const Cart = ({ cartItem,handleQuantity,handleRemove,ttlPrice }) => {

  return <CartContainer id = 'cart-container'>
    {cartItem.length === 0 ? 
    <h1>장바구니에 상품이 없습니다.</h1>
    :<>
    {cartItem.map((el,idx)=>{
      return <div className = 'select-box' key = {idx}>
        <h2 className = 'remove-btn' onClick = {(e)=> handleRemove(e,el.id)}>&times;</h2>
        
        <div className = 'selected-items' >
        <img className ='selected-img' src = {el.img} alt = 'selected img'/>
        <h3>{el.title}</h3>
        <p>{el.price} won</p>
        <span className = 'minus' onClick = {(e)=>handleQuantity(e,el.id)} >-</span><p>{el.cartCount}</p><span className='plus' onClick = {(e)=>handleQuantity(e,el.id)}>+</span>
      </div>
      
      </div>
    })}
    <TtlPrice ttlPrice = {ttlPrice} cartItem = {cartItem}/>
    <Link to = '/go-paid'><button>결제하기</button></Link>
    </>
    }

    </CartContainer>
}

export default Cart;