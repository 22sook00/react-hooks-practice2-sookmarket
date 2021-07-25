import React from 'react'
import styled from 'styled-components'

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
    <div>합계 : {ttl()} </div>
    </>
}

export default TtlPrice;