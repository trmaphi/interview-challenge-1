declare global {
  interface window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
};

export interface IIssue {
  id: string;
  title: string;
};
