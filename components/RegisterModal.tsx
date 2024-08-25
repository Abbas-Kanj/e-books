"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

type Props = {
  myRegisterModelRef: any;
  session: any;
  providers: any;
  title: string;
};

const RegisterModal = ({
  myRegisterModelRef,
  session,
  providers,
  title,
}: Props) => {
  return (
    <dialog id="my_modal_2" ref={myRegisterModelRef} className="modal">
      <div className="modal-box flex flex-col items-center gap-10 w-fit p-10">
        <h3 className="text-center text-lg">{title}</h3>
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
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default RegisterModal;
