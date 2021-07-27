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

    const filtering = cartItem.filter((el)=>select.id === el.id)[0];
    if(filtering){
      filtering.cartCount++;
    }else{
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