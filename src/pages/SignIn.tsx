import { FunctionComponent } from "react";
import SignInForm from "../components/SignInForm";

const SignIn: FunctionComponent = () => {
  return (
    <div className="relative bg-darkish-color-dark-bg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-screen overflow-hidden flex flex-row items-start justify-start text-left text-lg text-text-color-pure-white font-poppins lg:w-auto lg:[align-self:unset] lg:flex-row md:flex-col md:h-auto">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-[85px] px-0 pb-2 md:flex-[unset] md:self-stretch">
        <div className="flex flex-col items-start justify-start gap-[129px] md:self-stretch md:w-auto md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-[30px] h-[30px]"
              alt=""
              src="/exclude.svg"
            />
            <b className="relative inline-block w-20 h-[23px] shrink-0">
              Maglo.
            </b>
          </div>
          <SignInForm />
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover md:flex-[unset] md:self-stretch"
        alt=""
        src="/image-11@2x.png"
      />
    </div>
  );
};

export default SignIn;
