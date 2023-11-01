import React from 'react';
import { FormikProps } from 'formik';
import { UserFormValues } from './types';

type FieldProps = {
  formik: FormikProps<UserFormValues>;
  fieldName: keyof UserFormValues;
  label: string;
  type: string;
};

export const Field: React.FC<FieldProps> = ({
  formik,
  fieldName,
  label,
  type,
}) => {
  const fieldError = formik.errors[fieldName];
  const fieldValue = formik.values[fieldName];
  const fieldTouched = formik.touched[fieldName];

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type={type}
        id={fieldName as string}
        name={fieldName as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={fieldValue}
      />
      {fieldTouched && fieldError && <div>{fieldError}</div>}
    </div>
  );
};
