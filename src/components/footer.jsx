import React from "react";
import { footerLinks } from "../constants";
import { FaLinkedinIn } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="bg-neutral-700 my-5 h-[1px] w-full" />

      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <p className="font-semibold text-gray text-xs">
          Copright @ 2024 mercedes Inc. All rights reserved.
        </p>
        <a
            href="https://www.linkedin.com/in/alaa-shalaby-19466526a/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <FaLinkedinIn className="text-gray text-xs" />
          </a>
        <div className="flex items-center">
          {footerLinks.map((link, i) => (
            <React.Fragment key={i}>
              <p className="font-semibold text-gray text-xs">
                {link}
              </p>
              {i !== footerLinks.length - 1 && <span className="mx-2">|</span>}
            </React.Fragment>
          ))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
