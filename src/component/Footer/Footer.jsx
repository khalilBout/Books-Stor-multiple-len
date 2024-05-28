import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const FooterLinks = [
  {
    title: "Home",
    titleAr: "الرئيسية",
    link: "/#",
  },
  {
    title: "About",
    titleAr: "من نحص",
    link: "/#about",
  },
  {
    title: "Contact",
    titleAr: "أتصل بنا  ",
    link: "/#contact",
  },
  {
    title: "Blog",
    titleAr: "مدونتنا",
    link: "/#blog",
  },
];
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-light dark:bg-gray-950 dark:text-white duration-200">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              {t("footer.logo")}
            </h1>
            <p className="">{t("footer.desc")}</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>{t("footer.locl")}</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  {t("footer.importantLinks")}
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <>
                        {i18n.language === "ar" ? (
                          <span>{link.titleAr}</span>
                        ) : (
                          <span>{link.title}</span>
                        )}
                      </>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  {t("footer.links")}
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <>
                        {i18n.language === "ar" ? (
                          <span>{link.titleAr}</span>
                        ) : (
                          <span>{link.title}</span>
                        )}
                      </>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  {t("footer.location")}
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <>
                        {i18n.language === "ar" ? (
                          <span>{link.titleAr}</span>
                        ) : (
                          <span>{link.title}</span>
                        )}
                      </>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Dilshad
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
