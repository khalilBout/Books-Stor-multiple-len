import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import BooksStack from "../../assets/website/books-stack.png";
import BooksStack from "../../assets/website/library1.png";
// import Vector from "../../assets/vector3.png";

import { useTranslation } from "react-i18next";

import { MdOutlineHighQuality } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  const { t } = useTranslation();
  const BannerRef = useRef();
  const isBannerRefInView = useInView(BannerRef, { margin: "-100px" });

  //   const bgImage = {
  //     backgroundImage: `url(${Vector})`,
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //     height: "100%",
  //     width: "100%",
  //   };
  return (
    <>
      <div
        ref={BannerRef}
        className="min-h-[550px] bg-light dark:bg-dark dark:text-white duration-200"
      >
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div data-aos="slide-up" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <motion.div
                initial={{ x: "-800px", opacity: 0 }}
                // animate={{ y: "0", opacity: 1 }}
                animate={isBannerRefInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={BooksStack}
                  alt="biryani img"
                  className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                />
              </motion.div>
              {/* text content section */}
              <motion.div
                initial={{ x: "800px", opacity: 0 }}
                // animate={{ y: "0", opacity: 1 }}
                animate={isBannerRefInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center gap-6 sm:pt-0"
              >
                <h1 className="text-3xl sm:text-4xl font-bold">
                  {t("banner.title")}
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  {t("banner.desc")}

                  <br />
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <MdOutlineHighQuality className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>{t("banner.service-1")}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>{t("banner.service-2")}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>{t("banner.service-3")}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>{t("banner.service-4")}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
