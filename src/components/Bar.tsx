import { FunctionComponent } from "react";

const Bar: FunctionComponent = () => {
  return (
    <button className="cursor-pointer [border:none] py-3.5 px-[15px] bg-primary-color self-stretch rounded-lg h-12 flex flex-row items-center justify-start box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 lg:w-5 lg:h-5"
        alt=""
        src="/dashboard1.svg"
      />
      <div className="dashboard8 relative text-sm font-semibold font-size-14-size-14-medium text-text-color-text-1 text-left lg:hidden">
        Dashboard
      </div>
    </button>
  );
};

export default Bar;
