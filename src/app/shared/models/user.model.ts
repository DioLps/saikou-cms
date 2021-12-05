import { UserClientModel } from "./user-client.model";

export interface UserModel {
  id: number
  email: string;
  password: string;
  name: string;
  logo: string;
  clients: Array< UserClientModel>;
}
