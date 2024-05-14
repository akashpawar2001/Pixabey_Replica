import React from "react";
import { Category, Tab } from "../components";
function AllImages() {
  return (
    <div>
      <div className="py-10 px-8 relative">
        <h1 className="text-3xl text-white">Nature Images & Pictures</h1>
        <p className="text-purple-500">
          We handpicked more than 1,300,000 pictures for your choosing. HD to 4K
          quality images, all for free!
        </p>
      </div>
      <Tab className="py-2" />
      <Category className={""} />
    </div>
  );
}

export default AllImages;
