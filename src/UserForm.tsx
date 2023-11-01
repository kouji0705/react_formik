import React from 'react';

export const UserForm:React.FC<UserFormProps> = (props) => {
  const { formik } = props
    return (
        <form onSubmit={formik.handleSubmit}>
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
          {formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
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
          {formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" disabled={!formik.isValid}>送信</button>
      </form>

    )
}

type UserFormProps = {
  formik:any
}