import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  position: sticky;
  top:0;
  background-color : white;
  //backdrop-filter: blur(50px);
  >a{
    text-decoration:none;
    cursor: default;
    >.title-logo{
    font-size: 50px;
    text-align: center;
    color : black;
    }
  }
  >div{
    text-align: right;
    padding-right: 50px;
    box-sizing: border-box;
    >a>.btns{
    margin : 10px;
    padding : 5px;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    }
  }
`

const Header = ({count}) => {

  return <HeaderContainer id = 'header-container'>
    <Link to = '/'><h1 className = 'title-logo'> 🛒 Sook 🛒 </h1></Link>
    <div>
    <Link to = '/'><button className = 'main-page btns'>메인페이지</button></Link>
    <Link to = '/go-cart'><button className = 'cart btns'>장바구니</button></Link>
    <span>수량 : {count}</span>
    </div>
    </HeaderContainer>
}

export default Header;