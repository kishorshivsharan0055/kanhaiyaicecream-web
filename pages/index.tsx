import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ReactWhatsapp from "react-whatsapp";
import { NavBar } from "../components/NavBar";
import { Products } from "../components/products";
import { SliderCorousal } from "../components/slider";
import { PHONE_NO } from "../contants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    extendedIcon: {
      marginRight: theme.spacing(1),
      color: "#006400",
    },
    core: {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
      color: "RGB(255, 255, 255)",
      backgroundColor: "#2E8B57",
    },
  })
);
const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  color: "RGB(255, 255, 255)",
  backgroundColor: "#2E8B57",
};

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <SliderCorousal />
      <Products />

      <div
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
          color: "RGB(255, 255, 255)",
          // backgroundColor: "#2E8B57",
        }}
      >
        <ReactWhatsapp
          number={PHONE_NO}
          children={
            <div className="flex">
              <WhatsAppIcon className={classes.extendedIcon} />
              <div className="text-gray-900 font-semibold">Chat with Us</div>
            </div>
          }
        />
      </div>
    </>
  );
}
