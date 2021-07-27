import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" className="form-control form-group" {...register("First name",{required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" className="form-control form-group" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" className="form-control form-group" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" className="form-control form-group" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" className="form-control form-group"/>
      <input {...register("Developer", { required: true })} type="radio" value="No" className="form-control form-group"/>

      <input className="button form-group" type="submit" />
    </form>
  );
}