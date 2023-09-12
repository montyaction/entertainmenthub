import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search"
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 1
    },
    color: {
        color: "white"
    }
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const history = useNavigate();

  useEffect(()=> {
    if (value === 0) {
        history("/");
    } else if (value === 1) {
        history("/movies")
    } else if (value === 2) {
        history("/series")
    } else if (value === 3) {
        history("/search")
    }
  }, [value, history]);

  return (
      <BottomNavigation
        showLabels
        value={value}
        className={classes.root}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction className={classes.color} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction className={classes.color} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction className={classes.color} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction className={classes.color} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
  );
}
