"use client";
import { apiDomain } from "@/utils/requests";
import { useRef, useState } from "react";
import { MdBugReport } from "react-icons/md";
import { toast } from "react-toastify";

const BugButton = () => {
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState(false);

  const myReviewModelRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === "") {
      setWarning(true);
      return;
    }
    try {
      const res = await fetch(`${apiDomain}/reports`, {
        method: "POST",
        body: JSON.stringify(message),
      });
      if (res.status === 201) {
        setMessage("");
        toast.success("Bug reported, Thank you 😃");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the bug");
    }
  };

  return (
    <>
      <div
        className="tooltip fixed bottom-5 right-5 tooltip-left"
        data-tip="Found a bug?"
        onClick={() => myReviewModelRef.current?.showModal()}
      >
        <MdBugReport
          className="size-10 p-1 bg-black cursor-pointer border-solid
         border-black border-2 rounded-full z-50 opacity-50 hover:shadow-drop
          hover:opacity-90"
        />
      </div>
      <dialog id="my_modal_3" ref={myReviewModelRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-4">Report Bug</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <textarea
                className="textarea textarea-bordered textarea-lg text-base"
                value={message}
                name="message"
                id="message"
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                  setWarning(false);
                }}
              ></textarea>
              {warning && (
                <h1 className="text-error border border-solid border-error rounded-full p-2 text-center">
                  Field cannot be empty
                </h1>
              )}
            </div>
            <button type="submit" className="btn w-full self-center">
              Submit
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default BugButton;
