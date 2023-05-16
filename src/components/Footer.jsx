
const Footer = () => {
    return (
      <div className="relative top-16 flex flex-col justify-between border border-black md:flex md:flex-row  py-10 text-white bg-black">
        <div className="flex flex-1 justify-around ">
          <div className="leftFooter1">
            <span className="opacity-50 font-medium">COMPANY</span>
            <ul className="mt-4 flex flex-col gap-2">
              <a href="">
                <li className="footerItem">About us</li>
              </a>
              <a href="">
                <li className="footerItem">Team</li>
              </a>
              <a href="">
                <li className="footerItem">Careers</li>
              </a>
              <a href="">
                <li className="footerItem">Swiggy Blog</li>
              </a>
              <a href="">
                <li className="footerItem">Bug Bounty</li>
              </a>
              <a href="">
                <li className="footerItem">Swiggy One</li>
              </a>
              <a href="">
                <li className="footerItem">Swiggy Corporate</li>
              </a>
              <a href="">
                <li className="footerItem">Swiggy Instamart</li>
              </a>
              <a href="">
                <li className="footerItem">Swiggy Genie</li>
              </a>
            </ul>
          </div>
          <div className="leftFooter2">
            <span className="opacity-50 font-medium">CONTACT</span>
            <ul className="mt-4 flex flex-col gap-2">
              <a href="">
                <li className="footerItem">Help & Support</li>
              </a>
              <a href="">
                <li className="footerItem">Partern with us</li>
              </a>
              <a href="">
                <li className="footerItem">Ride with us</li>
              </a>
            </ul>
          </div>
        </div>
        <div className=" flex flex-1 justify-around md:mt-0 mt-10 ">
          <div className="hidden md:block rightFooter1">
            <span className="opacity-50 font-medium">LEGAL</span>
            <ul className="mt-4 flex flex-col gap-2">
              <a href="">
                <li className="footerItem">Terms & Conditions</li>
              </a>
              <a href="">
                <li className="footerItem">Refund & Cancellation</li>
              </a>
              <a href="">
                <li className="footerItem">Privacy Policy</li>
              </a>
              <a href="">
                <li className="footerItem">Cookie Policy</li>
              </a>
              <a href="">
                <li className="footerItem">Offer Terms</li>
              </a>
              <a href="">
                <li className="footerItem">Phishing & Fraud</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <img
            className="h-12 cursor-pointer"
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            />
            <img
            className="h-12 cursor-pointer"
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            />
          </div>
        </div>
      </div>
    );
  };
  export default Footer;
  