import { CustomerInterface } from 'interfaces/customer';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { OwnerInterface } from 'interfaces/owner';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;
  created_at: any;
  updated_at: any;

  customer: CustomerInterface[];
  hr_manager: HrManagerInterface[];
  owner: OwnerInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
