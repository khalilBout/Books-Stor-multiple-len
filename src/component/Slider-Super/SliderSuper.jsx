import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    nameAr: "فيكتور ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    textAr: "كاتب من اصل روسي  عاش كل حياتها في النمسا الف ازيد من 1400 كتاب  ",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Satya Narayan",
    nameAr: "ساتيا نايران ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    textAr:
      "كاتب من اصل لبناني  عاش في المانيا الف ازيد من 1400 كتاب اغلبا روايات وقصص بوليسية  ",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Sachin Tendulkar",
    nameAr: "ساشين تاندلكر",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    textAr:
      "كاتب عراقي الاصل ، عاش كل حياتها في بريطانيا الف ازيد من 1200 كتاب ",
    img: "https://picsum.photos/103/103",
  },
];

const SliderSuper = () => {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-10 bg-white dark:bg-dark dark:text-white duration-200">
        <div className="container">
          <div className="text-center mb-20 max-w-[900px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("SliderSuper.title-sm")}
            </p>
            <h1 className="text-3xl font-bold">{t("SliderSuper.title")}</h1>
            <p className="text-xs text-gray-400">{t("SliderSuper.desc")}</p>
          </div>
          <div className="grid grid-cols-1 max-w-[900px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6 " key={data.id}>
                    <div className=" flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="">
                            {i18n.language === "ar" ? (
                              <h1 className="text-gray-500 text-sm text-center">
                                {data.textAr.slice(0, 200)}
                              </h1>
                            ) : (
                              <h1 className="text-gray-500 text-sm text-center">
                                {data.text.slice(0, 200)}
                              </h1>
                            )}
                          </div>
                          <div className="my-2">
                            {i18n.language === "ar" ? (
                              <h1 className="text-xl text-right font-bold text-black/80 dark:text-light">
                                {data.nameAr.slice(0, 14)}
                              </h1>
                            ) : (
                              <h1 className="text-xl font-bold text-left text-black/80 dark:text-light">
                                {data.name.slice(0, 14)}
                              </h1>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSuper;
