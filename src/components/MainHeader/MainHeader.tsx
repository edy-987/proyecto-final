import "./MainHeader.css";
import { IoSearchOutline } from "react-icons/io5";

const MainHeader = () => {
  return (
    <div className="mh-container">

      <div className="mh-search-box">
        <IoSearchOutline className="mh-search-icon" />
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="mh-logo">
        TOLSEN
      </div>

    </div>
  );
};

export default MainHeader;
