import { useCallback, useEffect, useState } from "react";

function useLimitHook(limit) {
  const [imglimit, setImglimit] = useState([]);
  const fetchimg = useCallback(() => {
    fetch(
      `https://pixabay.com/api/?key=38248355-ef9179dc7a5f132bc12492391&image_type=photo&per_page=${limit}`
    )
      .then((Response) => Response.json())
      .then((resp) => setImglimit(resp.hits))
      .catch((error) => console.log(error));
  }, [limit]);
  useEffect(() => {
    fetchimg();
  }, [limit, fetchimg]);
  // useEffect(() => {
  //   fetchimg();
  // }, []);
  return imglimit;
}

export default useLimitHook;
