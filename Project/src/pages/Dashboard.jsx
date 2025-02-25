import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div style={{ margin: "10px", padding: "10px", fontSize: "18px" }}>
      <Heading style={{ textAlign: "center" }}>This is Your Dashboard </Heading>
      {user && (
        <Text as={"h6"} textAlign={"center"}>
          {user.email}
        </Text>
      )}
    </div>
  );
};

export default Dashboard;
