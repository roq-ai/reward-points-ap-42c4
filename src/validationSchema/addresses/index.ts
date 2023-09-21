import * as yup from 'yup';

export const addressValidationSchema = yup.object().shape({
  block: yup.string().nullable(),
  lot: yup.string().nullable(),
  qualification_code: yup.string().nullable(),
  address_address: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
