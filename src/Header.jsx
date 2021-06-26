import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "./store/StateProvider";
import { auth } from "./utils/firebase";
import "./Header.css";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) auth.signOut();
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option-line-one">Hello {user?.email}</span>
            <span className="header__option-line-two">
              Sign {user ? "Out" : "In"}
            </span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option-line-one">Returns</span>
            <span className="header__option-line-two">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option-line-one">Your</span>
            <span className="header__option-line-two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__option-basket">
            <ShoppingBasket />
            <span className="header__option-line-two header__basket-count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
