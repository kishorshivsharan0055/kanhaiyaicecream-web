import React from "react";
import { PHONE_NO } from "../contants";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div>
      <nav id="footer" className="bg-gray-500">
        {/* start container */}
        <div className="container mx-auto pt-8 pb-4">
          <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 1 Content */}
              <div className="text-3xl font-bold">CompanyName</div>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 2 Content */}
              <h4 className="text-white">Follow us on</h4>
              <ul className="nav navbar-nav">
                <li id="navi-2" className="leading-7 text-sm">
                  <a className="text-white underline text-small">Facebook </a>
                </li>
                <li id="navi-1" className="leading-7 text-sm">
                  <a className="text-white underline text-small">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 4 Content */}
              <h4 className="text-white">Contact us</h4>
              <ul>
                <li id="navi-2" className="leading-7 text-white text-sm">
                  {PHONE_NO}
                </li>
                <li id="navi-1" className="leading-7 text-sm text-white">
                  Shivaji Nagar, Pune, India
                </li>
              </ul>
            </div>
          </div>
          {/* Start footer bottom */}
          <div
            className="pt-4 md:flex md:items-center md:justify-center "
            style={{ borderTop: "1px solid white" }}
          >
            <ul>
              <li
                className="md:mx-2 md:inline leading-7 text-sm"
                id="footer-navi-2"
              >
                <a
                  className="text-white underline text-small"
                  href="/disclaimer"
                >
                  Disclaimer
                </a>
              </li>
              <li
                className="md:mx-2 md:inline leading-7 text-sm"
                id="footer-navi-2"
              >
                <a className="text-white underline text-small" href="/cookie">
                  Cookie policy
                </a>
              </li>
              <li
                className="md:mx-2 md:inline leading-7 text-sm"
                id="footer-navi-2"
              >
                <a className="text-white underline text-small" href="/privacy">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          {/* end container */}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
