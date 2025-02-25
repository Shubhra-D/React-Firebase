import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/Firebase/firebaseConfig";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGN_OUT = "SIGN_OUT";
export const SINGIN_SUCCESS = "SIGNIN_SUCCESS";

//signup************
export const signup = (email, password) => async (dispatch) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
  } catch (err) {
    console.log("Sign-Up Error:", err);
  }
};
//login *************
export const login = (email, password,navigate) => async (dispatch) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({ type: SINGIN_SUCCESS, payload: userCredentials.user });
    navigate("/");
  } catch (err) {
    console.error("Login Error :", err);
  }
};

//logout****************
export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: SIGN_OUT });
  } catch (err) {
    console.error("Sign-out error:", err);
  }
};
