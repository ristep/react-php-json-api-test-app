import React from 'react';
import { useForm } from 'react-hook-form';
import ReactJson from 'react-json-view';

export default function User() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="first_name" {...register("first_name", { maxLength: 32})} />
      <input type="text" placeholder="second_name" {...register("second_name", { maxLength: 32})} />
      <input type="text" placeholder="name" {...register("name", {required: true, maxLength: 24})} />
      <input type="email" placeholder="email" {...register("email", {})} />
      <input type="text" placeholder="place" {...register("place", { maxLength: 32})} />
      <input type="text" placeholder="zipcode" {...register("zipcode", { maxLength: 15})} />
      <input type="text" placeholder="country" {...register("country", { maxLength: 32})} />
      <input type="text" placeholder="state" {...register("state", { maxLength: 29})} />

      <input type="submit" />
    </form>
    <ReactJson name={false} src={watch} />
    </div>
  );
}