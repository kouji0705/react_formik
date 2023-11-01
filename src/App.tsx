import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('名前は必須項目です'),
  email: Yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須項目です'),
});

function App() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // フォームが送信されたときの処理
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formikサンプル</h1>
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
          {formik.touched.name && formik.errors.name ? (
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
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
