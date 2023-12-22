import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex bg-slate-600 justify-between items-center p-4 mb-5">
      <Link className="text-2xl font-bold text-white" href={"/"}>
        ToDo App
      </Link>
      <Link
        className="bg-green-600 p-3 text-white font-bold text-xl"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default NavBar;
