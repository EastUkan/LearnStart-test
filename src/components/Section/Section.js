import style from "./Section.module.css";

const Section = ({ children }) => {
  return (
    <section className={style.section}>
      <div className={style.container}>{children}</div>
    </section>
  );
};

export default Section;
