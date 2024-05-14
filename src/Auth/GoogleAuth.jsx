import React, { useEffect } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../Auth/firebase.config";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
// import MainSpinner from "../components/MainSpinner";
function GoogleAuth() {
  const googleAuthProvider = new GoogleAuthProvider();
  const { data, isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data) {
      navigate("/", { replace: true });
    }
  }, [isLoading, data, navigate]);

  const googleClick = async () => {
    await signInWithRedirect(auth, googleAuthProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="flex items-center flex-col justify-center gap-5 h-[340px]">
      <p className="text-2xl font-semibold text-white z-10 text-center">
        Click here to login through google
      </p>
      <div className="relative w-full flex justify-center">
        <button
          onClick={googleClick}
          className="absolute px-4 py-2 border flex gap-2 border-slate-200 rounded-lg hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />

          <span className="text-white">Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default GoogleAuth;
