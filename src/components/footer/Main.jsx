import EmailSubscription from "./EmailSubscription";
import LaptopAndAboveFooter from "./LaptopAndAboveFooter";
import MobileFooter from "./MobileFooter";
import RulesAndRegulations from "./RulesAndRegulations";
import SocialHandles from "./SocialHandles";
import TabletFooter from "./TabletFooter";

const Footer = () => {
  return (
    <div className="bg-white text-black tablet:bg-blue-800 tablet:text-white">
      <div className="mobile-footer p-3 tablet:hidden">
        <MobileFooter />
      </div>
      <div className="details-and-summary hidden tablet:block p-3 laptop:hidden">
        <TabletFooter />
      </div>
      <div className="hidden laptop:flex items-start space-x-10 p-3">
        <LaptopAndAboveFooter />
      </div>
      <div className="hidden tablet:block subscribe-to-emails bg-blue-100 mx-3 rounded-md py-3 px-4 text-sm max-w-[600px]">
        <EmailSubscription />
      </div>
      <div className="social-handles hidden tablet:block px-3 mt-5">
        <SocialHandles />
      </div>
      <div className="copyright p-3 text-[0.85rem] mt-3">
        <p>&copy; {new Date().getFullYear()} Skymart. All Rights Reserved.</p>
      </div>
      <div className="hidden tablet:block p-3">
        <RulesAndRegulations />
      </div>
    </div>
  );
};

export default Footer;
