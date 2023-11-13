import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBottomContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex flex-col items-start justify-start gap-[25px] text-left text-11xl text-text-color-pure-white font-size-14-size-14-medium md:self-stretch md:w-auto">
      <div className="flex flex-col items-start justify-start gap-[8px] md:self-stretch md:w-auto">
        <div className="relative font-semibold md:self-stretch md:w-auto">
          Welcome back
        </div>
        <div className="relative text-base text-text-color-text-3 md:self-stretch md:w-auto">
          Welcome back! Please enter your details
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
        <div className="self-stretch h-[175px] flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-row items-start justify-start py-2.5 pr-2.5 pl-0">
              <div className="flex-1 relative font-medium">Email</div>
            </div>
            <input
              className="font-medium font-size-14-size-14-medium text-sm bg-[transparent] rounded-3xs box-border w-[404px] flex flex-row items-center justify-start pt-[15px] pb-4 pr-[25px] pl-5 text-[white] border-[1px] border-solid border-darkish-color-dark-2 md:self-stretch md:w-auto"
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-row items-start justify-start py-2.5 pr-2.5 pl-0">
              <div className="flex-1 relative font-medium">Password</div>
            </div>
            <input
              className="bg-[transparent] rounded-3xs box-border w-[404px] h-12 flex flex-row items-center justify-start pt-[15px] pb-4 pr-[25px] pl-5 text-[white] border-[1px] border-solid border-darkish-color-dark-2 md:self-stretch md:w-auto"
              type="text"
            />
          </div>
        </div>
        <div className="w-[404px] flex flex-row items-center justify-between md:self-stretch md:w-auto">
          <div className="flex flex-row items-center justify-start gap-[9px]">
            <div className="relative rounded-10xs box-border w-4 h-4 border-[1px] border-solid border-text-color-text-3" />
            <div className="relative font-medium">Remember for 30 Days</div>
          </div>
          <div className="relative font-medium text-right">Forgot password</div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-start gap-[25px] cursor-pointer text-center text-base text-text-color-text-1"
        onClick={onBottomContainerClick}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <div className="self-stretch rounded-3xs bg-primary-color flex flex-row items-center justify-center py-3.5 px-5">
            <div className="relative font-semibold">Sign in</div>
          </div>
          <div className="self-stretch rounded-3xs flex flex-row items-center justify-center p-[13px] gap-[10px] text-left text-text-color-text-3 border-[1px] border-solid border-darkish-color-dark-2">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/icongoogle.svg"
            />
            <div className="relative font-semibold">Sign in with google</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-left text-sm text-text-color-text-2">
          <div className="relative">
            <span>
              <span>Don’t have an account?</span>
              <span className="text-text-color-text-1">{` `}</span>
            </span>
            <span className="font-medium text-text-color-pure-white">
              Sign up for free
            </span>
          </div>
          <img
            className="relative w-[97.9px] h-[13.7px]"
            alt=""
            src="/vector-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
