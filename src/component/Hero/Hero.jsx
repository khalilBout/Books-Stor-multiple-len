import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Vector from "../../assets/website/hero2.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import allBooks from "../../data/books";
import book from "../../assets/books/Grp1.png";
import bookDark from "../../assets/books/Grp2.png";
const Hero = () => {
  const heroRef = useRef();
  const isHeroRefInView = useInView(heroRef, { margin: "-100px" });

  const { t } = useTranslation();
  const HeroBooks = allBooks?.slice(0, 3);
  const [parentIndex, setParentIndex] = useState(0);

  const changeHeroItem = (index) => {
    setParentIndex(index);
  };
  const ParentItem = HeroBooks[parentIndex];

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        ref={heroRef}
        className=" relative overflow-hidden min-h-[550px]  sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 mt-12"
        style={bgImage}
      >
        <img
          className=" absolute top-0 left-0 "
          src={`dark ? ${book} : ${bookDark} `}
          alt=""
        />
        <div className="container pb-4 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-0">
            {/* text content section */}
            <motion.div
              initial={{ x: "-1000px", opacity: 0 }}
              // animate={{ y: "0", opacity: 1 }}
              animate={isHeroRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center gap-4  sm:pt-0  order-2 sm:order-1 bg-gray-400/10 rounded-2xl p-4"
            >
              <div className="">
                <div className=" mb-3 text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                  {i18n.language === "ar" ? (
                    <h1>{ParentItem?.titleAr}</h1>
                  ) : (
                    <h1>{ParentItem?.title}</h1>
                  )}
                </div>
                <div className="flex justify-end mx-6">
                  <h2
                    // onClick={console.log("handleOrderPopup")}
                    className="bg-white text-primary duration-200 font-semibold py-2 px-4 rounded-full"
                  >
                    {t("hero.byAnonymous")}
                  </h2>
                </div>
              </div>
              <div className="text-[16px]">
                {i18n.language === "ar" ? (
                  <p>{ParentItem?.descriptionAr}</p>
                ) : (
                  <p>{ParentItem?.description}</p>
                )}
              </div>
              <div className="flex justify-end mx-6">
                <button
                  // onClick={console.log("handleOrderPopup")}
                  className="bg-gradient-to-r from-primary/55 to-secondary/50 hover:scale-105 duration-200 text-white font-semibold py-2 px-4 rounded-full"
                >
                  {t("hero.orderNow")}
                </button>
              </div>
            </motion.div>
            {/* Image section */}
            <motion.div
              initial={{ x: "1000px", opacity: 0 }}
              // animate={{ y: "0", opacity: 1 }}
              animate={isHeroRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative z-10 order-1 sm:order-2 mx-4 sm:mx-8 mb-12 sm:mb-8"
            >
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={ParentItem?.img}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 justify-center gap-4 absolute z-10 -bottom-[10px] sm:-bottom-[40px] lg:-right-4 ">
                {HeroBooks?.map((item, ind) => (
                  <img
                    key={item.id}
                    src={item.img}
                    onClick={
                      () => {
                        changeHeroItem(ind);
                        // console.log("id:", item.id);
                      }
                      // setIndexParentItem(item.id);
                    }
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
