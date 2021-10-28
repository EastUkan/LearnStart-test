import PropTypes from "prop-types";

import style from "./BenefitsList.module.css";
import BenefitsItem from "../BenefitsItem/BenefitsItem";

const BenefitsList = ({ data }) => {
  return (
    <div className={style.wrapper}>
      <ul>
        {data.map(({ text, desc, id }) => (
          <BenefitsItem key={id} text={text} desc={desc} />
        ))}
      </ul>
    </div>
  );
};

BenefitsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BenefitsList;
