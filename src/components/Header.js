import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    margin-bottom: 30px;
    box-sizing: border-box;
    >a>.btns{
    margin : 5px;
    padding : 5px 10px;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #cddeef;
    color : #62717e;
    font-size: 15px;
    font-weight : 700;
    &:hover{
    background-color: #becddb;
    }
    }
  }
`

const Header = ({count}) => {

  return <HeaderContainer id = 'header-container'>
    <Link to = '/'><h1 className = 'title-logo'> π Sook π </h1></Link>
    <div>
    <Link to = '/'><button className = 'main-page btns'>λ©μΈνμ΄μ§</button></Link>
    <Link to = '/go-cart'><button className = 'cart btns'>μ₯λ°κ΅¬λ</button></Link>
    <span>μλ : {count}</span>
    </div>
    </HeaderContainer>
}

export default Header;