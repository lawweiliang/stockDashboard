import { FunctionComponent, useMemo, type CSSProperties } from "react";

type DashboardCardType = {
  metricValue?: string;
  financialMetricValue?: string;
  metricTextValue?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propJustifyContent?: CSSProperties["justifyContent"];
};

const DashboardCard: FunctionComponent<DashboardCardType> = ({
  metricValue,
  financialMetricValue,
  metricTextValue,
  propBackgroundColor,
  propJustifyContent,
}) => {
  const totalBalanceStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const totalBalance1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  return (
    <div
      className="flex-1 rounded-3xs bg-darkish-color-dark-2 flex flex-row items-center justify-start py-6 px-5 gap-[15px] text-left text-sm text-text-color-text-2 font-size-14-size-14-medium lg:flex-1 md:flex-[unset] md:self-stretch"
      style={totalBalanceStyle}
    >
      <img className="relative w-[42px] h-[42px]" alt="" src={metricValue} />
      <div
        className="flex flex-col items-start justify-start gap-[10px]"
        style={totalBalance1Style}
      >
        <div className="relative inline-block w-[125px]">
          {financialMetricValue}
        </div>
        <b className="relative text-5xl inline-block text-text-color-pure-white w-[125px]">
          {metricTextValue}
        </b>
      </div>
    </div>
  );
};

export default DashboardCard;
