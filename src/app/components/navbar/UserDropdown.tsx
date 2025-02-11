"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function UserDropdown() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) return null;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="btn btn-ghost gap-2 normal-case">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>{user.name?.[0] || user.email?.[0]}</span>
            </div>
          </div>
          <span className="hidden md:inline">{user.name || "Profile"}</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={`${
                    active ? "bg-base-200" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  👤 Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/settings"
                  className={`${
                    active ? "bg-base-200" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  ⚙️ Settings
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut({ callbackUrl: "/auth/login" })}
                  className={`${
                    active ? "bg-error text-error-content" : "text-error"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  🚪 Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}