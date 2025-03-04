import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signup } = useSignup();
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-secondary bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-base-200">
          {t("signup.signup")}{" "}
          <span className="text-secondary-content"> Chat</span>
        </h1>

        <form onSubmit={handleSubmitForm}>
          <div>
            <label className="label p-2">
              <span className="text-base-100 label-text">
                {t("signup.fullname")}
              </span>
            </label>
            <input
              type="text"
              placeholder={t("signup.fullnameplh")}
              className="w-full input input-bordered  h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base-100 label-text">
                {t("signup.username")}
              </span>
            </label>
            <input
              type="text"
              placeholder={t("signup.usernameplh")}
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base-100 label-text">
                {t("signup.password")}
              </span>
            </label>
            <input
              type="password"
              placeholder={t("signup.passwordplh")}
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base-100 label-text">
                {t("signup.confpassword")}
              </span>
            </label>
            <input
              type="password"
              placeholder={t("signup.confpasswordplh")}
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            selectedGender={inputs.gender}
            onCheckboxChange={handleCheckboxChange}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-white p-2"
          >
            {t("signup.haveaccount")}
          </Link>

          <div>
            <button
              className="btn text-accent-content btn-block btn-sm mt-2 border border-slate-700 btn-accent hover:btn-info hover:text-info-content"
              disabled={loading}
            >
              {loading ? t("loading") : t("signup.signup")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
