import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const PaidContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
>.pay-done{
  font-size:40px;
  margin:30px 0 0 0 ;
}
>h2{margin:10px 0 30px 0;}
>.paid-box{
  box-shadow: 1px 1px 10px lightgrey;
  border-radius: 10px;
  width : 500px;
  padding : 20px;
  >.paid-map-box{
    width : 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style:none;
    padding:0;

  >.paid-img{
    width : 50px; height : 50px;
  }
  >.paid-item{
    font-size:18px;
    margin : 5px;
    }
  >.paid-idx{
    font-weight: 800;
    margin-right: -10px;
  }
  >.paid-title{
    width : 100px;
  }
  }
}
>a>.go-main-btn{
    width : 200px;
    height : 50px;
    margin:50px 0;
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
`
const PayDone = ({cartItem, handleReset}) => {

  return <PaidContainer id = 'paid-container'>
    <h1 className = 'pay-done'>결제가 완료되었습니다.</h1>
    <h2>구매해주셔서 감사합니다.</h2>
    <div className = 'paid-box'> 
    {cartItem.map((el,idx)=>{ 
      return <div key = {idx} className = 'paid-map-box'>
        <div className = 'paid-idx paid-item'>{idx+1}</div>
        <img className='paid-img paid-item' src = {el.img} alt = 'paid-img'/>
        <div className = 'paid-title paid-item'>{el.title}</div> 
        <div className = 'paid-price paid-item'>{el.price} won </div>     
        <div className = 'paid-quantity paid-item'>{el.cartCount} 개</div> 
        <div className = 'paid-price paid-item'>{el.price * el.cartCount} won </div>      
      </div>

    })}
    </div>
    <Link to ='/'><button onClick = {handleReset} className = 'go-main-btn'>처음으로</button></Link>
    </PaidContainer>
}

export default PayDone;