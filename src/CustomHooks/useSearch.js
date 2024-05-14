import { useEffect, useState } from "react";

function useSearch(search, pages = "10") {
  const [searchImg, setSearchimg] = useState([]);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=38248355-ef9179dc7a5f132bc12492391&q=${search}&per_page=${pages}&safesearch=true&orientation=horizontal`
    )
      .then((res) => res.json())
      .then((data) => setSearchimg(data.hits));
  }, [search, pages]);
  return searchImg;
}

export default useSearch;
