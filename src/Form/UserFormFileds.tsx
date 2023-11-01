import React from 'react';
import { FormikProps } from 'formik';
import { UserFormValues } from './types';
import { Field } from './Field';

type UserFormFieldsProps = {
  formik: FormikProps<UserFormValues>;
};

export const UserFormFields: React.FC<UserFormFieldsProps> = ({ formik }) => {
  return (
    <div>
      <Field formik={formik} fieldName="name" label="名前" type="text" />
      <Field
        formik={formik}
        fieldName="email"
        label="メールアドレス"
        type="email"
      />
    </div>
  );
};
