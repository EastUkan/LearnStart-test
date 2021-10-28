import PropTypes from "prop-types";

import style from "./Hero.module.css";

const Hero = ({ children, title }) => {
  return (
    <section className={style.hero}>
      <h1 className={style.title}>{title}</h1>

      {children}
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
