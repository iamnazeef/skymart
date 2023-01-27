const TabletFooter = () => {
  return (
    <>
      <details className="border-b border-gray-800 mb-3">
        <summary className="mb-3 text-sm font-semibold cursor-pointer">
          Customer Service
        </summary>
        <ul className="flex flex-col items-start space-y-3 text-sm mb-3 pl-4">
          <li>
            <a href="#">Track Orders</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Pickup & Delivery</a>
          </li>
          <li>
            <a href="#">Product Recalls</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Safety Data Sheet</a>
          </li>
          <li>
            <a href="#">Tax Exempt Program</a>
          </li>
        </ul>
      </details>
      <details className="border-b border-gray-800 mb-3">
        <summary className="mb-3 text-sm font-semibold cursor-pointer">
          Skymart Services
        </summary>
        <ul className="flex flex-col items-start space-y-3 text-sm mb-3 pl-4">
          <li>
            <a href="#">Money Center</a>
          </li>
          <li>
            <a href="#">Skymart Health</a>
          </li>
          <li>
            <a href="#">Pharmacy</a>
          </li>
          <li>
            <a href="#">Vision Center</a>
          </li>
          <li>
            <a href="#">Auto Care Center</a>
          </li>
          <li>
            <a href="#">Skymart+</a>
          </li>
          <li>
            <a href="#">PetRX</a>
          </li>
          <li>
            <a href="#">Photo Center</a>
          </li>
          <li>
            <a href="#">Registry</a>
          </li>
          <li>
            <a href="#">Custom Cakes</a>
          </li>
          <li>
            <a href="#">Other Services</a>
          </li>
        </ul>
      </details>
      <details className="border-b border-gray-800 mb-3">
        <summary className="mb-3 text-sm font-semibold cursor-pointer">
          Stores
        </summary>
        <ul className="flex flex-col items-start space-y-3 text-sm mb-3 pl-4">
          <li>
            <a href="#">Store Directory</a>
          </li>
          <li>
            <a href="#">Find a Store</a>
          </li>
          <li>
            <a href="#">All Departments</a>
          </li>
          <li>
            <a href="#">Flu Shot</a>
          </li>
          <li>
            <a href="#">Covid-19 Vaccine Scheduler</a>
          </li>
        </ul>
      </details>
      <details className="border-b border-gray-800 mb-3">
        <summary className="mb-3 text-sm font-semibold cursor-pointer">
          Get to Know Us
        </summary>
        <ul className="flex flex-col items-start space-y-3 text-sm mb-3 pl-4">
          <li>
            <a href="#">Our Company</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">#IYWYK</a>
          </li>
        </ul>
      </details>
      <details className="border-b border-gray-800 mb-3">
        <summary className="mb-3 text-sm font-semibold cursor-pointer">
          Partner with Us
        </summary>
        <ul className="flex flex-col items-start space-y-3 text-sm mb-3 pl-4">
          <li>
            <a href="#">Sell on Skymart.com</a>
          </li>
          <li>
            <a href="#">Advertise with Us</a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default TabletFooter;
