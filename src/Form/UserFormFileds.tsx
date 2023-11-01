import { FormikProps } from 'formik';
import React from 'react';
import { UserFormValues } from './types';

export const UserFormFields: React.FC<UserFormFieldsProps> = (props) => {
  const { formik } = props;
  return (
    <div>
      <div>
        <label htmlFor="name">名前</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
    </div>
  );
};

type UserFormFieldsProps = {
  formik: FormikProps<UserFormValues>;
};
