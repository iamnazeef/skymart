import FacebookIcon from "./icons/SocialHandlesIcons/FacebookIcon";
import InstagramIcon from "./icons/SocialHandlesIcons/InstagramIcon";
import PinterestIcon from "./icons/SocialHandlesIcons/PinterestIcon";
import TwitterIcon from "./icons/SocialHandlesIcons/TwitterIcon";
import YoutubeIcon from "./icons/SocialHandlesIcons/YoutubeIcon";

const SocialHandles = () => {
  return (
    <ul className="flex items-center space-x-4">
      <li>
        <a href="#" className="text-white" title="facebook.com/skymart">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="#" className="text-white" title="instagram.com/skymart">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="#" className="text-white" title="pinterest.com/skymart">
          <PinterestIcon />
        </a>
      </li>
      <li>
        <a href="#" className="text-white" title="twitter.com/skymart">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="#" className="text-white" title="youtube.com/skymart">
          <YoutubeIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialHandles;
