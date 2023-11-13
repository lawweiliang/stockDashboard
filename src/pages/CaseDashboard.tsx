import { FunctionComponent, useEffect } from "react";

const CaseDashboard: FunctionComponent = () => {
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
    <div className="relative bg-darkish-color-dark-bg w-full h-screen overflow-hidden flex flex-row items-start justify-start text-left text-lg text-text-color-pure-white font-poppins lg:h-screen lg:flex-row">
      <div className="h-[900px] flex flex-row items-start justify-start lg:[&_.maglo]:hover:flex lg:[&_.transactions]:hover:flex lg:[&_.transactions]:hover:flex lg:[&_.transactions]:hover:flex lg:[&_.transactions]:hover:flex lg:[&_.transactions]:hover:flex lg:[&_.transactions]:hover:flex lg:[&_.dashboard]:hover:flex">
        <div className="self-stretch bg-darkish-color-dark-shade w-[250px] flex flex-col items-start justify-center pt-[30px] px-[25px] pb-[100px] box-border gap-[40px] lg:w-auto lg:self-stretch lg:h-auto">
          <div
            className="self-stretch h-[30px] flex flex-row items-center justify-start gap-[12px] [&.animate]:animate-[1s_linear_5s_infinite_normal_forwards_wobble-hor-bottom] opacity-[1] lg:h-auto lg:items-center lg:justify-center lg:pl-0 lg:box-border"
            data-animate-on-scroll
          >
            <img
              className="relative w-[30px] h-[30px]"
              alt=""
              src="/exclude.svg"
            />
            <b className="maglo relative inline-block w-20 h-[23px] shrink-0 lg:hidden">
              Maglo.
            </b>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-between text-sm text-text-color-text-2 font-size-14-size-14-medium lg:w-auto lg:[align-self:unset]">
            <div className="self-stretch h-[126px] flex flex-col items-start justify-start gap-[2px] lg:w-auto lg:[align-self:unset]">
              <button className="cursor-pointer [border:none] py-3.5 px-[15px] bg-primary-color self-stretch rounded-lg h-12 flex flex-row items-center justify-start box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 lg:w-5 lg:h-5"
                  alt=""
                  src="/dashboard.svg"
                />
                <div className="dashboard relative text-sm font-semibold font-size-14-size-14-medium text-text-color-text-1 text-left lg:hidden">
                  Dashboard
                </div>
              </button>
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/transactions.svg"
                />
                <div className="transactions relative font-medium lg:hidden">
                  Transactions
                </div>
              </div>
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img className="relative w-5 h-5" alt="" src="/invoices.svg" />
                <div className="transactions relative font-medium lg:hidden">
                  Invoices
                </div>
              </div>
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/my-wallets.svg"
                />
                <div className="transactions relative font-medium lg:hidden">
                  My Wallets
                </div>
              </div>
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img className="relative w-5 h-5" alt="" src="/settings.svg" />
                <div className="transactions relative font-medium lg:hidden">
                  Settings
                </div>
              </div>
            </div>
            <div className="self-stretch h-[126px] flex flex-col items-start justify-start gap-[2px] lg:w-auto lg:[align-self:unset]">
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img className="relative w-5 h-5" alt="" src="/help.svg" />
                <div className="transactions relative font-medium lg:hidden">
                  Help
                </div>
              </div>
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img className="relative w-5 h-5" alt="" src="/logout.svg" />
                <div className="transactions relative font-medium lg:hidden">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 box-border overflow-y-auto flex flex-col items-start justify-start py-[30px] px-10 gap-[30px] h-screen text-6xl font-size-14-size-14-medium border-[1px] border-solid border-black">
        <div className="self-stretch flex flex-row items-center justify-between md:self-stretch md:w-auto">
          <div className="relative font-semibold md:hidden">Dashboard</div>
          <div className="w-[353px] flex flex-row items-center justify-between text-sm md:flex-1">
            <div className="flex flex-row items-start justify-start gap-[45px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/search1-1.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/notificationbing5-1.svg"
              />
            </div>
            <div className="rounded-81xl bg-darkish-color-dark-1 w-[215px] flex flex-row items-center justify-between py-1.5 pr-[15px] pl-[7px] box-border">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-9 h-9 object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative font-semibold">Nicolas Aguirre</div>
              </div>
              <img
                className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
                alt=""
                src="/dropdown.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-sm lg:flex-col lg:items-start lg:justify-start">
          <div className="flex-1 flex flex-col items-end justify-start gap-[31px] lg:self-stretch lg:w-auto lg:flex-[unset]">
            <div className="self-stretch flex flex-col items-start justify-start p-[5px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[25px] md:flex-col">
                <div className="rounded-3xs bg-darkish-color-dark-bg box-border w-[313px] flex flex-col items-start justify-start pt-0 pb-5 pr-[19px] pl-0 gap-[8px] border-[1px] border-solid border-darkish-color-dark-2">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative text-xl font-semibold inline-block w-[207px]">
                      Review Submitted
                    </div>
                    <div className="relative text-gainsboro inline-block w-[113px]">
                      Case ID: #222222
                    </div>
                    <div className="relative text-[8px] font-roboto text-text-color-text-3 inline-block w-[179px] h-[15px] shrink-0">
                      Aug 23, 2021 14:11:08 PM
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between text-orangered">
                      <b className="flex-1 relative">High Risk</b>
                      <b className="self-stretch flex-1 relative text-gainsboro">
                        Area Control
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-text-color-text-3">
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[-10px] left-[-10px] flex flex-col items-start justify-start p-2.5">
                        <div className="flex flex-row items-start justify-start relative gap-[10px]">
                          <div className="flex flex-row items-start justify-start z-[0]">
                            <div className="flex flex-row items-start justify-start">
                              <div className="relative">Alert</div>
                            </div>
                          </div>
                          <input
                            className="[border:none] font-size-14-size-14-medium text-sm bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] w-[124px] flex flex-row items-center justify-start py-0.5 px-0 box-border text-[white] z-[1] md:flex-1"
                            placeholder="Enter your email"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">{`Time `}</div>
                        </div>
                        <input
                          className="[border:none] font-size-14-size-14-medium text-sm bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] w-[124px] flex flex-row items-center justify-start py-0.5 px-0 box-border text-[white] z-[1] md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">{`Zone `}</div>
                        </div>
                        <input
                          className="[border:none] font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] w-[124px] flex flex-row items-center justify-start py-0.5 px-0 box-border text-[white] z-[1] md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">Camera</div>
                        </div>
                        <input
                          className="[border:none] font-size-14-size-14-medium text-sm bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] w-[124px] flex flex-row items-center justify-start py-0.5 px-0 box-border text-[white] z-[1] md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">{`Authority `}</div>
                        </div>
                        <input
                          className="[border:none] font-roboto text-sm bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] w-[124px] flex flex-row items-center justify-start py-0.5 px-0 box-border text-[white] z-[1] md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px] font-roboto">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">Status</div>
                        </div>
                        <input
                          className="[border:none] font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] w-[124px] flex flex-row items-center justify-start py-0.5 px-0 box-border text-[white] z-[1] md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded-[30px] overflow-hidden flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/videoremovebgpreview-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start p-[5px] text-xl">
              <div className="flex-1 flex flex-row items-start justify-start gap-[25px] md:flex-col">
                <div className="flex-1 rounded-3xs bg-darkish-color-dark-bg flex flex-col items-start justify-start pt-0 pb-5 pr-[19px] pl-0 relative gap-[15px] border-[1px] border-solid border-darkish-color-dark-2 md:flex-[unset] md:self-stretch">
                  <div className="self-stretch flex flex-row items-start justify-start z-[0]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="relative font-semibold inline-block w-[207px] shrink-0">
                        Case Review
                      </div>
                    </div>
                  </div>
                  <input
                    className="[border:none] font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[6px] left-[472px] box-border w-7 flex flex-row items-center justify-center py-0.5 px-0 text-[white] z-[1] border-b-[1px] border-solid border-text-color-text-3 md:self-stretch md:w-auto"
                    placeholder="Enter your email"
                    type="text"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] z-[2] text-sm text-text-color-text-3">
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">Authority*</div>
                        </div>
                        <input
                          className="[border:none] font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] box-border w-[124px] flex flex-row items-center justify-start py-0.5 px-0 text-[white] z-[1] border-b-[1px] border-solid border-text-color-text-3 md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">Assigned</div>
                        </div>
                        <input
                          className="[border:none] font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] box-border w-[124px] flex flex-row items-center justify-start py-0.5 px-0 text-[white] z-[1] border-b-[1px] border-solid border-text-color-text-3 md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">Team</div>
                        </div>
                        <input
                          className="[border:none] font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] box-border w-[124px] flex flex-row items-center justify-start py-0.5 px-0 text-[white] z-[1] border-b-[1px] border-solid border-text-color-text-3 md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative w-[63px] h-[17px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex flex-row items-start justify-start z-[0]">
                          <div className="relative">Status</div>
                        </div>
                        <input
                          className="font-medium font-size-14-size-14-medium text-xs bg-[transparent] my-0 mx-[!important] absolute top-[0px] left-[78px] rounded-8xs box-border w-[124px] flex flex-row items-center justify-start py-1 px-2 text-[white] z-[1] border-[1px] border-solid border-text-color-text-3 md:flex-1"
                          placeholder="Enter your email"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded-3xs bg-darkish-color-dark-bg flex flex-col items-center justify-center pt-0 pb-5 pr-[19px] pl-0 text-sm text-text-color-text-3 border-[1px] border-solid border-darkish-color-dark-2 md:flex-[unset] md:self-stretch">
                  <div className="relative">Comment Section</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDashboard;
