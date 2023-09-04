import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = async (url) => fetch(url).then((res) => res.json());

const RickyMorty = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    fetcher
  );
  console.log("kkkkkk", data);
  return (
    <div className="w-full flex flex-wrap justify-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.results?.map((hello) => (
          <div
            key={hello.id}
            className="group max-w-sm mx-4 my-4 rounded-md overflow-hidden shadow-lg w-full h-auto transition-transform transform scale-100 hover:scale-110"
          >
            <img src={hello.image} alt={hello.name} className="w-full h-auto" />

            <div className="h-auto hidden group-hover:block">
              <h1 className="font-bold text-xl mb-2">{hello.name}</h1>
              <h1 className="font-bold text-xl mb-2">{hello.status}</h1>
              <h1 className="font-bold text-xl mb-2">{hello.species}</h1>
              <h1 className="font-bold text-xl mb-2">{hello.gender}</h1>
            </div>
          </div>
        ))
      )}
      <div className="w-full flex justify-evenly justify-center items-center h-[100px] mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-200 w-[10%] py-2 rounded"
        >
          Previous
        </button>
        <button
          className="bg-blue-200 w-[10%] py-2 rounded"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!data?.info?.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RickyMorty;
