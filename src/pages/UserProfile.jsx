import React, { useState } from "react";
import useUser from "../hooks/useUser";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

function UserProfile() {
  const { data: user } = useUser();
  const [activeTab, setActiveTab] = useState("collections");
  return (
    <>
      <div className="w-full  mx-auto py-10">
        <div
          className="w-full h-[200px] z-10 flex justify-center items-end relative"
          style={{
            background:
              "url(https://i.pinimg.com/originals/fc/36/fa/fc36fa7816fe1847b3dcbc352f227a0f.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          key={user?.id}
        >
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full absolute -bottom-10"
          />
        </div>
        <div className="flex w-full justify-center py-10">
          <h1 className="text-3xl font-bold text-white z-10">
            {user?.displayName}
          </h1>
        </div>
      </div>

      <div className="flex justify-center text-gray-100 items-center gap-5 pb-5 ">
        <button
          onClick={() => {
            setActiveTab("collections");
          }}
          className={`relative duration-300  border py-1 px-4 rounded-lg hover:bg-gray-800 ${
            activeTab === "collections" &&
            "bg-gray-200 text-blue-800 border-none"
          }`}
        >
          Collections
        </button>

        <button
          onClick={() => {
            setActiveTab("like");
          }}
          className={`relative  duration-300 border py-1 px-6 borde rounded-lg hover:bg-gray-800 ${
            activeTab === "like" && "text-blue-800 bg-gray-200 border-none"
          }`}
        >
          Liked
        </button>
      </div>
      <div
        className={`grid gap-6 grid-cols-2 place-items-center sm:grid-cols-4 md:grid-cols-8 py-10`}
      >
        <AnimatePresence>
          {activeTab === "collections" && (
            <React.Fragment>
              {user?.collections?.length > 0 ? (
                user?.collections?.map((items, index) => (
                  <React.Fragment>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{
                        delay: index * 0.3,
                        ease: easeInOut,
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      key={items.id}
                      className="brightness-90 inline-flex  relative hover:brightness-100 overflow-hidden"
                    >
                      <Link to={`/photos/:${items.id}`}>
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="h-full w-full inline sm:max-w-full hover:scale-105 ease-in-out object-cover object-center "
                          src={items.previewURL}
                          alt={items.id}
                        />
                      </Link>
                    </motion.div>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment>
                  <div className="w-full col-span-12 flex justify-center h-screen">
                    <iframe
                      title="nofound"
                      className="relative"
                      src="https://lottie.host/embed/365397f7-dfd0-4c8f-bc50-18ae162ad308/XtlQumys13.json"
                    ></iframe>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeTab === "like" && (
            <React.Fragment>
              {user?.likes?.length > 0 ? (
                user?.likes?.map((items, index) => (
                  <React.Fragment>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{
                        delay: index * 0.3,
                        ease: easeInOut,
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      key={items.id}
                      className="brightness-90 inline-flex  relative hover:brightness-100 overflow-hidden"
                    >
                      <Link to={`/photos/:${items.id}`}>
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="h-full w-full inline sm:max-w-full hover:scale-105 ease-in-out object-cover object-center "
                          src={items.previewURL}
                          alt={items.id}
                        />
                      </Link>
                    </motion.div>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment>
                  <div className="w-full col-span-12 flex justify-center h-screen">
                    <iframe
                      title="nofound"
                      className="relative"
                      src="https://lottie.host/embed/365397f7-dfd0-4c8f-bc50-18ae162ad308/XtlQumys13.json"
                    ></iframe>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default UserProfile;
