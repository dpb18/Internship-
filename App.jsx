import React from 'react'
import Category from './Components/Category/Category'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ChatBot from 'react-simple-chatbot'
import Cart from './Pages/Cart'

const App = () => {
  const steps=[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, What are you looking for?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'Grocery', trigger: '5' },
        { value: 2, label: 'Fruits', trigger: '6' },
        { value: 3, label: 'Vegetable', trigger: '7' },
      ]
    },
    {
      id: '5',
      options: [
        { value: 1, label: 'Daily'},
        { value: 2, label: 'Monthly'},
      ],
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'Local'},
        { value: 2, label: 'Imported'},
      ],

    },
    {
      id: '7',
      options: [
        { value: 1, label: 'Fresh'},
        { value: 2, label: 'Organic'},
      ],
    },
    {
      id: '8',
      message: 'Anything more you want {previousvalue}?',
      end:true
    },

   
  ]
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <ChatBot 
      steps={steps}
      floating={true}
      botDelay={1000}/>

    </div>
  )
}

export default App