import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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

export const Products: React.FC<productsProps> = ({}) => {
  const classes = useStyles();
  var content = [
    {
      title: "Spices",
      image: "/spices.jpg",
    },
    {
      title: "Fruits",
      image: "/fruits.jpg",
    },
    {
      title: "Vegetables",
      image: "/vegetables.jpg",
    },
    {
      title: "Dry Fruits",
      image: "/dry-fruits.jpg",
    },
    {
      title: "Pulses",
      image: "/pulses.jpg",
    },
    {
      title: "Cereals",
      image: "/cereals.jpg",
    },
  ];

  return (
    <div className="pt-16">
      <div className="font-semibold text-gray-600 text-5xl text-center ">
        Our Products
      </div>

      <div className="pt-16">
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {content.map((value) => (
                <div className="pl-14 pt-10">
                  <Card className={classes.rootCard}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={value.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Products;
