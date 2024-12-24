"use client";

import React from "react";
import { BsStars } from "react-icons/bs";
import LinkButton from "../button/link-button";
import SvgEffect from "./hero-svg-background-effect";
import { motion } from "framer-motion";

const LearningJourney = () => {
  return (
    <div className="def-contain margining w-full">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className=" mb-8 relative bg-[#006965] w-full text-white min-h-[500px] rounded-3xl overflow-hidden flex flex-col items-center justify-center"
      >
        <SvgEffect />

        <div className="relative z-10 flex w-full flex-col items-center justify-center font-jakarta  h-full px-8 md:px-0">
          <div className="flex flex-row p-2">
            <BsStars size={24} />
            <p className="mb-4 text-sm ml-2 font-light">
              {" "}
              Empowering Success in Immigration, Business, and Investments
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 mt-4 text-center">
          Start your journey to success!
          </h1>

          <p className="md:text-lg text-base md:font-light font-[10] mb-12 mt-3 text-center">
          Transform your business with our industry-standard services and achieve all your business goals on an international scale.
          </p>

          <LinkButton
            url={"/immigration"}
            label={"Get Started"}
            isIcon={true}
            className="w-[#177px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LearningJourney;
