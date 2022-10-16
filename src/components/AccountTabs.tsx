interface AccountTabsType {
  currTab: number;
  setCurrTab: (tab: number) => void;
}

interface TabsType {
  id: string;
  name: string;
  no: number;
}

function AccountTabs({ currTab, setCurrTab }: AccountTabsType) {
  const tabs: TabsType[] = [
    { id: "dkfr7843983", name: "Last hour", no: 1 },
    { id: "dnfh45b454b", name: "Today", no: 2 },
    { id: "sejnb534h3k", name: "Yesterday", no: 3 },
    { id: "mbi489nr945", name: "Last 3 days", no: 4 },
  ];
  return (
    <div className="accountTabs">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className={
              currTab === tab.no
                ? "accountTabs__item active"
                : "accountTabs__item"
            }
            onClick={() => setCurrTab(tab.no)}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
}

export default AccountTabs;
