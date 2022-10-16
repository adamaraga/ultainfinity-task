import searchIcon from "../assets/image/svg/Shape.svg";
import clickIcon from "../assets/image/svg/click.svg";
import arrowIcon from "../assets/image/svg/longArrow.svg";
import cartIcon from "../assets/image/svg/basket.svg";
import { CurrentTabDataType } from "../types";
import { useEffect, useState } from "react";
import { colorTheme } from "../assets/colors";

interface AccountCardPropsType {
  card: string;
  currTabData: CurrentTabDataType;
}
const AccountCard = ({ card, currTabData }: AccountCardPropsType) => {
  const [clickPerc, setClickPerc] = useState<string | null>(null);
  const [searchPerc, setSearchPerc] = useState<string | null>(null);
  const [salesPerc, setSalesPerc] = useState<string | null>(null);

  const { data } = currTabData;

  useEffect(() => {
    const searchPrev = currTabData.data.searches_previous;
    const searchCurr = currTabData.data.searches_current;

    if (typeof searchCurr === "number" && typeof searchPrev === "number") {
      let percentage;
      if (searchCurr > searchPrev) {
        percentage = (100 - (searchPrev / searchCurr) * 100).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );
      } else {
        percentage = (-(100 - (searchCurr / searchPrev) * 100)).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );
      }
      setSearchPerc(percentage);
    }

    const clickPrev = currTabData.data.clicks_previous;
    const clickCurr = currTabData.data.clicks_current;

    if (typeof clickCurr === "number" && typeof clickPrev === "number") {
      let percentage;
      if (clickCurr > clickPrev) {
        percentage = (100 - (clickPrev / clickCurr) * 100).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );
      } else {
        percentage = (-(100 - (clickCurr / clickPrev) * 100)).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );
      }
      setClickPerc(percentage);
    }

    const salesPrev = currTabData.data.bookings_previous;
    const salesCurr = currTabData.data.bookings_current;

    if (typeof salesCurr === "number" && typeof salesPrev === "number") {
      let percentage;
      if (salesCurr > salesPrev) {
        percentage =
          "+" +
          (100 - (salesPrev / salesCurr) * 100).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
      } else {
        percentage = (-(100 - (salesCurr / salesPrev) * 100)).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );
      }
      setSalesPerc(percentage);
    }
  }, [currTabData]);

  return (
    <div className="accountCard">
      <div className="accountCard__header">
        <div className="accountCard__header__icon">
          <div className="accountCard__header__icon__top">
            <span
              style={{
                backgroundColor:
                  card === "search" && searchPerc && parseInt(searchPerc) > 0
                    ? colorTheme.success
                    : card === "click" && clickPerc && parseInt(clickPerc) > 0
                    ? colorTheme.success
                    : card === "sales" && salesPerc && parseInt(salesPerc) > 0
                    ? colorTheme.success
                    : colorTheme.error,
              }}
              className="accountCard__header__icon__top__colorBox"
            ></span>
            {card === "search" ? (
              <img src={searchIcon} alt="search icon" />
            ) : card === "click" ? (
              <img src={clickIcon} alt="search icon" />
            ) : (
              <img src={cartIcon} alt="search icon" />
            )}
          </div>
          <div className="accountCard__header__icon__bottom">
            {card !== "sales" && <img src={arrowIcon} alt=" arrow icon" />}
          </div>
        </div>

        <div className="accountCard__header__info">
          <h3 className="accountCard__header__info__title">
            {card === "search"
              ? "Searches"
              : card === "click"
              ? "Click"
              : "Sales"}{" "}
            <span
              style={{
                backgroundColor:
                  card === "search" && searchPerc && parseInt(searchPerc) > 0
                    ? colorTheme.success
                    : card === "click" && clickPerc && parseInt(clickPerc) > 0
                    ? colorTheme.success
                    : card === "sales" && salesPerc && parseInt(salesPerc) > 0
                    ? colorTheme.success
                    : colorTheme.error,
              }}
            >
              {card === "search"
                ? searchPerc
                : card === "click"
                ? clickPerc
                : salesPerc}
              %
            </span>
          </h3>
          <p className="accountCard__header__info__main">
            {card === "search"
              ? data.searches_current
              : card === "click"
              ? data.clicks_current
              : data.bookings_current}{" "}
            <span>Yesterday</span>
          </p>
          <p className="accountCard__header__info__main last">
            {card === "search"
              ? data.searches_previous
              : card === "click"
              ? data.clicks_previous
              : data.bookings_previous}{" "}
            <span>Last Friday</span>
          </p>
        </div>
      </div>

      <div className="accountCard__info">
        {card === "search" ? (
          <>
            <h3 className="accountCard__info__title">
              Mobile traffic:{" "}
              {data.mobile_pessimizer?.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              %
            </h3>
            <h3 className="accountCard__info__title">
              Web traffic:{" "}
              {data.web_pessimizer?.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              %
            </h3>
            <p className="accountCard__info__disc">
              You get 100% traffic on mobile and desktop devices.
            </p>
            <div className="accountCard__info__links">
              Help: <span>Searches</span>, <span>Pessimisation</span>
            </div>
          </>
        ) : card === "click" ? (
          <>
            <h3
              style={{ color: colorTheme.error }}
              className="accountCard__info__title"
            >
              CTR:{" "}
              {data.ctr?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              %
            </h3>
            <p className="accountCard__info__disc">
              Conversion from searches to clicks on all devices.
            </p>
            <div className="accountCard__info__links">
              Help: <span>CTR</span>, <span>Cliks</span>
            </div>
          </>
        ) : (
          <>
            <h3 className="accountCard__info__title">STR: {data.str}%</h3>
            <h3 className="accountCard__info__title">
              Avg. Check:{" "}
              {data.avg_price?.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              %
            </h3>
            <p className="accountCard__info__disc">
              Conversion from searches to clicks on all devices.
            </p>
            <div className="accountCard__info__links">
              Help: <span>STR</span>, <span>Bookings</span>,{" "}
              <span>Avg. Check</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountCard;
