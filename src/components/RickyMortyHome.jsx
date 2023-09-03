import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => fetch(url).then((res) => res.json());

const RickyMorty = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    fetcher
  );
  console.log("dataaa", data);
  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.results?.map((hello) => {
            console.log("datamapping", hello);
            return (
              <div
                key={hello?.id}
                className="h-[300px] justify-start items-center flex-col  flex max-w-sm divide-x divide-gray-200 relative"
              >
                <div
                  className="w-[249px] h-[230px] rounded-lg border border-blue-800 mr-5 rounded-md transform
                                transition duration-500 hover:scale-110 cursor-pointer"
                >
                  <img
                    className={`w-full h-full object-cover`}
                    src={hello.image}
                    alt=""
                  />
                  
                </div>
                
                
              </div>
            );
          })
        )}

        <div className="w-[100%] flex justify-evenly justify-center items-center h-[100px]">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="bg-blue-200 w-[10%]"
          >
            Previous
          </button>
          <button
            className="bg-blue-200 w-[10%]"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!data?.info?.next}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RickyMorty;
