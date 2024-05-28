// import { useTranslation } from "react-i18next";
import Hero from "../component/Hero/Hero";
import Services from "../component/Services/Services";
import Banner from "../component/Banner/Banner";
import AppStore from "../component/AppStore/AppStore";
import AllBooks from "../component/AllBooks/AllBooks";
import SliderSuper from "../component/Slider-Super/SliderSuper";

const Index = () => {
  // const { t } = useTranslation();

  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <AllBooks />
      <SliderSuper />
    </div>
  );
};

export default Index;
