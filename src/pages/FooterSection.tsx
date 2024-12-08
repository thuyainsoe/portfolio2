import { GithubLogo, LinkedInLogo, Logo } from "@/components/Icon";

const FooterSection = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[145px] border-t border-grayish">
      <div className="main-container py-[32px] flex flex-col gap-[20px] sm:gap-[48px]">
        <div className="w-full flex-col sm:flex-row gap-y-[20px] flex sm:items-center justify-between">
          {/* left section */}
          <div className="flex flex-col items-start gap-[16px]">
            <div className="flex items-start gap-[12px] flex-col">
              <div className="text-base font-bold flex items-center gap-[8px]">
                <Logo /> Thurein
              </div>
              <span className="text-grayish text-base">
                thuyainsoe163361@gmail.com
              </span>
            </div>
            <div className="text-base text-white">Web Frontend Developer</div>
          </div>
          {/* right section */}
          <div className="flex flex-col items-start gap-[12px]">
            <h2 className="text-2xl">Media</h2>
            <div className="flex items-center gap-[8px]">
              <a href="https://github.com/thuyainsoe" target="_blank">
                <GithubLogo />
              </a>
              <a
                href="https://www.linkedin.com/in/thu-yain-soe-b49a2b242/"
                target="_blank"
              >
                <LinkedInLogo />
              </a>
            </div>
          </div>
        </div>
        <span className="flex w-full sm:items-center sm:justify-center">
          © Copyright 2022. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default FooterSection;
