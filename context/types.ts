export type StateContext<T> = {
  state: T;
  setState: (t: T) => void;
};