import React, { Suspense } from "react";
import Navbar from "../Helpers/Navbar";

import {
  Container,
  Box,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

export default function Main() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.drawerHeader} />
    </>
  );
}
