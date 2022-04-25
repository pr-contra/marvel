export interface State<T> {
  data?: T | null;
  isLoading: boolean;
  isError: boolean;
}

export interface Action<T> {
  type: requestTypes.REQUESTED | requestTypes.RECEIVED | requestTypes.ERROR;
  data: T | null;
  isError: boolean;
}

export enum requestTypes {
  REQUESTED,
  RECEIVED,
  ERROR,
}
