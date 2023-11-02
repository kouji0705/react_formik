import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('名前は必須項目です'),
  email: Yup.string()
    .email('有効なメールアドレスを入力してください')
    .required('メールアドレスは必須項目です'),
});
