import { Input } from '@mui/material';
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
      <Input
        {...register('email')}
        autoFocus
        className="border-2 rounded-md border-indigo-600"
        endAdornment={<span className="text-red-400">IMPORTANT</span>}
      />
      Password
      <Input
        {...register('password')}
        className="border-2 rounded-md border-indigo-600"
      />
      Display Name
      <Input
        {...register('displayName')}
        className="border-2 rounded-md border-indigo-600"
      />
      {/* <Input {...register('birthDate')} /> */}
      Birthdate
      <Input
        {...register('birthDate')}
        className="border-2 rounded-md border-indigo-600"
      />
      {/* <Input {...register('email')} />
      <Input {...register('email')} /> */}
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
