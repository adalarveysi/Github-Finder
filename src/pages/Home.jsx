import React from "react";
import UserList from "../components/Users/UserList";
import UserSearch from "../components/Users/UserSearch";
import UserItem from "../components/Users/UserItem";

const Home = () => {
  return (
    <div>
        
        <UserSearch/>
        <UserList/>
        
    </div>
  );
};

export default Home;
