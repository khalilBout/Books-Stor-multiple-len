import { FaStar } from "react-icons/fa6";
import allBooks from "../../data/books";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const AllBooks = () => {
  // const booksData = allBooks?.slice(0, 3);
  const { t } = useTranslation();

  return (
    <>
      <div className="pt-14 pb-12 bg-white dark:bg-dark dark:text-white duration-200">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("allBooks.title-sm")}
            </p>
            <h1 className="text-3xl font-bold">{t("allBooks.title")}</h1>
            <p className="text-xs text-gray-400">{t("allBooks.desc")}</p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {allBooks.map(({ id, img, title, titleAr, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">
                      {i18n.language === "ar" ? (
                        <h1>{titleAr.slice(0, 14)}</h1>
                      ) : (
                        <h1>{title.slice(0, 14)}</h1>
                      )}
                    </h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                {t("allBooks.viewAllBooks")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
