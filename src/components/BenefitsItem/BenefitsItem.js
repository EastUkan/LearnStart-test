import PropTypes from "prop-types";

import style from "./BenefitsItem.module.css";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

const BenefitsItem = ({ text, desc }) => {
  return (
    <li className={style.list}>
      <div className={style.textWrapper}>
        <Title text={text} />
        <Paragraph desc={desc} />
      </div>
      <div className={style.imgBox}></div>
    </li>
  );
};

BenefitsItem.propTypes = {
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BenefitsItem;
