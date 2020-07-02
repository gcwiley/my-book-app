import React from "react";
import Link from 'next/link';


import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddBoxIcon from "@material-ui/icons/AddBox";
import InfoIcon from "@material-ui/icons/Info";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 700
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <Link href="/">
      <BottomNavigationAction label="My Library" icon={<MenuBookIcon />} />
    </Link>
    <Link href="/create">
      <BottomNavigationAction label="Add a New Book" icon={<AddBoxIcon />} />
    </Link>
    <Link href="about">
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
    </Link>
      
    </BottomNavigation>
  );
}
