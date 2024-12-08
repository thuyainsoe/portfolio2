import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const projectData = [
  {
    id: 1,
    name: "Ecobazar",
    teechstacks: ["React", "Tailwind"],
    desc: "Responsive e-commerce homepage design",
    image: project1,
    link: "https://ecobazar-assessment.vercel.app/",
  },

  {
    id: 2,
    name: "Imagify",
    teechstacks: ["React", "Tailwind", "Node.js"],
    desc: "An app that generates images based on your text prompts.",
    image: project2,
    link: "https://imagify-omega-ruby.vercel.app/",
  },
  {
    id: 3,
    name: "Travel.",
    teechstacks: ["React", "CSS"],
    desc: "Landing page for a booking site where users can explore destinations and make bookings",
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
                      <a
                        href={project?.link}
                        target="_blank"
                        className="w-fit px-[16px] py-[8px] text-white border border-lavender font-[500] flex gap-[10px]"
                      >
                        Live <span>{"<~>"}</span>
                      </a>
                      <button className="w-fit px-[16px] py-[8px] text-grayish border border-grayish font-[500] flex gap-[10px]">
                        Git
                        <div className="w-[20px] h-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            fill="#ABB2BF"
                          >
                            <path
                              fill="#ABB2BF"
                              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            />
                          </svg>
                        </div>
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
