const FlashPicks = () => {
  return (
    <div className="FlashPicks my-5 shadow-cardShadow p-3 rounded-lg tablet:mt-0 tablet:w-[50%] tablet:min-h-[420px] laptop:mt-4 laptop:w-[40%] laptop:min-h-[410px] desktop:w-[30%]">
      <div className="top flex items-center justify-between mb-3">
        <p className="text-gray-900 font-semibold text-md">
          Flash Pick of the day
        </p>
        <a href="#" className="text-sm text-black underline">
          View all
        </a>
      </div>
      <div className="product flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="object-cover w-full h-[250px] rounded-lg cursor-pointer"
        />
        <div className="product-details">
          <a
            href="#"
            className="bg-blue-600 rounded-full py-2 px-4 text-white font-semibold text-sm shadow-md hover:bg-blue-800"
          >
            Options
          </a>
          <p className="text-black font-semibold mt-2">
            $21.99 <span className="line-through font-normal">$45.00</span>
          </p>
          <p className="text-sm">U.S. Polo Assn. Women's Snowflake Sweater</p>
        </div>
      </div>
    </div>
  );
};

export default FlashPicks;
