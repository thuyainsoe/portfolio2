import { Logo } from "./Icon";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-charcoal z-[100]">
      <div className="main-container pt-[32px] pb-[8px] flex w-full items-center justify-between">
        {/* logo */}
        <div className="text-base font-bold flex items-center gap-[8px]">
          <Logo /> Elias
        </div>
        {/* nav links */}
        <ul className="items-center gap-[32px] hidden sm:flex">
          <li>
            <span className="text-lavender">#</span>home
          </li>
          <li className="text-grayish">
            <span className="text-lavender">#</span>works
          </li>
          <li className="text-grayish">
            <span className="text-lavender">#</span>about-me
          </li>
          <li className="text-grayish">
            <span className="text-lavender">#</span>contacts
          </li>
        </ul>
        <div className="flex flex-col items-start gap-[8px]">
          <span className="h-[1px] w-[26px] bg-lavender block"></span>
          <span className="h-[1px] w-[26px] bg-lavender block"></span>
          <span className="h-[1px] w-[13px] bg-lavender block"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
