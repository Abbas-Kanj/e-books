"use client";
import React, { useEffect, useState } from "react";
import ThemeController from "./ThemeController";
import Image from "next/image";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import SearchBox from "./searchBox/SearchBox";
import { BuiltInProviderType } from "next-auth/providers/index";

// Type definition for the providers
type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
> | null;

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Providers>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileImage = session?.user?.image;

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <div className="navbar bg-base-100 mb-5">
      <div className="navbar-start">
        <a className="md:ml-6 md:text-xl text-lg text-primary">Bookly</a>
      </div>
      <div className="navbar-center">
        <SearchBox />
      </div>
      <div className="md:hidden navbar-end">
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {mobileMenuOpen && (
          <div className="dropdown top-8 dropdown-open dropdown-end">
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow"
            >
              <li>
                <ThemeController />
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Desktop menu hidden below md screens */}
      <div className="hidden md:navbar-end md:flex md:gap-1">
        <ThemeController />
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* Signed In */}
        {session && (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    alt="User-Image"
                    width={40}
                    height={40}
                    src={
                      profileImage ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
        {/* Signed Out */}
        {!session &&
          providers &&
          Object.values(providers).map((provider: any, index) => (
            <button
              onClick={() => signIn(provider.id)}
              key={index}
              className="flex items-center bg-base-300 hover:base-200 hover:text-white rounded-md px-3 py-2"
            >
              <FaGoogle className="size-5 mr-2" />
              <span>Login or Register</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
