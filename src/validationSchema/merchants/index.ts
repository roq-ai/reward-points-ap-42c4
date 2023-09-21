import * as yup from 'yup';

export const merchantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  merchant_address: yup.string().required(),
  phone_number: yup.string().required(),
  email: yup.string().required(),
  description: yup.string().nullable(),
});
