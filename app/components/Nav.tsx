import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="Navbar flex justify-between p-4 bg-purple-500">
        <div className="Img">
          <img src="" alt="" />
        </div>
        <div className="Main">
          <nav>
            <ul>
              <Link className="px-4 font-bold  text-1xl hover:underline" href={"/"}>
                Home
              </Link>
              <Link className="px-4 font-bold text-1xl  hover:underline" href={"/about"}>
                About
              </Link>
              <Link className="px-4 font-bold text-1xl  hover:underline" href={"/contact"}>
                Contact
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
