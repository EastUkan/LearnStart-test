import Slider from "react-slick";
import PropTypes from "prop-types";

import StoriesListItem from "../StoriesListItem/StoriesListItem";
import Title from "../Title/Title";

import style from "./StoriesList.module.css";

const StoriesList = ({ data }) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className={style.container}>
      <Title text={"Latest"} />

      <div className={style.sliderWrapper}>
        <Slider {...settings}>
          {data.map(({ id, name, desc }) => (
            <div key={id}>
              <StoriesListItem name={name} desc={desc} />
            </div>
          ))}
        </Slider>
      </div>

      <Title text={"Editor's Picks"} />

      <div className={style.sliderWrapper}>
        <Slider {...settings}>
          {data.map(({ id, name, desc }) => (
            <div key={id}>
              <StoriesListItem name={name} desc={desc} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

StoriesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default StoriesList;
