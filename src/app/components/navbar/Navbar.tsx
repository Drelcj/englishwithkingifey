"use client";

import Image from "next/image";
import Link from "next/link";

// import { signIn, useSession } from "next-auth/react";

export default function Navbar () {
  // const session = useSession();
  // const user = session.data?.user;

  return (
    <div className="navbar px-10 bg-base-100 fixed w-full bg-blend-color shadow-2xl z-20">
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">About Me</Link>
            </li>
            <li>
          <Link href="/my-services">Contact Me</Link>
          </li>
            <li>
          <Link href="/my-books">My Books</Link>
          </li>
          <li>
          <Link href="/my-online-courses">My Online Courses</Link>
          </li>
            <li>
              <Link href="/blog">Blog</Link>
              <ul className="p-2">
                <li>
                  <Link href="/blog">News Content</Link>
                </li>
                <li>
                  <Link href="/articles">Articles</Link>
                </li>
              </ul>
            </li>
            {/* <li>
            <details>
              <summary><Link href="/about">About Me</Link></summary>
              <ul className="p-2">
                <li>
                  <Link href="/contact">Contact Me</Link>
                </li>
              
              </ul>
            </details>
          </li> */}
          </ul>
        </div>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dt3czltxx/image/upload/v1727703156/kingifey/kingifey_logo_hhf3uj.png"
            alt="King Ifey's logo"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <Link href="/">Home</Link>
            </li>
          <li>
          <Link href="/about">About Me</Link>
          </li>
          <li>
          <Link href="/contact">Contact Me</Link>
          </li>
          <li>
          <Link href="/my-books">My Books</Link>
          </li>
          <li>
          <Link href="/my-online-courses">My Online Courses</Link>
          </li>
          <li>
            <details>
              <summary><Link href="/blog">Blog</Link></summary>
              <ul className="p-2">
                <li>
                  <Link href="/blog">News Content</Link>
                </li>
                <li>
                <Link href="/articles">Articles</Link>
                </li>
              </ul>
            </details>
          </li>
          {/* <li>
            <details>
              <summary><Link href="/about">About Me</Link></summary>
              <ul className="p-2">
                <li>
                  <Link href="/contact">Contact Me</Link>
                </li>

              </ul>
            </details>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        {/* {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SignInButton />}  */}
        {/* create a custom signin page  later */}
        {/* <Link href="/signin" className="btn"> Log In </Link> */}
  
      </div>
    </div>
  );
};

// function SignInButton () {
//   return (
//     <button>Log in</button>
//     // <button onClick={() => signIn()} className="btn">Log In</button>
     
//   );
// }
