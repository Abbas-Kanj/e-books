"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import {
  MdDashboard,
  MdBookmark,
  MdLogout,
  MdBook,
  MdSettings,
  MdExplore,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { getProviders, useSession } from "next-auth/react";
import RegisterModal from "./RegisterModal";

type Props = {
  children: any;
};

function Drawer({ children }: Props) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const myRegisterModelRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center w-full mb-10">
        {
          <>
            <Navbar />
            {children}
          </>
        }
        <label
          htmlFor="my-drawer-2"
          className="btn btn-base-content px-2 opacity-60 hover:opacity-100 lg:hidden fixed left-1 top-60"
        >
          <MdKeyboardArrowRight className="size-6" />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full items-center w-30 px-4 py-8 flex flex-col justify-between">
          {/* Sidebar content here */}
          <Link href="/">
            {/* <Image src={} alt="" className=""/> */}
            <MdBook className="size-10" />
          </Link>
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "border-b-2 border-solid border-primary w-8"
                  : ""
              }  hover:opacity-50 self-center py-2`}
            >
              <MdDashboard className="size-8" />
            </Link>
            <Link
              href="/explore"
              className={`${
                pathname === "/explore"
                  ? "border-b-2 border-solid border-primary w-8"
                  : ""
              }  hover:opacity-50 self-center py-2`}
            >
              <MdExplore className="size-8" />
            </Link>

            {!session ? (
              <>
                <MdBookmark
                  className="size-12 hover:opacity-50
                 self-center py-2 cursor-pointer"
                  onClick={() => myRegisterModelRef.current?.showModal()}
                />
                <RegisterModal
                  myRegisterModelRef={myRegisterModelRef}
                  session={session}
                  providers={providers}
                />
              </>
            ) : (
              <Link
                href="/bookmarks"
                className={`${
                  pathname === "/bookmarks"
                    ? "border-b-2 border-solid border-primary w-8"
                    : ""
                }  hover:opacity-50 self-center py-2`}
              >
                <MdBookmark className="size-8" />
              </Link>
            )}

            <Link
              href="/profileSettings"
              className={`${
                pathname === "/profileSettings"
                  ? "border-b-2 border-solid border-primary w-8"
                  : ""
              }  hover:opacity-50 self-center py-2`}
            >
              <MdSettings className="size-8" />
            </Link>
          </div>
          {/* Online friends*/}
          <div className="avatar-group flex-col -space-y-6 rtl:space-y-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
