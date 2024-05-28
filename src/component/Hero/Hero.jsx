import { useState } from "react";

import Vector from "../../assets/website/blue-pattern.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import allBooks from "../../data/books";

const Hero = () => {
  const { t } = useTranslation();
  const dataBooks = allBooks?.slice(0, 3);
  const [indexParentItem, setIndexParentItem] = useState(0);
  const ParentItem = dataBooks[indexParentItem];
  console.log(ParentItem, "ParentItem");

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
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-4 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-0">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4  sm:pt-0  order-2 sm:order-1">
              <div className="">
                <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold">
                  {i18n.language === "ar" ? (
                    <h1>{ParentItem?.titleAr}</h1>
                  ) : (
                    <h1>{ParentItem?.title}</h1>
                  )}
                </h1>
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-md sm:text-xl">
                  {t("hero.byAnonymous")}
                </p>{" "}
              </div>
              <div className="text-sm ">
                {i18n.language === "ar" ? (
                  <p>{ParentItem?.descriptionAr}</p>
                ) : (
                  <p>{ParentItem?.description}</p>
                )}
              </div>
              <div className="flex justify-end mx-12">
                <button
                  onClick={console.log("handleOrderPopup")}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  {t("hero.orderNow")}
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 mx-4 sm:mx-8 mb-12 sm:mb-8">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={ParentItem?.img}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 justify-center gap-4 absolute  -bottom-[10px] sm:-bottom-[40px] lg:-right-4 ">
                {dataBooks?.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    onClick={() => {
                      setIndexParentItem(item.id);
                    }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
