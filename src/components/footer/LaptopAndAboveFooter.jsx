const LaptopAndAboveFooter = () => {
  return (
    <>
      <div className="customer-service">
        <p className="font-semibold text-sm mb-2">Customer Service</p>
        <ul className="flex flex-col items-start space-y-3 text-[0.8rem] mb-3">
          <li className="hover:underline">
            <a href="#">Track Orders</a>
          </li>
          <li className="hover:underline">
            <a href="#">Returns</a>
          </li>
          <li className="hover:underline">
            <a href="#">Help Center</a>
          </li>
          <li className="hover:underline">
            <a href="#">Pickup & Delivery</a>
          </li>
          <li className="hover:underline">
            <a href="#">Product Recalls</a>
          </li>
          <li className="hover:underline">
            <a href="#">Accessibility</a>
          </li>
          <li className="hover:underline">
            <a href="#">Safety Data Sheet</a>
          </li>
          <li className="hover:underline">
            <a href="#">Tax Exempt Program</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-sm mb-2">Skymart Services</p>
        <ul className="flex flex-col items-start space-y-3 text-[0.8rem] mb-3">
          <li className="hover:underline">
            <a href="#">Money Center</a>
          </li>
          <li className="hover:underline">
            <a href="#">Skymart Health</a>
          </li>
          <li className="hover:underline">
            <a href="#">Pharmacy</a>
          </li>
          <li className="hover:underline">
            <a href="#">Vision Center</a>
          </li>
          <li className="hover:underline">
            <a href="#">Auto Care Center</a>
          </li>
          <li className="hover:underline">
            <a href="#">Skymart+</a>
          </li>
          <li className="hover:underline">
            <a href="#">PetRX</a>
          </li>
          <li className="hover:underline">
            <a href="#">Photo Center</a>
          </li>
          <li className="hover:underline">
            <a href="#">Registry</a>
          </li>
          <li className="hover:underline">
            <a href="#">Custom Cakes</a>
          </li>
          <li className="hover:underline">
            <a href="#">Other Services</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-2">Stores</p>
        <ul className="flex flex-col items-start space-y-3 text-[0.8rem] mb-3">
          <li className="hover:underline">
            <a href="#">Store Directory</a>
          </li>
          <li className="hover:underline">
            <a href="#">Find a Store</a>
          </li>
          <li className="hover:underline">
            <a href="#">All Departments</a>
          </li>
          <li className="hover:underline">
            <a href="#">Flu Shot</a>
          </li>
          <li className="hover:underline">
            <a href="#">Covid-19 Vaccine Scheduler</a>
          </li>
        </ul>
      </div>
      <div className="get-to-know-us-and-partner-with-us">
        <p className="font-semibold mb-2 text-sm">Get to Know Us</p>
        <ul className="flex flex-col items-start space-y-3 text-[0.8rem] mb-3">
          <li className="hover:underline">
            <a href="#">Our Company</a>
          </li>
          <li className="hover:underline">
            <a href="#">Careers</a>
          </li>
          <li className="hover:underline">
            <a href="#">#IYWYK</a>
          </li>
        </ul>
        <p className="font-semibold my-2 text-sm">Partner with Us</p>
        <ul className="flex flex-col items-start space-y-3 text-[0.8rem] mb-3">
          <li className="hover:underline">
            <a href="#">Sell on Skymart.com</a>
          </li>
          <li className="hover:underline">
            <a href="#">Advertise with Us</a>
          </li>
        </ul>
      </div>
      <div className="download-app hidden tablet:block p-3 mt-5 laptop:mt-0">
        <p className="text-sm font-semibold">Download Our App</p>
        <div className="where-to-download flex items-center space-x-2 mt-2">
          <a href="#">
            <img
              src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
              alt="Download from Google Play Store"
              className="w-32"
            />
          </a>
          <a href="#">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download from Apple App Store"
              className="w-28"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default LaptopAndAboveFooter;
