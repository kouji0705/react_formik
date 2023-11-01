import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { postApi } from './api'

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
    onSubmit: async (values) => {
      try {
        const response =  await postApi({
          title: values.name, // 名前をタイトルとして使用
          body: values.email, // メールアドレスを本文として使用
          userId: 1, // ユーザーIDを適切に設定
        })
        // レスポンスをコンソールに出力
        console.log('APIレスポンス:', response.data);
      } catch (error) {
        console.error('APIエラー:', error);
      }
    },
  });

  useEffect(() => {
    formik.validateForm(); // フォームが最初にロードされたときにバリデーションを実行
  }, []); // 空の依存リストを指定して一度だけ実行されるように



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

        <button type="submit" disabled={!formik.isValid}>送信</button>
      </form>
    </div>
  );
}

export default App;
