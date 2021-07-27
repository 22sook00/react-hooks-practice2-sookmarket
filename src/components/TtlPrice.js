import React from 'react'
import styled from 'styled-components'

const Ttl = styled.div`
>h2{
  font-size: 28px;
  margin:50px 0 5px 0;
  color :#62717e;
}
>h1{
  margin:0;
  font-size: 48px;
}
>h3{
  font-size:26px;
  text-align:right;
  margin:0 0 50px 0;
  color :#62717e;
}
`

const TtlPrice = ({cartItem }) => {

  const ttl = () => {
    let result = 0;
    for(let i = 0; i<cartItem.length; i++){
      result += cartItem[i].price * cartItem[i].cartCount
    }
    return result;
  }
  ttl();
  return <>
    <Ttl>
      <h2>Total_</h2>
      <h1> {ttl()}</h1> 
      <h3>won</h3>
    </Ttl>
    </>
}

export default TtlPrice;