import { useEffect, useState } from "react";

const useFetch = (url: string, entry: string) => {
  const [results, setResults] = useState<any>();
  const [error, setError] = useState<any>();
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ entry }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 404) {
          throw data;
        }
        setResults(data);
        setError({});
      })
      .catch((err) => {
        setError(err);
        setResults([]);
      });
  }, [url, entry]);
  return { results, error };
};

export default useFetch;
