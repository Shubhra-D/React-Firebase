
import { useEffect, useState } from 'react'
import './App.css'
import { signInWithGoogle } from './firebaseAuth'

function App() {
 const [user,setUser] = useState(null)
  console.log(user)
  useEffect(()=>{
     //load user from localstorage
     const storedUser = localStorage.getItem("User")
     if(user){
      setUser(JSON.parse(storedUser));
     }
  },[])
 const handleLogin = async()=>{
   const user = await signInWithGoogle();
   if(user){
    setUser(user)
   }
   console.log(user)
  }; 

return (
    <>
      <h1>Firebase React App</h1>
      {user ? (
        <div>
          <h3>Welcome {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt=""/>
          <button>Logout</button>
        </div>
      ):(
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </>
  )
}

export default App
