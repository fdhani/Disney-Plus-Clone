import { useCallback, useEffect, useRef, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const initial = useRef(true);
  const [loading, setLoading] = useState(false);
  console.log({
    url,
  });

  const fetcherCb = useCallback(async () => {
    console.log("changed");

    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    json && setData(json);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      fetcherCb();
    }
  }, [fetcherCb]);

  useEffect(() => {
    console.log("changed");

    if (initial.current) return;
    fetcherCb();
  }, [fetcherCb]);

  return {
    loading,
    data,
  };
};

export default useFetch;
