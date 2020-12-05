import React from "react";
import { useRouter } from "next/router";
import { data } from "../../utils/data";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ReactWhatsapp from "react-whatsapp";
import { PHONE_NO } from "../../contants";
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";

const useStyles = makeStyles({
  rootCard: {
    maxWidth: 250,
  },
  media: {
    height: 200,
    // maxWidth: 250,
  },
  rootGrid: {
    flexGrow: 1,
  },
});

const useButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    extendedIcon: {
      marginRight: theme.spacing(1),
      color: "#006400",
    },
  })
);

export const ProductPage: React.FC = ({}) => {
  const classes = useStyles();
  const buttonClass = useButtonStyle();
  const router = useRouter();
  const productId =
    typeof router.query.product === "string"
      ? parseInt(router.query.product)
      : -1;
  console.log(productId);

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url('${data[productId - 1].img}')`,
          backgroundSize: "cover",
          height: 500,
        }}
        className="pt-20"
      >
        <div className="content-center text-center text-black-500 text-8xl pt-10 font-semibold">
          {data[productId - 1].title}
        </div>
      </div>

      <div className="mt-20 mr-5 ml-10">
        <div className="text-5xl text-center font-bold text-gray-600">
          {data[productId - 1].semidescription}
        </div>
        <div className="text-lg text-center font-bold text-gray-600">
          {data[productId - 1].description}
        </div>
      </div>

      <div className="pt-10 bg-gray-100 mt-14">
        <div className="font-semibold text-gray-600 text-5xl text-center ">
          Our Products
        </div>

        <div className="pt-5 mb-5">
          <Grid container className={classes.rootGrid}>
            <Grid item xs={12}>
              <Grid container justify="center">
                {data[productId - 1].subproducts.map((value) => (
                  <div className="pt-10 md:ml-10 md:mr-10 lg:ml-10 lg:mt-10 sm:mr-10 sm:ml-10">
                    <Card style={{ width: 200, maxHeight: 250 }}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={value.img}
                          title="Contemplative Reptile"
                        />
                        <CardContent className="card-content">
                          <div className="text-sm text-center">
                            {value.title}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>

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
                <WhatsAppIcon className={buttonClass.extendedIcon} />
                <div className="text-gray-900 font-semibold">Chat with Us</div>
              </div>
            }
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
