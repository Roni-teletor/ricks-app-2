import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-end border-y-2">
        <div className="w-[50%] flex justify-around">
            <Link to="/">
          <button>home</button>
            </Link>
          <button>comments</button>
          <Link to="/ricky">
          <button>Ricky morty</button>
          </Link>
          <Link to="/ricky/test">
          <button>test</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
