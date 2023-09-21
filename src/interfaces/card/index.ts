import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CardInterface {
  id?: string;
  card_number: string;
  card_pin: string;
  phone_number: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CardGetQueryInterface extends GetQueryInterface {
  id?: string;
  card_number?: string;
  card_pin?: string;
  phone_number?: string;
  user_id?: string;
}
