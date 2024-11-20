import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const projectData = [
  {
    id: 1,
    name: "ChertNodes",
    teechstacks: ["HTML", "CSS", "Python", "FLASK"],
    desc: "Minecraft servers hosting",
    image: project1,
  },

  {
    id: 2,
    name: "ProtectX",
    teechstacks: [
      "React",
      "Express",
      "Discord.js",
      "Node.js",
      "HTML",
      "CSS",
      "Python",
      "FLASK",
    ],
    desc: "Discord anti-crash bot",
    image: project2,
  },
  {
    id: 3,
    name: "Kahoot Answers Viewer",
    teechstacks: ["CSS", "Express", "Node.js"],
    desc: "Get answers to your kahoot quiz",
    image: project3,
  },
];
const ProjectSection = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[74px] relative overflow-hidden">
      <div className="main-container">
        {/* top */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-[16px] w-full">
            <div className="text-[24px] lg:text-[32px] text-white font-[500]">
              <span className="text-lavender">#</span>projects
            </div>
            <span className="hidden w-[49.9023%] md:block h-[1px] bg-lavender"></span>
          </div>
          <div className="flex items-center min-w-fit">View all ~~{">"}</div>
        </div>
        {/* bottom cards */}
        <div className="w-full mt-[30px] md:mt-[48px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper mt-[30px] lg:mt-[60px]"
          >
            {projectData.map((project) => (
              <SwiperSlide>
                <div
                  key={project.id}
                  className="w-full border border-grayish max-h-fit"
                >
                  <img
                    className="w-full object-cover aspect-[330_/_201] border-b border-grayish"
                    src={project.image}
                  />
                  <div className="flex flex-wrap p-[8px] text-grayish border-b border-grayish gap-[8px]">
                    {project.teechstacks.map((tech, index) => (
                      <span className="uppercase" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-start p-[16px] gap-[16px]">
                    <h3 className="text-2xl font-[500]">{project.name}</h3>
                    <p className="text-grayish text-base">{project.desc}</p>
                    <div className="flex items-center gap-[16px]">
                      <button className="w-fit px-[16px] py-[8px] text-white border border-lavender font-[500] flex gap-[10px]">
                        Live <span>{"<~>"}</span>
                      </button>
                      <button className="w-fit px-[16px] py-[8px] text-grayish border border-grayish font-[500] flex gap-[10px]">
                        Cached {">="}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="hidden md:block w-[11.3470%] aspect-square border border-grayish absolute bottom-[16.6966%] right-[-6.3690%]"></div>
    </div>
  );
};

export default ProjectSection;
