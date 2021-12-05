import { ClientCmsPageModel } from './client-cms-page.model';
import { ClientCmsUserModel } from './client-cms-user.model';

export interface UserClientModel {
  id: number;
  name: string;
  logo: string;
  pages: Array<ClientCmsPageModel>;
  users: Array<ClientCmsUserModel>;
}
