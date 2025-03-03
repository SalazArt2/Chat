import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/path/to/your/background.jpg')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 backdrop-blur-xs backdrop-grayscale rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <GenderCheckbox />
          <Link
            to="/login"
            className="block text-center text-sm text-blue-500 hover:underline mt-4"
          >
            Already have an account?
          </Link>
          <button className="w-full btn btn-primary h-12 rounded-lg mt-6">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
