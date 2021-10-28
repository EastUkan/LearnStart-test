import PropTypes from "prop-types";

import style from "./Paragraph.module.css";

const Paragraph = ({ desc }) => {
  return <p className={style.text}>{desc}</p>;
};

Paragraph.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default Paragraph;
