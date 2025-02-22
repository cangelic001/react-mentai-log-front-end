import Chart from "../Chart/Chart";

const Landing = () => {
  return (
    <main>
      <h1 className='text-center'>Welcome to <br /> Mentai-Log</h1>
      <br />
      <Chart />
      <h1 className='text-center'>Hello, you are on the landing page for visitors.</h1>
      <h2 className='text-center'>Sign up now, or sign in to see your super secret dashboard!</h2>
      <div className="flex justify-center">
        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Start Logging Now</button>
      </div>
    </main>
  );
};

export default Landing;
