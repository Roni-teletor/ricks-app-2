import React, { useState } from "react";
import Skeleton from "./Skeleton";
import { getStatusSymbol } from "../utilities/getStatusCharacter";
import { getSpeciesSymbol } from "../utilities/getStatusCharacter";
import { getGenderSymbol } from "../utilities/getStatusCharacter";
import { Link } from "react-router-dom";

const RickyMorty = ({data, isLoading, setPage, page}) => {
  
  const [loaded, setLoaded] = useState(false);
 
 

  return (
    <div className="w-full flex flex-wrap justify-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.results?.map((CharacterData) => {
          console.log("hhhh", CharacterData);
          return (
            <>
            <Link to={`/ricky/:${CharacterData?.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <div
              key={CharacterData.id}
              className="group max-w-sm mx-4 my-4 rounded-lg overflow-hidden shadow-lg w-full h-auto transition-transform transform scale-100 hover:scale-110 bg-blue-400 cursor-pointer"
            >
              {!loaded && <Skeleton />}
              <img
                className={`w-full h-auto ${
                  loaded ? <Skeleton /> : "opacity-0"
                }`}
                src={CharacterData.image}
                alt={CharacterData.name}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
              <div className="h-full hidden group-hover:flex text-center  flex-col hidden ">
                <h1 className="font-bold text-xl mb-2">Name: {CharacterData.name}</h1>
                <h1 className="font-bold text-xl mb-2">
                  Status: {getStatusSymbol(CharacterData.status)}
                </h1>
                <h1 className="font-bold text-xl mb-2">
                  Species: {getSpeciesSymbol(CharacterData.species)}
                </h1>
                <h1 className="font-bold text-xl mb-2">
                  Gender: {getGenderSymbol(CharacterData.gender)}
                </h1>
              </div>
            </div>
            </Link>
            </>
          );
        })
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
