import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { postApi } from './api'
import { UserForm } from './UserForm'

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
      <UserForm formik={formik} />
    </div>
  );
}

export default App;
