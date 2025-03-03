import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    login(inputs.username, inputs.password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-secondary bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-base-300">
          Login
          <span className="text-secondary-content"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmitForm}>
          <div>
            <label className="label p-2 ">
              <span className="text-base-100 label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base-100 label-text p-2">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-white p-2"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn text-accent-content btn-block btn-sm mt-2 border border-slate-700 btn-accent hover:btn-info hover:text-info-content"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
