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

      <ReactWhatsapp
        number={PHONE_NO}
        style={style}
        children={
          <div className="flex">
            <WhatsAppIcon className={classes.extendedIcon} />
            <div className="text-white font-semibold">Chat with Us</div>
          </div>
        }
      />
    </>
  );
}
