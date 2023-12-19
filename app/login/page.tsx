/* eslint-disable react-hooks/rules-of-hooks */
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";

export default function login ():JSX.Element {
  return (
    <div
    className="container max-w-full h-screen">
      <div className=" justify-center">
        <div className="container mx-auto h-full bg-base-200 p-20 max-md:p-8 justify-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
        </div>
        <div className="form-control mt-6">
          {/* <button className="">Login</button> */}
          <LoginLink className="btn  text-cyan-500">Login</LoginLink>

        </div>
      </form>
      <p className="p-4 text-center">{"Don't have an account?"}</p>
      <RegisterLink className="btn btn-link justify-items-end w-full">Register</RegisterLink>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

