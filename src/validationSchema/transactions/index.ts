import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  transaction_date: yup.date().required(),
  amount: yup.number().integer().required(),
  reward_points: yup.number().integer().required(),
  fiscal_year: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  merchant_id: yup.string().nullable().required(),
});
