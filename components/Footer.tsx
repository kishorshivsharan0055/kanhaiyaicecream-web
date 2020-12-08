import React from "react";
import { PHONE_NO } from "../contants";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import CallIcon from "@material-ui/icons/Call";
import PinDropIcon from "@material-ui/icons/PinDrop";
import MailIcon from "@material-ui/icons/Mail";
import Fade from "react-reveal/Fade";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface FooterProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    extendedIcon: {
      marginRight: theme.spacing(1),
      color: "#FFFFFF",
    },
  })
);

export const Footer: React.FC<FooterProps> = ({}) => {
  const classes = useStyles();

  return (
    <div>
      <nav id="footer" className="bg-gray-500">
        {/* start container */}
        <div className="container mx-auto pt-8 pb-4">
          <div className="flex flex-wrap overflow-hidden ml-5 mr-5 sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 1 Content */}
              <div className="text-3xl text-white font-bold">PRIDE</div>
              <div className="text-2xl text-white font-bold">
                Import & Export
              </div>
              <div className="text-sm text-white font-bold">
                Your Smile Our Concern
              </div>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 2 Content */}
              <h4
                className="text-white"
                style={{ borderBottom: "1px solid white" }}
              >
                Products
              </h4>
              <Fade bottom>
                <ul className="nav navbar-nav">
                  <li id="navi-2" className="leading-7 text-sm">
                    <a className="text-white text-small cursor-pointer">
                      Fruits{" "}
                    </a>
                  </li>
                  <li id="navi-1" className="leading-7 text-sm">
                    <a className="text-white text-small cursor-pointer">
                      Vegetables
                    </a>
                  </li>
                  <li id="navi-1" className="leading-7 text-sm">
                    <a className="text-white text-small cursor-pointer">
                      Dry Fruits
                    </a>
                  </li>
                </ul>
              </Fade>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 2 Content */}
              <h4
                className="text-white"
                style={{ borderBottom: "1px solid white" }}
              >
                Follow Us on
              </h4>
              <ul className="nav navbar-nav">
                <Fade bottom>
                  <li id="navi-2" className="leading-7 text-sm">
                    <FacebookIcon className={classes.extendedIcon} />
                    <a className="text-white text-small cursor-pointer">
                      Facebook
                    </a>
                  </li>
                  <li id="navi-1" className="leading-7 text-sm">
                    <InstagramIcon className={classes.extendedIcon} />
                    <a className="text-white text-small cursor-pointer">
                      Instagram
                    </a>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 4 Content */}
              <h4
                className="text-white"
                style={{ borderBottom: "1px solid white" }}
              >
                Contact us
              </h4>
              <ul>
                <Fade bottom>
                  <li
                    id="navi-2"
                    className="leading-7 text-white text-sm cursor-pointer"
                  >
                    <CallIcon className={classes.extendedIcon} />
                    {PHONE_NO}
                  </li>
                  <li
                    id="navi-1"
                    className="leading-7 text-sm text-white cursor-pointer"
                  >
                    <MailIcon className={classes.extendedIcon} />
                    prideimpexp@gmail.com
                  </li>
                  <li
                    id="navi-1"
                    className="leading-7 text-sm text-white cursor-pointer"
                  >
                    <PinDropIcon className={classes.extendedIcon} />
                    Shivaji Nagar, Pune, India
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
          {/* Start footer bottom */}
          <div
            className="pt-4 md:flex md:items-center md:justify-center "
            style={{ borderTop: "1px solid white" }}
          >
            <ul className="ml-5">
              <li
                className="md:mx-2 md:inline leading-7 text-sm "
                id="footer-navi-2"
              >
                <a
                  className="text-white underline text-small"
                  href="/disclaimer"
                >
                  Disclaimer
                </a>
              </li>
              {/* <li
                className="md:mx-2 md:inline leading-7 text-sm"
                id="footer-navi-2"
              >
                <a className="text-white underline text-small" href="/cookie">
                  Cookie policy
                </a>
              </li> */}
              <li
                className="md:mx-2 md:inline leading-7 text-sm"
                id="footer-navi-2"
              >
                <a className="text-white underline text-small" href="/privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="md:items-center md:justify-center md:flex text-white">
            <div>Developed by Kishor Shivsharan</div>
          </div> */}
          {/* end container */}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
