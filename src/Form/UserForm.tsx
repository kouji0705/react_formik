import { FormikProps } from 'formik';
import React from 'react';
import { UserFormValues } from './types';

export const UserForm: React.FC<UserFormProps> = (props) => {
  const { formik, children } = props;
  return (
    <form onSubmit={formik.handleSubmit}>
      {children}
      <button type="submit" disabled={!formik.isValid}>
        送信
      </button>
    </form>
  );
};

type UserFormProps = {
  formik: FormikProps<UserFormValues>; // YourFormValuesにはフォームの値の型を指定
  children: React.ReactNode;
};
