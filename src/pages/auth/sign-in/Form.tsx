// import { Form } from "react-hook-form";
import FormField from "@components/ui/FormField";
import { FormData } from "@type/components";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Success", data);
  };

  return (
    <div className="w-[40%] flex justify-center items-center flex-col">
      <div className="flex justify-center items-start flex-col w-[65%] gap-4">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold w-full">Continue your journey</h2>
          <p className="font-medium">
            Reconnect and streamline {" "}
            <span className="font-semibold italic">
              your trade with technology
            </span>
            <i className="ri-robot-3-line text-blue-600 bg-white px-2 py-1 rounded-full"></i>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex gap-2">
            <FormField
              type="text"
              name="userName"
              labelText="Username"
              inputId="userName"
              register={register}
              error={errors.userName}
            />
            <FormField
              type="email"
              name="email"
              labelText="Email"
              inputId="email"
              register={register}
              error={errors.email}
            />
          </div>
            <FormField
              type="password"
              name="password"
              labelText="Password"
              inputId="password"
              register={register}
              error={errors.password}
            />
            <FormField
              type="password"
              name="confirmPassword"
              labelText="Confirm Password"
              inputId="confirmPassword"
              register={register}
              error={errors.confirmPassword}
            />
          <button className="bg-blue-600 font-medium px-4 py-3 text-white rounded-2xl cursor-pointer hover:opacity-85 animate active:scale-95">
            Sign In
          </button>
          <div className="flex flex-row w-full items-center gap-4 text-gray-300 font-bold">
            <hr className="w-full text-transparent bg-gray-300" />
            <span>or</span>
            <hr className="w-full text-transparent bg-gray-300" />
          </div>
          <button className="bg-white border-2 border-gray-300 text-black font-medium px-4 py-2 rounded-2xl cursor-pointer hover:opacity-85 flex flex-row justify-center items-center gap-1 animate active:scale-95"><img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google Icon"
              className="w-[35px] h-[35px]"
            />
            Continue with Google
          </button>
        </form>
        <button className="w-full text-gray-500 font-medium">
          Don't have an Account ? <a href="/sign-up" className="font-bold underline text-blue-600 hover:opacity-80">Sign Up</a>
        </button>
      </div>
    </div>
  );
};

export default Form;
