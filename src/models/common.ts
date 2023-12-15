export interface IRoutes {
  path: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  isLogin: boolean;
  exact?: boolean;
}
