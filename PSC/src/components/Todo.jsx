//realTimeDatabase
import React, { useEffect, useState } from 'react'

export const Todo = () => {
  const [data,setData] = useState([])
  const [newTask,setNewTask]  = useState("");
 
  
  const fetchTodos = ()=>{
    axios({
      url:`https://console.firebase.google.com/u/1/project/react-todo-app-efb3c/database/react-todo-app-efb3c-default-rtdb/data/~2F`,
      method:"GET"
    }).then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
    
  }
 useEffect(()=>{
    
    fetchTodos()
 },[]) 
  return (
    <div>


    </div>
  )
}
