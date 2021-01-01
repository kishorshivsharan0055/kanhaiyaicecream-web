import React from "react";
import { useRouter } from "next/router";
import { getAllProductIds, getProductDetails } from "../../utils/data";
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
    maxWidth: 350,
    width: 300,
  },
  media: {
    height: 200,
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

export const ProductPage = ({ productData }) => {
  const classes = useStyles();
  const buttonClass = useButtonStyle();
  const router = useRouter();
  const productId =
    typeof router.query.product === "string"
      ? parseInt(router.query.product)
      : -1;

  return (
    <>
      <NavBar />

      <div
        style={{
          backgroundImage: `url('${productData.main_img}')`,
          backgroundSize: "cover",
          height: 600,
          backgroundPosition: "center center",
        }}
        className="pt-20 object-fill"
        data-aos="fade-up"
      >
        <div className="main-title content-center text-center text-black-700 text-8xl pt-10 font-semibold">
          {productData.main_title}
        </div>
      </div>

      <div className="pt-10 bg-gray-100">
        <div
          className="font-semibold text-gray-600 text-5xl text-center "
          data-aos="fade-up"
        >
          Our Products
        </div>

        <div className="pt-5 mb-5">
          <Grid container className={classes.rootGrid}>
            <Grid item xs={12}>
              <Grid container justify="center">
                {productData.subproducts.map((value) => (
                  <div className="pt-10 md:ml-10 md:mr-10 lg:ml-10 lg:mt-10 sm:mr-10 sm:ml-10">
                    <Card
                      style={{ width: 200, maxHeight: 250 }}
                      data-aos="fade-up"
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={value.img}
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

      <style jsx>
        {`
          @media only screen and (max-width: 600px) {
            .main-title {
              font-size: 60px;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = getProductDetails(params.product);
  return {
    props: {
      productData,
    },
  };
}

export default ProductPage;
