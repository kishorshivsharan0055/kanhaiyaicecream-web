import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

interface FeatureSectionProps {}

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

export const FeatureSection: React.FC<FeatureSectionProps> = ({}) => {
  const classes = useStyles();
  var content = [
    {
      title: "Best Product",
      image: "/spices.jpg",
    },
    {
      title: "Excellent Quality",
      image: "/fruits.jpg",
    },
    {
      title: "",
      image: "/vegetables.jpg",
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
                <div className="pl-14 pt-10"></div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
