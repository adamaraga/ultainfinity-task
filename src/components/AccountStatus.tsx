import { useEffect, useState } from "react";
import { CurrentTabDataPropsType } from "../types";

const AccountStatus = ({ currTabData }: CurrentTabDataPropsType) => {
  const [errorTotal, setErrorTotal] = useState(0);

  const { data, errors } = currTabData;

  useEffect(() => {
    if (errors.length > 0) {
      const total = errors.reduce((acum, error) => acum + error.count, 0);
      setErrorTotal(total);
    }
  }, [errors]);

  return (
    <div className="accountStatus">
      <div className="accountStatus__info">
        <div className="accountStatus__info__item">
          <span className="accountStatus__info__item__colorBox"></span>
          <div className="accountStatus__info__item__main">
            <div className="accountStatus__info__item__main__title">
              Errors:{" "}
              {data.errors?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {data.errors && "%"}
            </div>
            <div className="accountStatus__info__item__main__average">
              Average: 0.11%
            </div>
          </div>
        </div>
        <div className="accountStatus__info__item">
          <span className="accountStatus__info__item__colorBox"></span>
          <div className="accountStatus__info__item__main">
            <div className="accountStatus__info__item__main__title">
              Zeroes:{" "}
              {data.zeroes?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {data.zeroes && "%"}
            </div>
            <div className="accountStatus__info__item__main__average">
              Average: 0.11%
            </div>
          </div>
        </div>
        <div className="accountStatus__info__item">
          <span className="accountStatus__info__item__colorBox"></span>
          <div className="accountStatus__info__item__main">
            <div className="accountStatus__info__item__main__title">
              Timeouts:{" "}
              {data.timeout?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {data.timeout && "%"}
            </div>
            <div className="accountStatus__info__item__main__average">
              Average: 0.11%
            </div>
          </div>
        </div>
      </div>

      {errors.length > 0 && errorTotal > 0 && (
        <div className="accountStatus__progressBar">
          <div className="accountStatus__progressBar__main">
            {errors.map((error, i) => {
              return (
                <span
                  key={i}
                  style={{
                    backgroundColor:
                      i === 0
                        ? "#FFCC00"
                        : i === 1
                        ? "#5856D5"
                        : i === 2
                        ? "#2196F3"
                        : "#A0B0B9",
                    width: `${(error.count / errorTotal) * 100}%`,
                  }}
                  className="accountStatus__progressBar__main__item"
                ></span>
              );
            })}
          </div>
          <div className="accountStatus__progressBar__info">
            {errors.map((error, i) => {
              return (
                <div key={i} className="accountStatus__progressBar__info__item">
                  <span
                    style={{
                      backgroundColor:
                        i === 0
                          ? "#FFCC00"
                          : i === 1
                          ? "#5856D5"
                          : i === 2
                          ? "#2196F3"
                          : "#A0B0B9",
                    }}
                    className="accountStatus__progressBar__info__item__colorBox"
                  ></span>
                  <span className="accountStatus__progressBar__info__item__disc">
                    {error.code
                      ? `Error ${error.code}: ${error.count}`
                      : `Others: ${error.count}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountStatus;
