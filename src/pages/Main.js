import BenefitsList from "../components/BenefitsList/BenefitsList";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import Paragraph from "../components/Paragraph/Paragraph";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import { mock } from "../mock";

const Main = () => {
  return (
    <div>
      <Hero title={"Stay hungry. Stay foolish."}>
        <Paragraph desc={"Learn from the hottest startups in the world."} />
        <Button />
      </Hero>

      <Section>
        <Title text={"Smart tools for founders."} />
        <Paragraph
          desc={
            "LearnStart is the simplest way for startup founders to discover inspiring stories from startup founders from all over the world, all in one place."
          }
        />
      </Section>

      <BenefitsList data={mock} />

      <Section>
        <Title text={"Let's get started."} />
        <Button />
      </Section>
    </div>
  );
};

export default Main;
