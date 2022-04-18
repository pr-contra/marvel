export const isValidNumber = (param: string | (string | null)[] | null) =>
  !isNaN(Number(param)) && Number(param) > 0;
