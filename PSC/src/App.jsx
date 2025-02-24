
import { useEffect, useState } from 'react'
import './App.css'
import { logOut, signInWithGoogle } from './firebaseAuth'

function App() {
 const [user,setUser] = useState(null)
  console.log(user)

  //get the data of user
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

  const handlelogOut = async()=>{
     await logOut();
     setUser(null);
  }
return (
    <>
      <h1>Firebase React App</h1>
      {user ? (
        <div>
          <h3>Welcome {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt=""/>
          <button onClick={handlelogOut}>Logout</button>
        </div>
      ):(
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </>
  )
}

export default App
