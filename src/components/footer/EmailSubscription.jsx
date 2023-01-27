const EmailSubscription = () => {
  return (
    <>
      <p className="text-blue-800 font-semibold mb-2 text-base">
        Sign Up for Savings. New Arrivals, Alerts and More
      </p>
      <form>
        <label htmlFor="email" className="text-gray-700 font-semibold">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="border border-gray-400 w-full rounded-sm max-w-[400px] p-3 text-black font-medium"
        />
        <button className="text-black font-semibold ml-5 border border-black bg-white px-5 py-[0.65rem] hover:border-2 focus:bg-black focus:text-white rounded-full">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default EmailSubscription;
