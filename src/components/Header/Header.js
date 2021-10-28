import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./Header.module.css";

const Header = ({ toggleModal }) => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        LearnStart
      </Link>
      <button onClick={toggleModal} className={style.button}>
        Sign Up
      </button>
    </header>
  );
};

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Header;
