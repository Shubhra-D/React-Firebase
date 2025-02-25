import { login, logout } from "@/Redux/actions/authAction";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  let user = useSelector((state)=>state.user);
  console.log(user)
  const dispatch = useDispatch();
   
  const handleLogin = ()=>{
    dispatch(login);
  }
  const handleLogout = () => {
    dispatch(logout);
  };
  return (
    <Flex
      as="nav"
      bg={"blue.500"}
      color="white"
      justifyContent={"space-between"}
      p={3}
      m={2}
      alignItems={"center"}
    >

      <Text fontWeight={"bold"}>My Social Media App</Text>
      
      {/* Navigation Links */}
      <Flex gap={6}>
        <Link to="/">Dashboard</Link>
        {!user && <Link to="/signup">Sign Up</Link>}
      </Flex>
      <Box>
        {user ? (
          <Flex gap={4}>
            <Text>{user.email}</Text>
            <Button onClick={handleLogout}>Logout</Button>
          </Flex>
        ) : (
          <Link to="/login">
            <Button onClick={handleLogin}>Login</Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
