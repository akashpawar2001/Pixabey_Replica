import { useEffect, useState } from "react";
import useSearch from "../../CustomHooks/useSearch";
import { Button } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SearchResult() {
  const [searchParams] = useSearchParams();

  const [limits, setLimits] = useState(24);
  useEffect(() => {
    console.log(limits);
  }, [limits]);
  const data = useSearch(searchParams.get("q"), limits);

  return data.length === 0 ? (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  ) : (
    <>
      <div className={`grid gap-6 sm:grid-cols-2 md:grid-cols-4 py-10`}>
        {data.map((item, index) => (
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
            key={item.id}
            className="brightness-75 inline-flex relative hover:brightness-95 overflow-hidden"
          >
            <Link to={`/photos/:${item.id}`}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-full w-full inline max-w-full hover:scale-105 ease-in-out object-cover object-center "
                src={item.webformatURL}
                alt="gallery-photo"
              />
            </Link>
          </motion.div>
        ))}
        <br />
      </div>
      <div className="flex justify-center items-center">
        <Button
          onClick={() => setLimits((prevLimit) => prevLimit + 10)}
          className="z-10 hover:bg-orange-900 bg-orange-800 mb-8"
        >
          Load More
        </Button>
      </div>
    </>
  );
}
