import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "next/link";

interface productsProps {}

const useStyles = makeStyles({
  rootCard: {
    maxWidth: 300,
  },
  media: {
    height: 140,
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
    },
    {
      id: "2",
      title: "Fruits",
      image: "/bg/fruits.jpg",
    },
    {
      id: "3",
      title: "Vegetables",
      image: "/bg/vegetables.jpg",
    },
    {
      id: "4",
      title: "Dry Fruits",
      image: "/bg/dry-fruits.jpg",
    },
    {
      id: "5",
      title: "Pulses",
      image: "/bg/pulses.jpg",
    },
    {
      id: "6",
      title: "Cereals",
      image: "/bg/cereals.jpg",
    },
  ];

  return (
    <div className="pt-16 bg-gray-100">
      <div className="font-semibold text-gray-600 text-5xl text-center ">
        Our Products
      </div>

      <div className="pt-16">
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {content.map((value) => (
                <div className="pl-14 pr-14 pt-10 mb-5">
                  <Card className={classes.rootCard}>
                    <Link href={`/products/${value.id}`}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={value.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent className="card-content">
                          <Typography gutterBottom variant="h5" component="h2">
                            {value.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            className="card-content-inner"
                          >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
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
