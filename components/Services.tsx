import { Paper } from "@material-ui/core";
import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

interface ServicesProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyItems: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(16),
      },
    },
  })
);

export const Services: React.FC<ServicesProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className="pt-16 bg-gray-100 items-center place-items-center justify-items-center ">
      <div
        className="font-semibold text-gray-600 text-5xl text-center "
        data-aos="fade-up"
      >
        Our Services
      </div>

      <div className="flex content-center place-content-center mt-7">
        <div className={classes.root} style={{ justifyContent: "center" }}>
          <Paper className="text-center">
            <img
              src="/wedding.png"
              className="w-16 h-16 ml-auto mr-auto mt-4"
            />
            <div className="font-bold text-xl">Wedding</div>
          </Paper>
          <Paper className="text-center">
            <img
              src="/birthday.png"
              className="w-16 h-16 ml-auto mr-auto mt-4"
            />
            <div className="font-bold text-xl">Birthday</div>
          </Paper>
        </div>
      </div>

      <div className="flex content-center place-content-center">
        <div className={classes.root} style={{ justifyContent: "center" }}>
          <Paper className="text-center">
            <img src="" />
            <div className="font-bold text-xl">Reception</div>
          </Paper>
          <Paper className="text-center">
            <img src="" />
            <div className="font-bold text-xl">Funtions</div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Services;
