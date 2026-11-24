import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
export default function SignUpForm() {
  return (
    <>
      <div className="signupForm bg-gray-100">
        <form className="bg-white max-w-lg mx-auto p-10 rounded-2xl shadow space-y-5">
          <header className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Create account</h2>
            <p>
              Already have an acount? <Link to={`/login`} className="text-blue-400">sign in</Link>
            </p>
          </header>

          <div className="social-btns flex justify-center items-center gap-3 *:grow">
            <button className="cursor-pointer px-5 rounded-xl border border-gray-400/30 py-2">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span>Google</span>
            </button>
            <button className="cursor-pointer px-5 rounded-xl border border-gray-400/30 py-2">
              <FontAwesomeIcon icon={faFacebook} />
              <span>Facebook</span>
            </button>
          </div>
          <div className="seperator">or containue with email</div>

          <div className="form-control">
            <label htmlFor="">full Name</label>
           <div>
            <input type="text" name="" id="" />
            <FontAwesomeIcon icon={faUser} />
           </div>
          </div>
        </form>
      </div>
    </>
  );
}
