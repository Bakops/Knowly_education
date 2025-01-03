import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

const MePage = async () => {
  const data = await getSession();
  console.log(data);

  
  return (
    <>
     <div className="flex align-middle justify-center text-3xl font-poppins"><h1 className="text-black">Profile</h1></div>
    <div className="flex justify-center items-center h-screen flex-col">
      <Image
        src={data?.user?.picture}
        alt="Profile Picture"
        width={200}
        height={200}
      />
      <h1 className="text-2xl text-black">Pseudos {data?.user?.nickname}</h1>
      <h1 className="text-2xl text-black"> Email: {data?.user?.name}</h1>

      <br />

      <Link
        href="/api/auth/login"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3"
      >
        Login
      </Link>

      <Link
        href="/api/auth/logout?returnTo=/test"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
      >
        Logout
      </Link>
    </div>
    </>
   
  );
};

export default MePage;