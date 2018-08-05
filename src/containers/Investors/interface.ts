export interface IProducts {
  product_name: string;
  lending_pk: string;
  deltas: number[];
  net_annualised_return: string;
  last_value: string;
  start_date: string;
  last_date: string;
}

export interface IWhitelist {
  isListed: boolean;
  list: string[];
}
