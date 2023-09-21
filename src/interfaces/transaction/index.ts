import { UserInterface } from 'interfaces/user';
import { MerchantInterface } from 'interfaces/merchant';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  transaction_date: any;
  amount: number;
  reward_points: number;
  fiscal_year: number;
  user_id: string;
  merchant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  merchant?: MerchantInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  merchant_id?: string;
}
