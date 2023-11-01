import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { postApi } from './api';
import { UserForm } from './Form/UserForm';
import { UserFormValues } from './Form/types';
import { validationSchema } from './Form/validation';

const initialValues = {
  name: '',
  email: '',
};

function App() {
  const formik = useFormik<UserFormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postApi({
          title: values.name, // 名前をタイトルとして使用
          body: values.email, // メールアドレスを本文として使用
          userId: 1, // ユーザーIDを適切に設定
        });
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
      <UserForm formik={formik} />
    </div>
  );
}

export default App;
