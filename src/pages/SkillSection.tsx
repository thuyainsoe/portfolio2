import fourRowDot from "@/assets/images/lines/four_row_dot.svg";
import purpleLine1 from "@/assets/images/lines/purple_line_1.svg";

const SkillSection = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[104px] relative overflow-hidden">
      <div className="main-container">
        {/* top */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-[16px] w-full">
            <div className="text-[24px] lg:text-[32px] text-white font-[500]">
              <span className="text-lavender">#</span>skills
            </div>
            <span className="w-[23.3398%] block h-[1px] bg-lavender"></span>
          </div>
        </div>
        {/* bottom */}
        <div className="w-full mt-[12px] flex flex-col sm:flex-row items-center gap-[5.8594%]">
          {/* left section */}
          <div className="hidden sm:block md:ml-[32px] mt-[20px] sm:mt-0 w-full sm:w-[40%] md:w-1/2 llg:w-[34.0820%] aspect-[349_/_282] relative ">
            <div className="w-[24.6418%] aspect-square border border-grayish absolute top-0 right-[10.3152%]"></div>
            <div className="w-[14.8997%] aspect-square border border-grayish absolute right-0 bottom-[13.1206%]"></div>
            <img
              className="w-[18.0516%] aspect-square absolute left-0 bottom-[64.1844%]"
              src={fourRowDot}
              alt=""
            />
            <img
              className="w-[18.0516%] aspect-square absolute  bottom-[26.9505%] right-[31.2321%]"
              src={fourRowDot}
              alt=""
            />
            <img
              className="w-[32.3782%] aspect-square absolute  bottom-0 left-[4.2980%]"
              src={purpleLine1}
              alt=""
            />
          </div>
          {/* right section */}
          <div className="w-full sm:w-[60%]  md:w-1/2 llg:w-[57.0313%] mt-[31px] grid grid-cols-2 llg:grid-cols-3 gap-[16px]">
            {/* first */}
            <div className="w-full llg:col-[1/2]">
              <div className="w-full border border-grayish">
                <h3 className="text-base font-[600] text-white p-[8px] border-b border-grayish">
                  Languages
                </h3>
                <div className="flex items-center gap-[8px] flex-wrap text-base text-grayish p-[8px]">
                  <span>TypeScript</span>
                  <span>Lua</span>
                  <span>Python</span>
                  <span>Javascript</span>
                </div>
              </div>
            </div>
            {/* second */}
            <div className="w-full flex flex-col gap-[16px] col-[1/2] llg:col-[2/3]">
              <div className="w-full border border-grayish">
                <h3 className="text-base font-[600] text-white p-[8px] border-b border-grayish">
                  Databases
                </h3>
                <div className="flex items-center gap-[8px] flex-wrap text-base text-grayish p-[8px]">
                  <span>SQLite</span>
                  <span>PostgreSQL</span>
                  <span>Mongo</span>
                </div>
              </div>
              <div className="w-full border border-grayish">
                <h3 className="text-base font-[600] text-white p-[8px] border-b border-grayish">
                  Other
                </h3>
                <div className="flex items-center gap-[8px] flex-wrap text-base text-grayish p-[8px]">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>EJS</span>
                  <span>SCSS</span>
                  <span>REST</span>
                  <span>Jinja</span>
                </div>
              </div>
            </div>
            {/* third */}
            <div className="w-full flex flex-col gap-[16px] row-[1/3] col-[2/3] llg:col-[3/4]">
              <div className="w-full border border-grayish">
                <h3 className="text-base font-[600] text-white p-[8px] border-b border-grayish">
                  Tools
                </h3>
                <div className="flex items-center gap-[8px] flex-wrap text-base text-grayish p-[8px]">
                  <span>VSCode</span>
                  <span>Neovim</span>
                  <span>Linux</span>
                  <span>Figma</span>
                  <span>XFCE</span>
                  <span>Arch</span>
                  <span>Git</span>
                  <span>Font Awesome</span>
                </div>
              </div>
              <div className="w-full border border-grayish">
                <h3 className="text-base font-[600] text-white p-[8px] border-b border-grayish">
                  Frameworks
                </h3>
                <div className="flex items-center gap-[8px] flex-wrap text-base text-grayish p-[8px]">
                  <span>React</span>
                  <span>Vue</span>
                  <span>Disnake</span>
                  <span>Discord.js</span>
                  <span>Flask</span>
                  <span>Express.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
