export interface CurrentTabDataType {
  errors: Array<{
    count: number;
    code: number | null;
  }>;
  data: {
    clicks_current: number | null;
    avg_price: number | null;
    zeroes: number | null;
    bookings_current: number | null;
    bookings_previous: number | null;
    ctr: number | null;
    clicks_previous: number | null;
    searches_previous: number | null;
    str: number | null;
    searches_current: number | null;
    timeout: number | null;
    errors: number | null;
    web_pessimizer: number | null;
    mobile_pessimizer: number | null;
  };
}

export interface CurrentTabDataPropsType {
  currTabData: CurrentTabDataType;
}
