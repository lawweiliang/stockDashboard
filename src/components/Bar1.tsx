import { FunctionComponent } from "react";

const Bar1: FunctionComponent = () => {
  return (
    <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] text-left text-sm text-text-color-text-2 font-size-14-size-14-medium lg:w-auto lg:[align-self:unset]">
      <img className="relative w-5 h-5" alt="" src="/transactions1.svg" />
      <div className="transactions1 relative font-medium lg:hidden">
        Transactions
      </div>
    </div>
  );
};

export default Bar1;
