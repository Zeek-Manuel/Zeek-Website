import { Vina_Sans } from 'next/font/google';



const vina_Sans = Vina_Sans({
  subsets: ['latin'],
  weight: '400',
})


export default function page(): JSX.Element {
  return (
    <div className="container mx-auto max-h-full justify-center p-4 h-100">
        <h1 className={`text-4xl  text-cyan-700 text-center ${vina_Sans.className}`}>
          WELCOME TO DESIGN PAGE
        </h1>
    </div>
  )
}