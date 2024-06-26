import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { useTranslation } from "react-i18next";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Banner from "../../assets/website/board.png";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  const { t } = useTranslation();
  const AppStoreRef = useRef();
  const isAppStoreRefInView = useInView(AppStoreRef, { margin: "-100px" });

  return (
    <>
      <div
        ref={AppStoreRef}
        className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={bannerImg}
      >
        <div className="container">
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="flex justify-center items-center">
              <motion.h1
                initial={{ y: "-100px", opacity: 0 }}
                // animate={{ y: "0", opacity: 1 }}
                animate={isAppStoreRefInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="text-2xl text-center sm:text-left sm:text-4xl font-semibold "
              >
                {t("appStore.title")}
              </motion.h1>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <motion.a
                initial={{ opacity: 0, scale: 0.1 }}
                // animate={{ y: "0", opacity: 1 }}
                animate={isAppStoreRefInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1 }}
                href="#"
              >
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.1 }}
                // animate={{ y: "0", opacity: 1 }}
                animate={isAppStoreRefInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1 }}
                href="#"
              >
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
