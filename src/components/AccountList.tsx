import { CurrentTabDataPropsType } from "../types";
import AccountCard from "./AccountCard";

const AccountList = ({ currTabData }: CurrentTabDataPropsType) => {
  return (
    <div className="accountList">
      <AccountCard currTabData={currTabData} card="search" />
      <AccountCard currTabData={currTabData} card="click" />
      <AccountCard currTabData={currTabData} card="sales" />
    </div>
  );
};

export default AccountList;
