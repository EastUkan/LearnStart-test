import PropTypes from "prop-types";

import style from "./Hero.module.css";

const HeroStories = ({ children, title }) => {
  return (
    <section className={style.heroStories}>
      <h1 className={style.title}>{title}</h1>

      {children}
    </section>
  );
};

HeroStories.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeroStories;
