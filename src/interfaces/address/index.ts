import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AddressInterface {
  id?: string;
  block?: string;
  lot?: string;
  qualification_code?: string;
  address_address: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AddressGetQueryInterface extends GetQueryInterface {
  id?: string;
  block?: string;
  lot?: string;
  qualification_code?: string;
  address_address?: string;
  user_id?: string;
}
