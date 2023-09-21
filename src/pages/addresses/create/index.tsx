import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createAddress } from 'apiSdk/addresses';
import { addressValidationSchema } from 'validationSchema/addresses';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { AddressInterface } from 'interfaces/address';

function AddressCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: AddressInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createAddress(values);
      resetForm();
      router.push('/addresses');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AddressInterface>({
    initialValues: {
      block: '',
      lot: '',
      qualification_code: '',
      address_address: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: addressValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Addresses',
              link: '/addresses',
            },
            {
              label: 'Create Address',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Address
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.block}
            label={'Block'}
            props={{
              name: 'block',
              placeholder: 'Block',
              value: formik.values?.block,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.lot}
            label={'Lot'}
            props={{
              name: 'lot',
              placeholder: 'Lot',
              value: formik.values?.lot,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.qualification_code}
            label={'Qualification Code'}
            props={{
              name: 'qualification_code',
              placeholder: 'Qualification Code',
              value: formik.values?.qualification_code,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.address_address}
            label={'Address Address'}
            props={{
              name: 'address_address',
              placeholder: 'Address Address',
              value: formik.values?.address_address,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/addresses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'address',
    operation: AccessOperationEnum.CREATE,
  }),
)(AddressCreatePage);
