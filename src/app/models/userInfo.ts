import SignUp from "./signup";

export default interface UserInfo extends SignUp {
  accounts: Array<string>;
  id: string;
}