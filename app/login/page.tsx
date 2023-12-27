/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import type { Database } from '@/lib/database.types'

export default function login ():JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div
    className="container max-w-full max-h-full">
      <div className=" justify-center">
        <div className="container mx-auto h-full bg-base-200 p-20 max-md:p-8 justify-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Welcome back!</h1>
    </div>
    <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" action={'/auth/login'} method='post'>
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
          </label>
            <a href="" className="btn  flex">Forgot Password</a>

        </div>
        <div className="form-control mt-6">
          {/* <button className="">Register</button> */}
          <a href="" className="btn  text-cyan-500">Login</a>
        </div>
      </form>
      <p className="p-4 text-center">{"Don't have an account?"}</p>
      <a href="/auth/sign-up" className="btn btn-link justify-items-end w-full">Sign Up</a>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

