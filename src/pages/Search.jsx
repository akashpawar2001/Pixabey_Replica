import React from "react";
import { SearchResult } from "../components";

function Search() {
  return (
    <>
      <div className="py-10 relative">
        <h1 className="text-3xl text-white">Nature Images & Pictures</h1>
        <p className="text-purple-500">
          We handpicked more than 1,300,000 pictures for your choosing. HD to 4K
          quality images, all for free!
        </p>
      </div>
      <SearchResult />
      {/* <Category className={"grid-cols-1"} /> */}
    </>
  );
}

export default Search;
