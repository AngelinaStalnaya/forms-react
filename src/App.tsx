import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css';

type FormFields = {
  email: string;
  password: string;
};


const App = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }

  return (
    <form className='form gap-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          // pattern: /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          validate: (value: string) => {
            if (!value.includes('@')) {
              return 'Email must include @'
            }
            return true
          },
        })}
        type="text"
        placeholder='Email' />
      {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
      <input {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'Password must be at least 8 characters long',
        }
      })}
        type="password"
        placeholder='Password' />
      {errors.password && <div className='text-red-500'>{errors.password.message}</div>}

      <button type="submit">Submit</button>
    </form>
  )
}

export default App;
