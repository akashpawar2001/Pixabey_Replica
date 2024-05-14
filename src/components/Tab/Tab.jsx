import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Tab({ className = "" }) {
  const navigate = useNavigate();
  return (
    <motion.div className={`flex flex-wrap justify-center ${className}`}>
      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:backgrounds`)}
          className="bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6"
        >
          backgrounds
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:fashion`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6"
        >
          fashion
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:nature`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6"
        >
          nature
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:science`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-yellow-600 hover:border-yellow-700 hover:bg-yellow-700 hover:text-white shadow-md py-2 px-6"
        >
          science
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:education`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-purple-500 hover:border-purple-600 hover:bg-purple-500 hover:text-white shadow-md py-2 px-6"
        >
          education
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:feelings`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-teal-500 hover:border-teal-600 hover:bg-teal-500 hover:text-white shadow-md py-2 px-6"
        >
          feelings
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:transportation`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-brown-500 hover:border-brown-600 hover:bg-brown-500 hover:text-white shadow-md py-2 px-6"
        >
          transportation
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:travel`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-pink-500 hover:border-pink-600 hover:bg-pink-500 hover:text-white shadow-md py-2 px-6"
        >
          travel
        </motion.button>
      </div>

      <div className="m-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => navigate(`/images/:buildings`)}
          className=" bg-black/45 tracking-wide text-gray-500 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6"
        >
          buildings
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Tab;
