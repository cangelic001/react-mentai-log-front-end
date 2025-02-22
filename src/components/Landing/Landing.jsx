import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <main className="text-center px-4 sm:px-6 md:px-8 w-full">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-rose-300 via-rose-400 to-yellow-400 text-4xl sm:text-5xl mb-6">
          Welcome to <br /> Mentai-Log
        </h1>
        <h2 className="mb-4">Hello, you are on the landing page for visitors.</h2>
        <h2 className="mb-4">Sign up now, or sign in to see your super secret dashboard!</h2>
        <div>
          <Link
            to="/sign-up" 
            type="button" 
            style={{color: 'white'}}
            className="shadow-lg text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Start Logging Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Landing;






