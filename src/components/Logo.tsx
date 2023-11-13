import { FunctionComponent, useEffect } from "react";

const Logo: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="self-stretch h-[30px] flex flex-row items-center justify-start gap-[12px] [&.animate]:animate-[1s_linear_5s_infinite_normal_forwards_wobble-hor-bottom] opacity-[1] text-left text-lg text-text-color-pure-white font-poppins lg:h-auto lg:items-center lg:justify-center lg:pl-0 lg:box-border"
      data-animate-on-scroll
    >
      <img className="relative w-[30px] h-[30px]" alt="" src="/exclude1.svg" />
      <b className="maglo2 relative inline-block w-20 h-[23px] shrink-0 lg:hidden">
        Maglo.
      </b>
    </div>
  );
};

export default Logo;
