import React from 'react';
import { UserForm } from './Form/UserForm';
import { useMyFormik } from './Form/hooks';

function App() {
  // Form情報を取得
  const formik = useMyFormik();
  return (
    <div>
      <h1>Formikサンプル</h1>
      <UserForm formik={formik} />
    </div>
  );
}

export default App;
