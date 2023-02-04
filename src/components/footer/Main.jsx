import EmailSubscription from "./EmailSubscription";
import LaptopAndAboveFooter from "./LaptopAndAboveFooter";
import MobileFooter from "./MobileFooter";
import RulesAndRegulations from "./RulesAndRegulations";
import SocialHandles from "./SocialHandles";
import TabletFooter from "./TabletFooter";

const Footer = () => {
  return (
    <footer className="bg-white text-black tablet:bg-blue-800 tablet:text-white">
      <section>
        <MobileFooter />
      </section>
      <section>
        <TabletFooter />
      </section>
      <section>
        <LaptopAndAboveFooter />
      </section>
      <section>
        <EmailSubscription />
      </section>
      <section>
        <SocialHandles />
      </section>
      <section className="copyright p-3 text-[0.85rem] mt-3">
        <p>&copy; {new Date().getFullYear()} Skymart. All Rights Reserved.</p>
      </section>
      <section>
        <RulesAndRegulations />
      </section>
    </footer>
  );
};

export default Footer;
