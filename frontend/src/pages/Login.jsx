import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";

const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const [currState, setcurrState] = useState("Sign Up");

  return (
    <div className="absolute top-0 h-full w-full z-50 bg-white">
      {/* Container */}
      <div className="flex h-full w-full">
        {/* Image Side */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="login-image"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form Side */}
        <div className="flex w-full sm:w-1/2 items-center justify-center text-[90%]">
          <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5">
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState}</h3>
            </div>

            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1"
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                required
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>

            <button className="btn-dark w-full mt-5 !py-[8px] !rounded">
              {currState === "Sign Up" ? "Sign Up" : "Sign In"}
            </button>

            <div className="w-full flex flex-col gray-y-3">
              <div className="underline medium-15">Forgot your password?</div>
              {currState === "Sign In" ? (
                <div className="underline medium-15">
                  Don&apos;t have an account?{" "}
                  <span
                    onClick={() => setcurrState("Sign Up")}
                    className="cursor-pointer"
                  >
                    Create account
                  </span>
                </div>
              ) : (
                <div className="underline medium-15">
                  Already have an account?{" "}
                  <span
                    onClick={() => setcurrState("Sign In")}
                    className="cursor-pointer"
                  >
                    Sign In
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
