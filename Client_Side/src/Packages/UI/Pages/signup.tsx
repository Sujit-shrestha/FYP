import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
interface FormData {
  username: string;
  email: string;
  password: string;
}

const Signup= ()=>{

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Add your form submission logic here
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="username">Username</label>
        <Input id="username" type="text" {...register('username', { required: true })} />
        {errors.username && <span className="text-red-500">Username is required</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span className="text-red-500">Email is required</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span className="text-red-500">Password is required</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
    </form>
    </>
  );
}
export default Signup;