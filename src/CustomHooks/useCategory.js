import { useEffect, useState } from "react";

function useCategory({ con, category }) {
  const [imgcat, setImgcat] = useState([]);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=38248355-ef9179dc7a5f132bc12492391&per_page=${con}&category=${category}&safesearch=true&orientation=horizontal`
    )
      .then((data) => data.json())
      .then((data) => setImgcat(data.hits));
  }, [con, category]);
  return imgcat;
}

export default useCategory;
