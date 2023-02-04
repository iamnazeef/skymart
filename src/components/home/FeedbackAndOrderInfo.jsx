import TrackOrdersIcon from "./icons/TrackOrdersIcon";
import EditAnOrderIcon from "./icons/EditAnOrderIcon";
import ReturnsIcon from "./icons/ReturnsIcon";
import HelpCenterIcon from "./icons/ReturnsIcon";

const FeedbackAndOrderInfo = () => {
  return (
    <section className="FeedbackAndOrderInfo w-full bg-blue-100 rounded-lg text-center p-5 mb-10 max-w-[800px] mx-auto">
      <section>
        <p className="text-sm mb-5">We'd love to hear what you think!</p>
        <a
          href="#"
          className="border border-black rounded-full hover:border-2 bg-white py-2 px-3 font-semibold text-black focus:text-white focus:bg-black"
        >
          Give feedback
        </a>
      </section>
      <hr className="border border-blue-200 my-6" />
      <nav className="flex justify-center tablet:block">
        <ul className="flex flex-col items-center space-y-1 tablet:flex-row tablet:items-center tablet:justify-center w-full tablet:space-x-5">
          <li className="flex items-center justify-center space-x-2">
            <TrackOrdersIcon />
            <a href="#" className="underline text-sm hover:no-underline">
              Track Orders
            </a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <EditAnOrderIcon />
            <a href="#" className="underline text-sm hover:no-underline">
              Edit an Order
            </a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <ReturnsIcon />
            <a href="#" className="underline text-sm hover:no-underline">
              Returns
            </a>
          </li>
          <li className="flex items-center justify-center space-x-2">
            <HelpCenterIcon />
            <a href="#" className="underline text-sm hover:no-underline">
              Help Center
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default FeedbackAndOrderInfo;
