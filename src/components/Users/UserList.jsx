import React, { useContext } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/GithubContext";

const UserList = () => {
  const { isLoading, users } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default UserList;
