/* eslint-disable react-hooks/rules-of-hooks */
'use client';

export default function login ():JSX.Element {
  return (
    <div 
    className="container max-w-full max-h-full">
      <div className=" justify-center">
        <div className="container mx-auto h-full bg-base-200 p-20 max-md:p-8 justify-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  text-cyan-500">Login</button>
        </div>
      </form>
      <p className="p-4 text-center">{"Don't have an account?"}</p>
      <a href="/sign-up" className="btn btn-link justify-items-end w-full">Register</a>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

