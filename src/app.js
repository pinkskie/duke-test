import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import { useLocalStorage } from './hooks/useLocalStorage'

// сделал задержку 
window.delay = ms => new Promise(res => {setTimeout(() => res("delay"), ms)});

export const App = () => {
  const [loading, setLoading] = useState(null)
  const [cart,setCart] = useLocalStorage('cart')

  const handleClick = async (item) => {
    try {
      setLoading(item.id)
      await delay(1000)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data = await res.json()
      console.log(data)
      setCart(cart.map(el => {
        console.log(item,el)
        if(el.id === item.id ) {
          return {...el, basket: !el.basket}
        } 
        return el
      }))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(null)
    }
  }
  
  return (
    <>

      <Header/>
      <div className="container">
        <h1 className="title">Картины эпохи Возрождения</h1>
        <div className="content">
          {cart.map(item => <Cards item={item} key={item.id} handleClick={handleClick} loading={item.id === loading}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )

}