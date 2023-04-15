import Input from "@/components/Input";
import { useCallback, useState } from "react";


const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVarinat) => currentVarinat === 'login' ? 'register' : 'login');
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed bg-center">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="images/logo.png" alt="logo" className="h-12"/>
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 mt-2 self-center md:w-3/5 md:max-w-md rounded-md w-full">
            <h2 className="text-white font-semibold text-4xl mb-8">
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === 'register'&& (
              <Input
                id="userName"
                value={name}
                type="text"
                onChange={(e: any) => setName(e.target.value)}
                label="Username"
                />
              )}

              <Input
              id="email"
              value={email}
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
              label="Email"
              />

              <Input
              id="pasword"
              value={password}
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
              label="Password"
              />
            </div>

            <button className="bg-red-600 w-full mt-8 rounded-md py-3 text-white hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>

            <p className="text-neutral-500 mt-10">
              {variant === 'login' ? 'First time using Netflix ?' : 'Already have an account ?'}
              <span onClick={toggleVariant} className="text-white hover:underline cursor-pointer ml-1">
                {variant === 'login'? 'Create an account.' : 'Login'}
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Auth