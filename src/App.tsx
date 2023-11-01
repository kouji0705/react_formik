import React from 'react';
import { UserForm } from './Form/UserForm';
import { useMyFormik } from './Form/hooks';
import { UserFormFields } from './Form/UserFormFileds';

function App() {
  // Form情報を取得
  const formik = useMyFormik();
  return (
    <div>
      <h1>Formikサンプル</h1>
      <UserForm formik={formik}>
        <UserFormFields formik={formik} />
      </UserForm>
    </div>
  );
}

export default App;
