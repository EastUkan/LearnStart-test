import { Link } from "react-router-dom";

import style from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/stories" className={style.button}>
      Read Now
    </Link>
  );
};

export default Button;
