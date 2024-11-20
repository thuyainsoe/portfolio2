import { DiscordLogo, MailLogo } from "@/components/Icon";

const ContactSection = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[112px]">
      <div className="main-container">
        {/* top header */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-[16px] w-full">
            <div className="text-[32px] text-white font-[500] text-nowrap">
              <span className="text-lavender">#</span>contacts
            </div>
            <span className="w-[12.4023%] block h-[1px] bg-lavender"></span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-[20px] md:flex-row items-start mt-[20px] md:mt-[45px]">
          <div className="w-full md:w-[50.2930%]">
            {/* description */}
            <div className="text-base text-grayish">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </div>
          </div>
          <div className="w-full md:w-[49.707%] flex justify-end">
            <div className="border w-full md:w-fit border-grayish p-[16px]">
              <h3 className="text-base font-[600] text-white mb-[16px]">
                Message me here
              </h3>
              <div className="flex items-center gap-[5px] font-normal text-grayish">
                <DiscordLogo />
                <span>!Elias#3519</span>
              </div>
              <div className="flex items-center gap-[5px] font-normal text-grayish">
                <MailLogo />
                <span>thuyainsoe163361@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
