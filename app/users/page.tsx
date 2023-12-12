import React from "react";
import UserTable from "./UserTable";

export interface User {
  id: number;
  name: string;
  email:string
}
const UsersPage = async () => {
  

  return (
    <div className="text-black">
      <h1>Users</h1>
     <UserTable/>
    </div>
  );
};

export default UsersPage;
