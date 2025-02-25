import { signup } from "@/Redux/actions/authAction";
import { Button, Center, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signup(email,password))
  };

  return (
    <Center h={"50vh"}>
    <VStack m={4} p={6} borderRadius={"md"} boxShadow={"rgba(0,0,0,0.45) 0px 5px 10px"}>
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
      <Button onClick={handleSignUp}>Signup</Button>
    </VStack>
    </Center>
  );
};

export default Signup;
