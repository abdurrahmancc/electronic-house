import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../Hooks/Firebase/Firebase";

const EmailVerification = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  return (
    <div style={{ height: "100vh" }} className="container">
      <div className="d-flex h-100  text-center justify-content-center align-items-center">
        <div>
          <h3>Verify Your Email </h3>

          <button
            className=" btn-primary  text-white  rounded-1 px-3 py-2 text-white"
            onClick={async () => {
              await sendEmailVerification();
              toast.success("Sent email", { id: "verification" });
            }}
          >
            Verify Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
