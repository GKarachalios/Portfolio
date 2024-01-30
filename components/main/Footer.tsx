import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="about-me"
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] "
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">
                <a href="https://github.com/GKarachalios" target="_blank">
                  Github
                </a>
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">
                <a
                  href="https://www.linkedin.com/in/giannis-karachalios-66ba5627b"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">
                <a
                  href="https://www.instagram.com/giannis_karachalios/"
                  target="_blank"
                >
                  Instagram
                </a>
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">
                {" "}
                <a
                  href="https://www.facebook.com/john.karachalios.1"
                  target="_blank"
                >
                  Facebook
                </a>
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                gkarachalios96@gmail.com
              </span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                jkakarachalios@icloud.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
