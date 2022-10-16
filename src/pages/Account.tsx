import { useEffect, useState } from "react";
import AccountList from "../components/AccountList";
import AccountStatus from "../components/AccountStatus";
import AccountTabs from "../components/AccountTabs";
import { jsonData } from "../data/data";
import { CurrentTabDataType } from "../types";

const Account = () => {
  const [currTab, setCurrTab] = useState<number>(1);
  const [currTabData, setCurrTabData] = useState<CurrentTabDataType | null>(
    null
  );

  useEffect(() => {
    if (currTab === 2) {
      setCurrTabData(null);
    } else {
      let currTabName = "last_hour";

      if (currTab === 3) {
        currTabName = "yesterday";
      }
      if (currTab === 4) {
        currTabName = "last_3days";
      }

      let newData: CurrentTabDataType = {
        errors: jsonData[`errors_${currTabName}`],
        data: {
          clicks_current: jsonData.data[0][`clicks_current_${currTabName}`],
          avg_price: jsonData.data[0][`avg_price_${currTabName}`],
          zeroes: jsonData.data[0][`zeroes_${currTabName}`],
          bookings_current: jsonData.data[0][`bookings_current_${currTabName}`],
          bookings_previous:
            jsonData.data[0][`bookings_previous_${currTabName}`],
          ctr: jsonData.data[0][`ctr_${currTabName}`],
          clicks_previous: jsonData.data[0][`clicks_previous_${currTabName}`],
          searches_previous:
            jsonData.data[0][`searches_previous_${currTabName}`],
          str: jsonData.data[0][`str_${currTabName}`],
          searches_current: jsonData.data[0][`searches_current_${currTabName}`],
          timeout: jsonData.data[0][`timeout_${currTabName}`],
          errors: jsonData.data[0][`errors_${currTabName}`],
          mobile_pessimizer: jsonData.data[0]["mobile_pessimizer"],
          web_pessimizer: jsonData.data[0]["web_pessimizer"],
        },
      };

      setCurrTabData(newData);
    }
  }, [currTab]);

  return (
    <div className="account">
      <h1 className="account__title">Main Metrics</h1>

      <AccountTabs currTab={currTab} setCurrTab={setCurrTab} />
      {currTabData ? (
        <>
          <AccountStatus currTabData={currTabData} />

          <AccountList currTabData={currTabData} />
        </>
      ) : (
        <div className="noData">No Data</div>
      )}
    </div>
  );
};

export default Account;
