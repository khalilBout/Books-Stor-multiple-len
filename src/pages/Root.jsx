import { Outlet } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { useState } from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/{{ns}}.json",
    },
  });

export default function Root() {
  // const [orderPopup, setOrderPopup] = useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  const changeDir = () => {
    window.document.dir = i18n.dir();
  };
  return (
    <div className="font-Title overflow-x-hidden">
      <div className=" fixed top-0 left-0 right-0 z-50">
        <Navbar changeDir={changeDir} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
