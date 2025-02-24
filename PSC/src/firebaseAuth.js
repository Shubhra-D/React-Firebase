import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from './firebaseConfig'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//GOOGLE AUTHENTICATION
export const signInWithGoogle = async()=>{
  try{
    const result = await signInWithPopup(auth,googleProvider)
    const user = result.user;
    //store user in local storage to not loose after refreshing the page
    localStorage.setItem("USER",JSON.stringify(user))
    return user;

  }catch(err){
    console.log("Credentials not Verified",err)
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