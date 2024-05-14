import React from "react";
import { useNavigate } from "react-router-dom";
import { GallaryCarousel, Tab, MasonryGridGallery } from "../components";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-8 ">
        <GallaryCarousel />
        <Tab className="mt-10 py-5" />
        <MasonryGridGallery />
        <div className="grid place-items-center py-5">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => navigate("/images/:backgrounds")}
            className="bg-blue-800 py-2 px-6 rounded text-gray-300 font-bold tracking-widest z-20"
          >
            More
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Home;
