import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  width : 100%;
  height : 100vh;
  padding : 0 0 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
>.items{
  width : 280px;
  box-shadow: 1px 1px 10px lightgrey;
  border-radius: 10px;
  margin : 20px;

  >.item{
    margin:10px;
  }
  >.relative-box >.item-imgs{
    width : 100%;
    border-radius: 5px 5px 0 0 ;
    &:hover{
      opacity: 0.7;
    }
  }
  >.item-price{
    font-size: 32px;
    font-weight: 900;
    margin:-50px 10px 20px;
  }
  >.add-cart-btn{
    width : 100%;
    font-size: 18px;
    padding : 10px;
    box-sizing: border-box;
    cursor: pointer;
    border:none;
    background-color: #cddeef;
    //text-shadow: 1px 1px 5px white;
    border-radius: 0 0 5px 5px;
    &:hover{
    background-color: #becddb;
    }
  }
}

`
const Main = ({itemlists,handleClick}) => {
  return <MainContainer id = 'main-container'>
  {itemlists.map((el,id)=>{
      return <div className = 'items' key = {id}>
        <div className = 'relative-box'>
          <img className = 'item-imgs' src = {el.img} alt = 'img1'/>
        </div>
        <p className= 'item-price item'>{el.price} won</p>
        <h2 className='item-title item'>{el.title} </h2>
        <p className = 'item'>{el.description}</p>
        <button className='add-cart-btn' onClick = {(e)=>handleClick(e,el)}>장바구니 담기</button>
      </div>
    })} 
    </MainContainer>
}

export default Main;