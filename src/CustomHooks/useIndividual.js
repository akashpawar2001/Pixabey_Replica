import { useEffect, useState } from "react";

function useIndividual(id) {
  const [individual, setIndividual] = useState([]);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=38248355-ef9179dc7a5f132bc12492391&id=${id}&safesearch=true`
    )
      .then((res) => res.json())
      .then((data) => setIndividual(data.hits));
  }, [id]);
  return individual;
}

export default useIndividual;
