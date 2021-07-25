import React, { useState } from 'react'
import { BrowserRouter , Route , Switch} from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Cart from './pages/Cart'
import PayDone from './pages/PayDone'
import itemList from './static/itemList'

const App = () => {
  const [count ,setCount ] = useState(0);
  const [itemlists] = useState(itemList)
  const [cartItem,setCartItem] = useState([]);

  const handleClick = (e,select) => {
    //cartItem 에 이미 아이템이 있다면 카운트 하지 않고, 없다면 카운트해라.
    const filtering = cartItem.filter((el)=>select.id === el.id)[0];
    if(filtering){
      //중복되는게 있을때 : 카트아이템의 i 번째의 cartCounting 에만 카트카운팅 적용하게.
      //console.log(filtering.cartCount++)
      filtering.cartCount++;
    }else{
      //중복되는게 없을때
      setCount(count+1)
      setCartItem(cartItem.concat([select]))
    }
  }

  const handleQuantity = (e,select) => {
    let copyCart = [...cartItem];
    // if className 이 plus 인것을 클릭하면 el.cartCount += 1;
    for(let el of copyCart){
      if(el.id === select){
        if(e.target.className === 'plus'){
          el.cartCount += 1;
        }else{
          el.cartCount -=1;
          //cartCount 0이되면 
          if(el.cartCount === 0){
            copyCart.splice(copyCart.indexOf(el),1);
            setCount(count-1);
          }
        }
      } 
    }
    setCartItem(copyCart)
  }

  const handleRemove = (e,select) => {
    //console.log(select)
    const filtering = cartItem.filter((el)=>el.id !== select);
    setCartItem(filtering);
    setCount(count-1);
  }

  const handleReset = () => {
    setCount(0);
    setCartItem([])
  }
  return <div id = 'container'>

    <BrowserRouter>
    <Header count = {count}></Header>
    <Switch>
    <Route exact path = '/'><Main itemlists = {itemlists}  handleClick = {handleClick}/></Route>
    <Route path = '/go-cart'><Cart cartItem = {cartItem} handleQuantity = {handleQuantity} handleRemove = {handleRemove} /></Route>
    <Route path = '/go-paid'><PayDone cartItem = {cartItem} handleReset ={handleReset} /></Route>
    </Switch>
    </BrowserRouter>
    </div>
}

export default App;