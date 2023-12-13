import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);

  return (
    <div className="text-black">
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
