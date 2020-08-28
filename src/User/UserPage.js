import React, { Suspense } from "react";
import { Container, Box, makeStyles, createStyles } from "@material-ui/core";
import Navbar from "../Helpers/Navbar.js";

import { useUser } from "reactfire";

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

export default function UserPage() {
  const classes = useStyles();

  let user = useUser();

  return (
    <>
      <Navbar />
      <div className={classes.drawerHeader} />
    </>
  );
}
