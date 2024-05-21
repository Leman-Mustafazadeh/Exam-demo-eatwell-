import React, { createContext, useEffect, useState } from 'react'
import {getAll} from "../API/index"


export const ContextDemo = createContext("")

const DemoContext = ({children}) => {
    const [demos,setDemos] = useState([])
    const [basket,setBasket] = useState(localStorage.getItem("basket")? localStorage.getItem("basket") : [])
     useEffect(()=>{
        getAll().then((res)=>{
            setDemos(res.data)
        })
    },[])
  return (
    <div>
      <ContextDemo.Provider value={{demos,setDemos,basket,setBasket}}>
        {children}
      </ContextDemo.Provider>
    </div>
  )
}

export default DemoContext
