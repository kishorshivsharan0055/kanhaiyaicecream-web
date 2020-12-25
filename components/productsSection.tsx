import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";

interface productsProps {}

const useStyles = makeStyles({
  rootCard: {
    maxWidth: 300,
    height: 320,
  },
  media: {
    height: 150,
  },
  rootGrid: {
    flexGrow: 1,
  },
});

export const ProductsSection: React.FC<productsProps> = ({}) => {
  const classes = useStyles();
  var content = [
    {
      id: "1",
      title: "Spices",
      image: "/bg/spices.jpg",
      description:
        "Spices and aromatics are the  heart of India. The trade of spices has been an extraordinarily influential factor",
    },
    {
      id: "2",
      title: "Fruits",
      image: "/bg/fruits.jpg",
      description:
        "India is the heavy producer of Fruits in the world and is known as the fruit basket of the world",
    },
    {
      id: "3",
      title: "Vegetables",
      image: "/bg/vegetables.jpg",
      description:
        "India ranks second in fruits and vegetable production in the world. We are agreed on the category because vegetables are comfortably",
    },
    {
      id: "4",
      title: "Dry Fruits",
      image: "/bg/dry-fruits.jpg",
      description:
        "India offers a unique opportunity to fulfill the needs of consumers worldwide. With 20 types of dry fruits, we see a great scope to complete the customer’s needs",
    },
    {
      id: "5",
      title: "Pulses",
      image: "/bg/pulses.jpg",
      description:
        "Indian pulses are usually available in three types: the whole pulse, the split pulse with the skin on, and the split pulse",
    },
    {
      id: "6",
      title: "Cereals",
      image: "/bg/cereals.jpg",
      description:
        "India is not only the largest producer of cereal but also the largest exporter of the cereal field.",
    },
  ];

  return (
    <div className="pt-16 bg-gray-100">
      <div
        className="font-semibold text-gray-600 text-5xl text-center "
        data-aos="fade-up"
      >
        Our Products
      </div>

      <div className="pt-16">
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {content.map((value) => (
                <div className="pl-14 pr-14 pt-10 mb-5" data-aos="fade-up">
                  <Card className={classes.rootCard}>
                    <Link href={`/products/${value.id}`}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={value.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent className="card-content hover:bg-black-100">
                          <Typography gutterBottom variant="h5" component="h2">
                            {value.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            className="card-content-inner"
                          >
                            {value.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default ProductsSection;
