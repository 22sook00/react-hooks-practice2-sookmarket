import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import TtlPrice from '../components/TtlPrice'

const CartContainer = styled.section`
display: flex;
justify-content: center;
//item 없을때
>.no-item-box{
  >.no-item-emoji{ 
    font-size : 150px;
    margin : 80px 0 0 0; 
    text-align:center;}
  >.no-item{ font-size : 40px; }
}
>.flex-box{
  margin:50px;
}
>.flex-box>.select-box{
  width : 600px;
  box-shadow: 1px 1px 10px lightgrey;
  border-radius: 10px;
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
  >h3{
    width : 120px;
    text-align: left;
  }
  >span{
    cursor: pointer;
    font-weight: 900;
    font-size: 20px;
  }
  >input{
    width : 10%;
  }
  >.selected-img{
    width : 80px;
    height : 80px;
    border-radius: 5px;
    }
  }
}
>.pay-box{
  width : 250px;
  height : 300px;
  box-shadow: 1px 1px 10px lightgrey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 20px;
  margin : 50px 40px;
  >a>.pay-btn{
    width : 200px;
    height : 50px;
    margin:20px;
    border:none;
    border-radius: 5px;
    font-weight:900;
    font-size : 20px;
    color:#62717e;
    cursor: pointer;
    background-color: #cddeef;
    &:hover{
    background-color: #becddb;
    }
  }
}
`
//cart의 인풋과 체크박스는 선택한 아이템만큼 매핑되어서 나타나져야함.
const Cart = ({ cartItem,handleQuantity,handleRemove,ttlPrice }) => {

  return <CartContainer id = 'cart-container'>
    {cartItem.length === 0 ? <div className = 'no-item-box'>
    <h1 className = 'no-item-emoji'>🤦🏻‍♀️</h1>
    <h1 className = 'no-item'>장바구니에 상품이 없습니다.</h1>
    </div>
    :<>
    <div className = 'flex-box'>
    {cartItem.map((el,idx)=>{
      return <div className = 'select-box' key = {idx}>
          <h2 className = 'remove-btn' onClick = {(e)=> handleRemove(e,el.id)}>&times;</h2>
          <div className = 'selected-items' >
          <img className ='selected-img' src = {el.img} alt = 'selected img'/>
          <h3>{el.title}</h3>
          <p>{el.price} won</p>
          <span className = 'minus' onClick = {(e)=>handleQuantity(e,el.id)} >◀️</span><p>{el.cartCount}</p><span className='plus' onClick = {(e)=>handleQuantity(e,el.id)}>▶️</span>
        </div>
      </div>
    })}
    </div>
    <div className='pay-box'>
    <TtlPrice ttlPrice = {ttlPrice} cartItem = {cartItem}/>
    <Link to = '/go-paid'><button className='pay-btn'>결제하기</button></Link>
    </div>
    </>
    }

    </CartContainer>
}

export default Cart;