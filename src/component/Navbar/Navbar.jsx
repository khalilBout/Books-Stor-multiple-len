import Logo from "../../assets/books/logo.png";
// import { FaCartShopping } from "react-icons/fa6";
// import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import DarkMode from "./DarkMode";
import MobileLink from "./MobileLink";
import { motion } from "framer-motion";

// { handleOrderPopup }
const Navbar = ({ changeDir }) => {
  const { t } = useTranslation();
  const Menu = [
    {
      id: 1,
      name: t("navbar.home"),
      link: "/#",
    },
    {
      id: 2,
      name: t("navbar.bestSeller"),
      link: "/#services",
    },
    {
      id: 3,
      name: t("navbar.ourServices"),
      link: "/#services",
    },
    {
      id: 4,
      name: t("navbar.supervisors"),
      link: "/#services",
    },
  ];

  // const DropdownLinks = [
  //   {
  //     name: t("navbar.ourServices"),
  //     link: "/#",
  //   },
  //   {
  //     name: t("navbar.contact"),
  //     link: "/#",
  //   },
  //   {
  //     name: t("navbar.supervisors"),
  //     link: "/#",
  //   },
  // ];
  const leng = ["ar", "en"];
  return (
    <>
      <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: "-1000px", opacity: 0 }}
              // animate={{ y: "0", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <NavLink
                to="#"
                className="font-bold text-2xl sm:text-3xl flex gap-2"
              >
                <img src={Logo} alt="Logo" className="w-10" />
                {t("navbar.logo")}
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ y: "-600px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className=" font-Changa inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Simple Dropdown and Links */}
                {/* <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    {t("navbar.quickLinks")}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                   <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div> 
                </li> 
                */}
              </ul>
              {/* <button
                onClick={() => console.log("handleOrderPopup()")}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                {t("navbar.order")}
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button> */}
            </motion.div>

            {/* change leng  */}
            <motion.div
              initial={{ x: "1000px", opacity: 0 }}
              // animate={{ y: "0", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-1"
            >
              <div>
                <DarkMode />
              </div>

              <div className="group relative cursor-pointer">
                <div className="flex h-[72px] items-center gap-[2px]">
                  <IoLanguageOutline size={16} />
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute -left-5 z-[9999] hidden w-[80px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    {leng.map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => {
                            i18n.changeLanguage(item);
                            changeDir();
                          }}
                          className="inline-block w-[60px] rounded-md p-2 hover:bg-primary/20"
                        >
                          {item.toUpperCase()}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <MobileLink Menu={Menu} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
