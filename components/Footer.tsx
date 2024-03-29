import React from "react";
import { EMAIL_ID, PHONE_NO } from "../contants";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import CallIcon from "@material-ui/icons/Call";
import PinDropIcon from "@material-ui/icons/PinDrop";
import MailIcon from "@material-ui/icons/Mail";
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

  // const args = {
  //   number: '9093900003', // String value with the number to call
  //   prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
  // }

  // const call = () => {
  //   call(args).catch(console.log);
  // }

  return (
    <div>
      <nav id="footer" className="bg-gray-500">
        {/* start container */}
        <div className="container mx-auto pt-8 pb-4">
          <div className="flex flex-wrap overflow-hidden ml-5 mr-5 sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 1 Content */}
              <div className="text-3xl text-white font-bold">KANHAIYA</div>
              <div className="text-sm text-white font-bold">Ice-Cream</div>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 2 Content */}
              <h4
                className="text-white"
                style={{ borderBottom: "1px solid white" }}
              >
                Products
              </h4>

              <ul className="nav navbar-nav" data-aos="fade-up">
                <li id="navi-2" className="leading-7 text-sm">
                  <a
                    href="/products/1"
                    className="text-white text-small cursor-pointer"
                  >
                    Kulfi{" "}
                  </a>
                </li>
                <li id="navi-1" className="leading-7 text-sm">
                  <a
                    href="/products/4"
                    className="text-white text-small cursor-pointer"
                  >
                    Shakes
                  </a>
                </li>
                <li id="navi-1" className="leading-7 text-sm">
                  <a
                    href="/products/2"
                    className="text-white text-small cursor-pointer"
                  >
                    Ice-Cream
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
              {/* Column 2 Content */}
              <h4
                className="text-white"
                style={{ borderBottom: "1px solid white" }}
              >
                Follow Us on
              </h4>
              <ul className="nav navbar-nav" data-aos="fade-up">
                <li id="navi-2" className="leading-7 text-sm">
                  <FacebookIcon className={classes.extendedIcon} />
                  <a className="text-white text-small cursor-pointer">
                    Facebook
                  </a>
                </li>
                <li id="navi-1" className="leading-7 text-sm">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/kanhaiyaicecream/"
                    className="text-white text-small cursor-pointer"
                  >
                    <InstagramIcon className={classes.extendedIcon} />
                    Instagram
                  </a>
                </li>
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
              <ul data-aos="fade-up">
                <a href="tel:8209567073">
                  <li
                    id="navi-2"
                    className="leading-7 text-white text-sm cursor-pointer"
                  >
                    <CallIcon className={classes.extendedIcon} />
                    {PHONE_NO}
                  </li>
                </a>
                <li
                  id="navi-1"
                  className="leading-7 text-sm text-white cursor-pointer"
                >
                  <a href="mailto:pg2961829@gmail.com">
                    <MailIcon className={classes.extendedIcon} />
                    {EMAIL_ID}
                  </a>
                </li>
                <li
                  id="navi-1"
                  className="leading-7 text-sm text-white cursor-pointer"
                >
                  <a
                    target="_blank"
                    href="https://www.google.co.in/maps/place/Kanhaiya+Ice+Cream/@18.6800296,73.7298498,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2b0b89dcea821:0xcbb914ee5cc80da5!8m2!3d18.6800245!4d73.7320385"
                  >
                    <PinDropIcon className={classes.extendedIcon} />
                    Old Mumbai - Pune Highway Dehu, Road, Pimpri-Chinchwad,
                    Maharashtra 412101
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Start footer bottom */}
          {/* <div
            className="pt-4 md:flex md:items-center md:justify-center "
            style={{ borderTop: "1px solid white" }}
          >
            <ul className="ml-5">
              <li
                className="md:mx-2 md:inline leading-7 text-sm "
                id="footer-navi-2"
              >
                <a className="text-white text-lg">
                  Developed By Kishor Shivsharan
                </a>
              </li>
            </ul>
          </div> */}
          <div
            className="md:items-center md:justify-center text-center md:flex text-white"
            style={{ borderTop: "1px solid white" }}
          >
            <div>Developed by Kishor Shivsharan</div>
          </div>
          {/* end container */}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
