import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export default function AlgoliaSearch() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${name}`);
  };
  return (
    <div className="absolute z-10 px-2 sm:w-3/5">
      <div className="group relative text-white w-full">
        <label
          className="grid text-center gap-2 drop-shadow-2xl"
          htmlFor="searchImg"
        >
          <span className="text-3xl font-bold">
            Stunning royalty-free images & royalty-free stock
          </span>
          <span className="mb-3">
            Over 4.4 million+ high quality stock images, Backgrounds and png
            shared by our talented community.
          </span>
        </label>
        <form onSubmit={handleSubmit} className="grid gap-2">
          <Input
            id="searchImg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search for the images"
            className="focus:!border-t-gray-900 text-black group-hover:border-2 bg-white"
          />
          <Button type="submit" className="w-fit text-center mx-auto">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
