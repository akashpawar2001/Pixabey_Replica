import { Carousel } from "@material-tailwind/react";
import { AlgoliaSearch } from "..";
import useLimitHook from "../../CustomHooks/useLimitHook";

const GallaryCarousel = () => {
  const LimitHook = useLimitHook(20);
  return (
    <div className="relative h-[500px] w-full grid place-items-center">
      <AlgoliaSearch />
      <Carousel
        loop={true}
        autoplay={true}
        className="rounded-xl brightness-50 w-full mt-10 object-cover relative"
      >
        {LimitHook.map((item) => {
          return (
            <img
              key={item.id}
              src={item.largeImageURL}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default GallaryCarousel;
