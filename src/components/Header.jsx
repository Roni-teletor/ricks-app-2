import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-end border-y-2 h-[8vh] flex items-center bg-[#010E03] ">
        <div className="w-[50%] flex justify-around text-[#4DA04D]">
            <Link to="/">
          <button>Home</button>
            </Link>
           <Link to="/comments">
           <button>Comments</button>
           </Link>
          <Link to="/ricky">
          <button>Ricky & Morty</button>
          </Link>
          <Link to="/ricky/test">
          <button>Test</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
