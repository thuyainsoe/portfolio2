import fourRowDot from "@/assets/images/lines/four_row_dot.svg";
import fiveRowDot from "@/assets/images/lines/five_row_dot.svg";
import aboutme from "@/assets/images/aboutme-image.png";

const AboutSection = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[120px] relative overflow-hidden">
      <div className="main-container">
        {/* top header */}
        <div className="flex items-center gap-[16px] w-full">
          <div className="text-[24px] lg:text-[32px] text-white font-[500] text-nowrap">
            <span className="text-lavender">#</span>about-me
          </div>
          <span className="w-[37.8937%] block h-[1px] bg-lavender"></span>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center llg:items-start justify-between gap-[10%] llg:gap-[16.6016%]">
          {/* left section */}
          <div className="w-full sm:w-1/2 llg:w-[50.2930%]">
            <div className="flex mt-[23px] text-grayish text-base">
              Hello, i’m Elias! <br />
              <br /> I’m a self-taught front-end developer based in Kyiv,
              Ukraine. I can develop responsive websites from scratch and raise
              them into modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </div>
            <button className="mt-[27px] w-fit border border-lavender py-[8px] px-[16px]">
              Read more {"->"}
            </button>
          </div>
          {/* right section */}
          <div className="w-full sm:w-1/2 llg:w-[33.1055%] relative">
            <img
              className="w-full max-h-[400px] sm:max-h-[507px] object-contain sm:object-cover"
              src={aboutme}
              alt=""
            />
            <img
              className="w-[24.7788%] aspect-square absolute top-[11.6371%] left-[-1.1799%]"
              src={fourRowDot}
              alt=""
            />
            <img
              className="w-[30.67847%] aspect-[2_/_1] absolute bottom-[33.9250%] right-[4.7198%]"
              src={fiveRowDot}
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="hidden lg:block w-[7.5403%] aspect-square absolute top-[59.3864%] right-[-1.6%]"
        src={fourRowDot}
        alt=""
      />
      <div className="hidden lg:block  w-[11.3470%] aspect-square border border-grayish absolute left-[-5.6735%] top-[25.1894%]"></div>
    </div>
  );
};

export default AboutSection;
