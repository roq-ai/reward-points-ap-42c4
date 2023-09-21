import { TransactionInterface } from 'interfaces/transaction';
import { GetQueryInterface } from 'interfaces';

export interface MerchantInterface {
  id?: string;
  name: string;
  merchant_address: string;
  phone_number: string;
  email: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];

  _count?: {
    transaction?: number;
  };
}

export interface MerchantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  merchant_address?: string;
  phone_number?: string;
  email?: string;
  description?: string;
}
