import * as yup from 'yup';

export const cardValidationSchema = yup.object().shape({
  card_number: yup.string().required(),
  card_pin: yup.string().required(),
  phone_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
