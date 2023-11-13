import { FunctionComponent } from "react";
import Logo from "../components/Logo";
import Bar from "../components/Bar";
import Bar1 from "../components/Bar1";
import Bar2 from "../components/Bar2";
import Bar3 from "../components/Bar3";
import Bar4 from "../components/Bar4";
import DashboardCard from "../components/DashboardContainer";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-darkish-color-dark-bg w-full h-screen overflow-hidden flex flex-row items-start justify-start text-left text-sm text-text-color-text-2 font-size-14-size-14-medium lg:h-screen lg:flex-row">
      <div className="h-[900px] flex flex-row items-start justify-start lg:[&_.maglo2]:hover:flex lg:[&_.dashboard5]:hover:flex lg:[&_.dashboard5]:hover:flex lg:[&_.settings1]:hover:flex lg:[&_.my-wallets1]:hover:flex lg:[&_.invoices1]:hover:flex lg:[&_.transactions1]:hover:flex lg:[&_.dashboard8]:hover:flex">
        <div className="self-stretch bg-darkish-color-dark-shade w-[250px] flex flex-col items-start justify-center pt-[30px] px-[25px] pb-[100px] box-border gap-[40px] lg:w-auto lg:self-stretch lg:h-auto">
          <Logo />
          <div className="self-stretch flex-1 flex flex-col items-start justify-between lg:w-auto lg:[align-self:unset]">
            <div className="self-stretch h-[126px] flex flex-col items-start justify-start gap-[2px] lg:w-auto lg:[align-self:unset]">
              <Bar />
              <Bar1 />
              <Bar2 />
              <Bar3 />
              <Bar4 />
            </div>
            <div className="self-stretch h-[126px] flex flex-col items-start justify-start gap-[2px] lg:w-auto lg:[align-self:unset]">
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img className="relative w-5 h-5" alt="" src="/help1.svg" />
                <div className="dashboard5 relative font-medium lg:hidden">
                  Help
                </div>
              </div>
              <div className="rounded-lg w-[200px] h-12 flex flex-row items-center justify-start py-3.5 px-[15px] box-border gap-[12px] lg:w-auto lg:[align-self:unset]">
                <img className="relative w-5 h-5" alt="" src="/logout1.svg" />
                <div className="dashboard5 relative font-medium lg:hidden">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 overflow-y-auto flex flex-col items-start justify-start py-[30px] px-10 box-border gap-[30px] h-screen text-6xl text-text-color-pure-white">
        <div className="self-stretch flex flex-row items-center justify-between md:self-stretch md:w-auto">
          <div className="relative font-semibold md:hidden">Dashboard</div>
          <div className="w-[353px] flex flex-row items-center justify-between text-sm md:flex-1">
            <div className="flex flex-row items-start justify-start gap-[45px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/search1-11.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/notificationbing5-11.svg"
              />
            </div>
            <div className="rounded-81xl bg-darkish-color-dark-1 w-[215px] flex flex-row items-center justify-between py-1.5 pr-[15px] pl-[7px] box-border">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative rounded-[50%] w-9 h-9 object-cover"
                  alt=""
                  src="/ellipse-11@2x.png"
                />
                <div className="relative font-semibold">Nicolas Aguirre</div>
              </div>
              <img
                className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
                alt=""
                src="/dropdown1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[40px] text-lg lg:flex-col lg:items-start lg:justify-start">
          <div className="flex-1 flex flex-col items-end justify-start gap-[31px] lg:self-stretch lg:w-auto lg:flex-[unset]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[25px] md:flex-col">
                <DashboardCard
                  metricValue="/icon.svg"
                  financialMetricValue="Net Worth"
                  metricTextValue="$524"
                />
                <DashboardCard
                  metricValue="/icon1.svg"
                  financialMetricValue="Spending"
                  metricTextValue="$250"
                  propBackgroundColor="#201e34"
                  propJustifyContent="center"
                />
                <DashboardCard
                  metricValue="/icon2.svg"
                  financialMetricValue="Saved"
                  metricTextValue="$550"
                  propBackgroundColor="#201e34"
                  propJustifyContent="center"
                />
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-auto shrink-0 object-cover"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className="self-stretch rounded-3xs bg-darkish-color-dark-bg flex flex-col items-start justify-center py-5 pr-[19px] pl-[25px] gap-[20px] border-[1px] border-solid border-darkish-color-dark-2">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative font-semibold">Watch List</div>
                <div className="flex flex-row items-center justify-start gap-[6px] text-right text-sm text-secondary-color">
                  <div className="relative font-semibold">View All</div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/icexpandmore24px-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-xs text-text-color-text-3">
                <div className="relative font-semibold inline-block w-[200px] shrink-0">
                  Ticker/Name
                </div>
                <div className="w-[343px] flex flex-row items-center justify-end text-right">
                  <div className="relative font-semibold inline-block w-[100px] shrink-0">
                    TYPE
                  </div>
                  <div className="relative font-semibold inline-block w-[100px] shrink-0">
                    AMOUNT
                  </div>
                  <div className="relative font-semibold inline-block w-[100px] shrink-0">
                    DATE
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch h-10 flex flex-row items-center justify-between">
                  <div className="w-[261.3px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[20px]">
                    <div className="rounded-8xs bg-darkish-color-dark-2 w-[59.1px] h-10 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <img
                        className="relative w-[47.3px] h-[30px] object-cover"
                        alt=""
                        src="/image-8@2x.png"
                      />
                    </div>
                    <div className="w-[181.5px] h-[37px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[5px]">
                      <div className="relative font-medium inline-block w-[181.5px]">
                        AAPL
                      </div>
                      <div className="relative text-xs text-text-color-text-2 inline-block w-[81.3px]">
                        Apple. Inc
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start text-right text-text-color-text-3">
                    <div className="relative font-medium inline-block w-[100px] shrink-0">
                      Stock
                    </div>
                    <div className="relative font-semibold text-text-color-pure-white inline-block w-[100px] shrink-0">
                      $420.84
                    </div>
                    <div className="relative font-medium inline-block w-[100px] shrink-0">
                      14 Apr 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start lg:self-stretch lg:w-auto lg:h-[100v]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[39px] gap-[30px] lg:flex-1">
              <img
                className="relative w-[354px] h-[322px] object-cover"
                alt=""
                src="/image-10@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-semibold">
                    Scheduled Transfers
                  </div>
                  <div className="w-[79px] h-[18px] flex flex-row items-center justify-start pt-0 px-0 pb-px box-border gap-[6px] text-right text-sm text-secondary-color">
                    <div className="relative font-semibold">View All</div>
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/icexpandmore24px-11.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative font-semibold">MSFT</div>
                          <div className="relative text-xs font-medium text-text-color-text-3">
                            April 28, 2022 at 11:00
                          </div>
                        </div>
                      </div>
                      <div className="relative text-base font-semibold text-right">
                        - $435,00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative font-semibold">TSLA</div>
                          <div className="relative text-xs font-medium text-text-color-text-3">
                            April 28, 2022 at 11:00
                          </div>
                        </div>
                      </div>
                      <div className="relative text-base font-semibold text-right">
                        - $435,00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative font-semibold">META</div>
                          <div className="relative text-xs font-medium text-text-color-text-3">
                            April 28, 2022 at 11:00
                          </div>
                        </div>
                      </div>
                      <div className="relative text-base font-semibold text-right">
                        - $435,00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative font-semibold">MSFT</div>
                          <div className="relative text-xs font-medium text-text-color-text-3">
                            April 28, 2022 at 11:00
                          </div>
                        </div>
                      </div>
                      <div className="relative text-base font-semibold text-right">
                        - $435,00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
