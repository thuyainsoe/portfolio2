import purpleLine1 from "@/assets/images/lines/purple_line_1.svg";
import fourRowDot from "@/assets/images/lines/four_row_dot.svg";
import heroImg from "@/assets/images/hero_img.png";

const HeroSection = () => {
  return (
    <div className="w-full mt-[62px]">
      <div className="main-container flex flex-col-reverse md:flex-row items-center justify-between gap-[18px]">
        {/* left section */}
        <div className="w-full md:w-[52.4414%] pt-[62px]">
          <h3 className="text-white text-[28px] lg:text-[32px] font-[600] leading-normal">
            Elias is a <span className="text-lavender">web designer</span> and
            <span className="text-lavender"> front-end developer</span>
          </h3>
          <p className="text-grayish text-base mt-[20px] lg:mt-[25px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="mt-[20px] lg:mt-[24px] border border-lavender w-[148px] h-[37px] flex items-center justify-center">
            Contact Me
          </button>
        </div>
        {/* right section */}
        <div className="w-full md:w-[47.5586%] relative">
          <img
            className="ml-auto w-full object-cover relative z-[2]"
            src={heroImg}
            alt=""
          />
          <img
            className="w-[33.9169%] absolute top-[21.7617%] left-0 md:left-[-2.6258%] z-[1]"
            src={purpleLine1}
            alt=""
          />
          <img
            className="w-[18.3007%] absolute bottom-[14.5078%] right-[3.5011%] z-[3]"
            src={fourRowDot}
            alt=""
          />
          <div
            className="w-fit lg:w-[87.956%] p-[8px] flex items-center gap-[10px] border
             border-grayish absolute top-[100%] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-0 lg:left-[3.5011%]"
          >
            <div className="min-w-[16px] h-[16px] bg-lavender"></div>
            <span className="text-grayish text-base text-nowrap">
              Currently working on
              <span className="font-bold text-white"> Portfolio</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
