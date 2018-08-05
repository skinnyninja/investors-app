

export const newDateScale = (currentDate: any, days: number) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + days);
  return date;
};

export const narConversion = (nar: string) => {
  const parse = parseFloat(nar) * 100;
  const narPercent = parse.toFixed(2);

  return narPercent;
};

export const etdConversion = (etd: string) => {
  return parseFloat(etd).toFixed(2);
};

export const checkProductActive = (startDate: string) => {
  if (!startDate) return null;
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(startDate);
  const currentDate = new Date();
  const diffDays = Math.round(Math.abs((firstDate.getTime() - currentDate.getTime()) / (oneDay)));
  const days = 365;

  return diffDays > days;
};

export const isPast = (date: number) => date < new Date().getTime() / 1000;


