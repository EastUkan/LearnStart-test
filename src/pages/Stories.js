import HeroStories from "../components/Hero/HeroStories";
import StoriesList from "../components/StoriesList/StoriesList";
import { storiesMock } from "../mock";

const Stories = () => {
  return (
    <>
      <HeroStories title={"Stories"} />
      <StoriesList data={storiesMock} />
    </>
  );
};

export default Stories;
