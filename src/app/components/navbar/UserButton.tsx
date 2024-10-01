import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatarPlaceholder from "../../../../public/avatar_placeholder.png";
import { Cog, UserCog, Lock, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  return (
    <div className="dropdown dropdown-end">
      <div className="avatar">
        <div
          tabIndex={0}
          role="button"
          className="w-12 rounded-full ring ring-red-600 ring-offset-base-100 ring-offset-2"
        >
          {/* <img 
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="User profile picture"
            width={50}
            height={50}/> */}
          <Image
            src={user.image || avatarPlaceholder}
            alt="User profile picture"
            width={50}
            height={50}
            // className="aspect-square rounded-full bg-background object-cover"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="flex items-center">{user.name || "User"}</li>
        <li className="flex items-center">{user.email || "UserEmail"}</li>
        <li>
          <Link href="/settings">
            {/* <Settings className="mr-2 h-4 w-4" /> */} <Cog />
            <span>Settings</span>
          </Link>
        </li>
        
        {user && user.role === "admin" && (
          <li>
            <Link href="/admin">
              <Lock className="mr-2 h-4 w-4" />
              Admin
            </Link>
          </li>
        )}
        <li>
          <Link href="/profile">
            {" "} 
            <UserCog className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </li>
        
        <li>
            <button 
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center">
              {/* <LogOut className="mr-2 h-4 w-4" /> Sign Out */}
              <LogOut />
              <span> Sign Out</span>
            </button>
          </li>
      </ul>
    </div>
  );
}
