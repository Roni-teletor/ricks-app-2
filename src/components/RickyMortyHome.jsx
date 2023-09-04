import React, { useState } from "react";
import useSWR from "swr";
import Skeleton  from "./Skeleton";
import { getStatusSymbol } from "../utilities/getStatusCharacter";
import { getSpeciesSymbol } from "../utilities/getStatusCharacter";
import { getGenderSymbol } from "../utilities/getStatusCharacter";

const fetcher = async (url) => fetch(url).then((res) => res.json());

const RickyMorty = () => {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    fetcher
  );

  return (
    <div className="w-full flex flex-wrap justify-center bg-[#010E03]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.results?.map((hello) =>{
          console.log('hhhh', hello)
          return (
          <div
            key={hello.id}
            className="group max-w-sm mx-4 my-4 rounded-md overflow-hidden shadow-lg w-full h-auto transition-transform transform scale-100 hover:scale-110  border-4 border-[#60B854]"
          >
            {!loaded && 
                <Skeleton />
            }
            <img 
            className={`w-full h-auto ${loaded ? <Skeleton /> : 'opacity-0'}`} 
            src={hello.image} 
            alt={hello.name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            />
            <div className="h-full hidden group-hover:flex text-center text-white bg-[#4DA04D] flex-col">
              <h1 className="font-bold text-xl mb-2">Name: {hello.name}</h1>
              <h1 className="font-bold text-xl mb-2">Status:  {getStatusSymbol(hello.status)}</h1>
              <h1 className="font-bold text-xl mb-2">Species: {getSpeciesSymbol(hello.species)}</h1>
              <h1 className="font-bold text-xl mb-2">Gender:  {getGenderSymbol(hello.gender)}</h1>
            </div>
          </div>
        )})
      )}
      <div className="w-full flex  justify-center items-center justify-evenly  h-[100px] mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-[#60B854] w-[10%] py-2 rounded"
        >
          Previous
        </button>
        <button
          className="bg-[#60B854] w-[10%] py-2 rounded"
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
