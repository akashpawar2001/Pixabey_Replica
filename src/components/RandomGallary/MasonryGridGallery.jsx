import useLimitHook from "../../CustomHooks/useLimitHook";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MasonryGridGallery = () => {
  const images = useLimitHook(12);
  return (
    <>
      <div className="text-center">
        <span className="relative z-10  text-white text-5xl px-6 py-2">
          Gallary
        </span>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                delay: index * 0.2,
                ease: easeInOut,
              }}
              key={item.id}
              className="brightness-90 cursor-pointer hover:brightness-100"
            >
              <Link to={`/photos/:${item.id}`}>
                <motion.img
                  className="h-40 w-full max-w-full  object-cover object-center"
                  src={item.webformatURL}
                  alt="gallery-photo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default MasonryGridGallery;
