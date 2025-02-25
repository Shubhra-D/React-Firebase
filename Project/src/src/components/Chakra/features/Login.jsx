import { login } from "@/Redux/actions/authAction";
import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = ()=>{
    dispatch(login(email,password,navigate))

  }
  return (
    <div>
      <Center h={"50vh"}>
        <VStack
          m={4}
          p={6}
          borderRadius={"md"}
          boxShadow={"rgba(0,0,0,0.45) 0px 5px 10px"}
        >
          <Input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      </Center>
    </div>
  );
};

export default Login;
