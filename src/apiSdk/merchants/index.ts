import axios from 'axios';
import queryString from 'query-string';
import { MerchantInterface, MerchantGetQueryInterface } from 'interfaces/merchant';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMerchants = async (
  query?: MerchantGetQueryInterface,
): Promise<PaginatedInterface<MerchantInterface>> => {
  const response = await axios.get('/api/merchants', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMerchant = async (merchant: MerchantInterface) => {
  const response = await axios.post('/api/merchants', merchant);
  return response.data;
};

export const updateMerchantById = async (id: string, merchant: MerchantInterface) => {
  const response = await axios.put(`/api/merchants/${id}`, merchant);
  return response.data;
};

export const getMerchantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/merchants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMerchantById = async (id: string) => {
  const response = await axios.delete(`/api/merchants/${id}`);
  return response.data;
};
