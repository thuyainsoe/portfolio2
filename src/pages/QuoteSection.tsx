import { QuoteLogo } from "@/components/Icon";

const QuoteSection = () => {
  return (
    <div className="w-full mt-[60px] md:mt-[112px] relative h-[174px] md:h-[206px] xxl:h-[174px] overflow-hidden">
      <div className="main-container flex flex-col items-center justify-center w-full mt-[10px]">
        <div className="w-full md:w-[70.4102%] border border-grayish p-[20px] md:p-[32px] text-xl md:text-2xl font-[500] relative">
          <span className="absolute top-[-10px] left-[20px] quote-before">
            <QuoteLogo />
          </span>
          With great power comes great electricity bill
          <span className="absolute bottom-[-10px] right-[20px] quote-before">
            <QuoteLogo />
          </span>
          <div className="p-[16px] w-fit border border-grayish absolute top-[100%] right-[-1px]">
            - Dr. Who
          </div>
        </div>
      </div>
      <div className="w-[6.6618%] aspect-square border border-grayish absolute top-[14px] right-[-9px] hidden md:block"></div>
    </div>
  );
};

export default QuoteSection;
