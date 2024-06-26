import React, { useState } from "react";
import { motion } from "framer-motion";
import i18n from "i18next";

const MobileLink = ({ Menu }) => {
  const isDir = i18n.dir();
  console.log("dir:", isDir);

  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "#fd8d01",
    },
    opened: {
      rotate: 45,
      backgroundColor: "#fd8d01",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
      backgroundColor: "#fd8d01",
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "#fd8d01",
    },
    opened: {
      rotate: -45,
      backgroundColor: "#fd8d01",

      // backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="">
      <div className="md:hidden m-2 ">
        {/* MENU BUTTON */}
        <button
          className=" w-6 h-6 flex flex-col justify-between z-50 "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-5 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className={
              isDir === "ltr"
                ? "absolute z-10 top-20 right-0 w-screen h-screen bg-dark/90 text-white flex flex-col items-center pt-16 gap-4 text-2xl"
                : "absolute z-10 top-20  left-0 w-screen h-screen bg-dark/90 text-white flex flex-col items-center pt-16 gap-4 text-2xl"
            }
          >
            {Menu?.map((link) => (
              <motion.div
                variants={listItemVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#000000",
                  backgroundColor: "#2aa6df",
                }}
                className="cursor-pointer py-2 px-8 rounded-full"
                key={link.name}
                onClick={() => setOpen((prev) => !prev)}
              >
                <a href={`${link.link}`}>{link.name}</a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MobileLink;
