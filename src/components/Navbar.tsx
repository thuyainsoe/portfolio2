import { useState } from "react";
import { Logo } from "./Icon";

const Navbar = () => {
  const [isNavClick, setIsNavClick] = useState(false);
  return (
    <div className="w-full sticky top-0 bg-charcoal z-[100]">
      <div className="main-container pt-[32px] pb-[8px] flex w-full items-center justify-between">
        {/* logo */}
        <div className="text-base font-bold flex items-center gap-[8px]">
          <Logo /> Thurein
        </div>
        {/* nav links */}
        <ul className="items-center gap-[32px] hidden sm:flex">
          <a href="#home" className="text-grayish cursor-pointer">
            <span className="text-lavender">#</span>home
          </a>
          <a href="#projects" className="text-grayish cursor-pointer">
            <span className="text-lavender">#</span>projects
          </a>
          <a href="#aboutme" className="text-grayish cursor-pointer">
            <span className="text-lavender">#</span>about-me
          </a>
          <a href="#contact" className="text-grayish cursor-pointer">
            <span className="text-lavender">#</span>contacts
          </a>
        </ul>
        <div
          className="sm:hidden flex flex-col items-start gap-[8px] z-[100]"
          onClick={() => {
            setIsNavClick((prev) => !prev);
          }}
        >
          <span className="h-[1px] w-[26px] bg-lavender block"></span>
          <span className="h-[1px] w-[26px] bg-lavender block"></span>
          <span className="h-[1px] w-[13px] bg-lavender block"></span>
        </div>
      </div>
      <div
        className={`${
          isNavClick ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-charcoal z-[99] sm:hidden`}
      >
        <div className="main-container pt-[32px]">
          <div className="text-base font-bold flex items-center gap-[8px]">
            <Logo /> Thurein
          </div>
        </div>
        <ul className="main-container items-start gap-[32px] flex flex-col  mt-[40px]">
          <a
            href="#home"
            className="text-grayish cursor-pointer"
            onClick={() => {
              setIsNavClick(false);
            }}
          >
            <span className="text-lavender">#</span>home
          </a>
          <a
            href="#projects"
            className="text-grayish cursor-pointer"
            onClick={() => {
              setIsNavClick(false);
            }}
          >
            <span className="text-lavender">#</span>projects
          </a>
          <a
            href="#aboutme"
            className="text-grayish cursor-pointer"
            onClick={() => {
              setIsNavClick(false);
            }}
          >
            <span className="text-lavender">#</span>about-me
          </a>
          <a
            href="#contact"
            className="text-grayish cursor-pointer"
            onClick={() => {
              setIsNavClick(false);
            }}
          >
            <span className="text-lavender">#</span>contacts
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
