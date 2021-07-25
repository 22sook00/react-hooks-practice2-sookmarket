import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  width : 100%;
  height : 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
>.items{
  width : 300px;
  box-shadow: 2px 2px 20px grey;
  border-radius: 10px;
  margin : 10px;
  padding : 10px;
  box-sizing: border-box;
  >.item-imgs{
  width : 120px;
  height : 120px;
  }
}

`
const Main = ({itemlists,handleClick}) => {

  return <MainContainer id = 'main-container'>
  {itemlists.map((el,id)=>{
      return <div className = 'items' key = {id}>
        <img className = 'item-imgs' src = {el.img} alt = 'img1'></img>
        <h2>{el.title} </h2>
        <p>간단 설명 : {el.description}</p>
        <p>가격 {el.price} won</p>
      <button onClick = {(e)=>handleClick(e,el)}>장바구니 담기</button>
    </div>
    })} 
    </MainContainer>
}

export default Main;