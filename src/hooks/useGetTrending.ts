import { useEffect } from "react";

const url = "https://api.themoviedb.org/3/trending/all/day";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTI3ODg3ODk0N2E2NzUxOTQ2NDdjNzZmY2I4ZWI0NiIsInN1YiI6IjY2NjlhODE4M2YwNjI0NzQ4YTM3ZjI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O0IIFjjxw8aAdN_-f15X1MTB5IXLOD3wH02Tc7RBBlw",
  },
};

const useGetTrending = () => {
  useEffect(() => {}, []);
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
