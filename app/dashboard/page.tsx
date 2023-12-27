'use client';
import Link from "next/link";


export default function dashboard(): JSX.Element {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">This is your dashboard. By clicking on the button below you will get access to all the designs.</p>
                <Link href={'/design'} className="btn btn-primary">Go to Design Page</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

