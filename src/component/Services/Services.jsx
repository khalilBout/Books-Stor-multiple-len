import { useTranslation } from "react-i18next";
import i18n from "i18next";
import allBooks from "../../data/books";
import { FaStar } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();
  const dataBooks = allBooks?.slice(0, 3);

  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-white dark:bg-dark dark:text-white duration-200 ">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              {t("services.trendingBooks")}
            </p>
            <h1 className="text-3xl font-bold"> {t("services.bestBooks")}</h1>
            <p className="text-xs text-gray-400">{t("services.desc")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {dataBooks?.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <div className="text-xl font-bold">
                    {i18n.language === "ar" ? (
                      <h1>{service.titleAr.slice(0, 14)}</h1>
                    ) : (
                      <h1>{service.title.slice(0, 14)}</h1>
                    )}
                  </div>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {i18n.language === "ar" ? (
                      <h1>{service.descriptionAr.slice(0, 140)}</h1>
                    ) : (
                      <h1>{service.description.slice(0, 140)}</h1>
                    )}
                  </p>
                  <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                    {t("services.orderNow")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
