import { RegisterForm } from "./components";

const Register = () => {
  return (
    <div className="bg-[url('/images/background-login.webp')] h-screen w-full bg-no-repeat bg-cover flex justify-center items-center">
      <div className=" bg-black-2 rounded-md px-10 py-6 shadow-2xl w-[500px] max-w-[500px] flex flex-col items-center">
        <h2 className="text-2xl text-white font-bold mb-5">
          Create an account.
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
