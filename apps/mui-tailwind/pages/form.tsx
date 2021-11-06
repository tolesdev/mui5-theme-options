import Input from '../components/Input';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
function Form() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: '',
      displayName: '',
      password: '',
      birthDate: '',
    },
  });

  const onSubmit = handleSubmit((values) => {
    console.log('values', values);
  });
  return (
    <form onSubmit={onSubmit}>
      Email
      <Input {...register('email')} />
      Password
      <Input {...register('password')} />
      Display Name
      <Input {...register('displayName')} />
      {/* <Input {...register('birthDate')} /> */}
      Birthdate
      <Input {...register('birthDate')} />
      {/* <Input {...register('email')} />
      <Input {...register('email')} /> */}
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
