import PropTypes from "prop-types";

import style from "./Title.module.css";

const Title = ({ text }) => {
  return <h2 className={style.title}>{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
