import PropTypes from "prop-types";

import style from "./StoriesListItem.module.css";

const StoriesListItem = ({ name, desc }) => {
  return (
    <div className={style.item}>
      <div className={style.imgBox}></div>
      <p className={style.text}>{desc}</p>
      <div className={style.authorBox}>
        <div className={style.avatar}></div>
        <p className={style.name}>{name}</p>
      </div>
    </div>
  );
};

StoriesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default StoriesListItem;
