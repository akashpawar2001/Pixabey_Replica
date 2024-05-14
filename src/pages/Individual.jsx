import React, { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";
import { MainLoader, Related } from "../components";
import { useParams } from "react-router-dom";
import useIndividual from "../CustomHooks/useIndividual";
import { Button } from "@material-tailwind/react";
import { RWebShare } from "react-web-share";
import { saveAs } from "file-saver";
import { saveToCollections, saveToLikes } from "../api";
import useUser from "../hooks/useUser";
export default function Individual() {
  const { data: user, refetch: userRefetch } = useUser();
  const params = useParams();
  const [cat, setCat] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (params !== cat) setIsLoading(true);
    setCat(params.id.substring(1, params.id.length));
    setIsLoading(false);
  }, [cat, params]);
  const active = useIndividual(cat);
  const title = active[0]?.tags.split(",")[0];

  async function addToCollection(e) {
    e.stopPropagation();
    await saveToCollections(user, active[0]);
    userRefetch();
  }

  async function likes(e) {
    e.stopPropagation();
    await saveToLikes(user, active[0]);
    userRefetch();
  }

  if (isLoading) {
    return <MainLoader />;
  }
  return active.length === 0 || null ? (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  ) : (
    <>
      <section className="grid lg:grid-cols-3 relative py-8  grid-cols-1">
        <div className="grid gap-4 sm:col-span-2 sm:px-8">
          <div>
            <img
              className="h-full w-full sm:max-w-full rounded-lg object-cover object-center"
              src={active[0]?.largeImageURL || ""}
              alt=""
            />
          </div>
          <div className="flex items-center flex-wrap gap-2 lg:hidden">
            <Button
              onClick={() => saveAs(active[0].webformatURL)}
              className="bg-green-500"
            >
              Download
              <br /> {active[0]?.webformatWidth || ""} *{" "}
              {active[0]?.webformatHeight || ""}
            </Button>
            <Button
              onClick={() => saveAs(active[0].largeImageURL)}
              className="bg-green-500"
            >
              Download
              <br /> {active[0]?.imageWidth || ""} *{" "}
              {active[0]?.imageHeight || ""}
            </Button>
            <RWebShare
              data={{
                text: "Image",
                url: `${active[0].largeImageURL}`,
                title: "Image",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button className="flex items-center bg-blue-900 py-4 gap-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>

                <span className="text-gray-400">share</span>
              </Button>
            </RWebShare>
          </div>
          <div className="py-2 flex">
            <h1 className="text-3xl text-white">Related Images</h1>
          </div>
        </div>
        <>
          <Card className="top-20 w-full lg:block hidden py-8 px-2 shadow-xl h-[430px] bg-blue-gray-800/70 shadow-blue-gray-900/5 sticky right-0 z-10">
            <div className="flex justify-evenly mb-5 flex-wrap gap-2">
              <Button
                onClick={() => saveAs(active[0].webformatURL)}
                className="bg-green-500"
              >
                Download
                <br /> {active[0]?.webformatWidth || ""} *{" "}
                {active[0]?.webformatHeight || ""}
              </Button>
              <Button
                onClick={() => saveAs(active[0].largeImageURL)}
                className="bg-green-500"
              >
                Download
                <br /> {active[0]?.imageWidth || ""} *{" "}
                {active[0]?.imageHeight || ""}
              </Button>
            </div>
            <hr />
            <div className="flex justify-evenly mt-5 flex-wrap gap-2">
              <p onClick={likes} className="flex gap-2 cursor-pointer">
                {user?.likes?.filter((item) => item.id === active[0].id) !=
                0 ? (
                  <React.Fragment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-6 h-6 fill-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </React.Fragment>
                )}

                <span className="text-gray-400">
                  {active[0]?.likes +
                    user?.likes?.filter((item) => item.id === active[0].id)
                      .length || active[0]?.likes}
                </span>
              </p>

              <p
                onClick={addToCollection}
                className="flex gap-2 cursor-pointer"
              >
                {user?.collections?.filter(
                  (item) => item.id === active[0].id
                ) != 0 ? (
                  <React.Fragment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6 fill-yellow-600`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                  </React.Fragment>
                )}
                <span className="text-gray-400">save</span>
              </p>
              <RWebShare
                data={{
                  text: "Image",
                  url: `${active[0].largeImageURL}`,
                  title: "Image",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <p className="flex gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>

                  <span className="text-gray-400">share</span>
                </p>
              </RWebShare>
            </div>
            <div className="px-5 mt-5 mb-3 w-full">
              <p className="text-gray-200 flex justify-between">
                <span>View</span> <span>{active[0]?.views || ""}</span>
              </p>
              <p className="text-gray-200 flex justify-between">
                <span>Downloads</span>
                <span>{active[0]?.downloads || ""}</span>
              </p>
              <details className="group">
                <summary className="text-blue-500 group-open:text-green-500 list-none">
                  <span className="group-open:hidden mr-4">Show details</span>
                  <span className="hidden group-open:inline mr-4">
                    Hide details
                  </span>
                </summary>
                <p className="text-gray-200 flex justify-between">
                  <span>Media Type</span>
                  <span>jpg</span>
                </p>
                <p className="text-gray-200 flex justify-between">
                  <span>Resolution</span>
                  <span>
                    {active[0]?.imageWidth || ""} *{" "}
                    {active[0]?.imageHeight || ""}
                  </span>
                </p>
              </details>
            </div>
            <hr />
            <div className="px-5 py-5 flex items-center gap-5">
              <img
                src={active[0]?.userImageURL || ""}
                className="rounded-full shadow-lg"
                width={"50px"}
                alt=""
              ></img>
              <span className="text-gray-300">{active[0]?.user || ""}</span>
            </div>
            <p className="px-5 text-gray-300">Tags : {active[0]?.tags || ""}</p>
          </Card>
        </>
        <div className="w-full sm:col-span-2 sm:px-8">
          {title !== undefined ? <Related cat={{ title }} /> : null}
        </div>
      </section>
    </>
  );
}
