import { getAuth } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from './firebaseConfig'

const auth = getAuth(app);
console.log(app)
const googleProvider = new GoogleAuthProvider();
console.log(auth,googleProvider)
//GOOGLE AUTHENTICATION
export const signInWithGoogle = async()=>{
  try{
    const result = await signInWithPopup(auth,googleProvider)
    //store user in local storage to not loose after refreshing the page
    localStorage.setItem("User",JSON.stringify(result.user))
    return result.user;

  }catch(err){
    console.log("Credentials not Verified",err)
  }
}

export const logOut = async()=>{
  try{
    await signOut(auth);
    localStorage.remove("User")
  }catch(err){
     console.log("Sign-Out Error",err)
  }
}
//**********THIS  ONE IS FOR EMAIL AND PASSWORD LOGIC************ */

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });