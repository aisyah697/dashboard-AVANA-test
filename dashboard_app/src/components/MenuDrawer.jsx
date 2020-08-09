import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 0,
    top: theme.spacing(2),
  },
  drawerContainer: {
    overflow: "auto",
    paddingBottom: theme.spacing(15),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    paddingRight: theme.spacing(2),
    paddingLeft: "18px",
    color: theme.palette.secondary.secondary,
  },
  module: {
    textTransform: "uppercase",
    fontSize: `calc(1em + 0.5vw)`,
    color: theme.palette.secondary.secondary,
  },
  subject: {
    fontSize: `calc(0.8em + 0.5vw)`,
    fontWeight: "bold",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  heading: {
    color: theme.palette.secondary.secondary,
  },
  detail: {
    padding: theme.spacing(0, 3, 1, 3),
    color: theme.palette.secondary.secondary,
    cursor: "pointer",
  },
  detailLock: {
    padding: theme.spacing(0, 3, 1, 3),
    color: "#7E7E7E",
  },
  lastDetail: {
    padding: theme.spacing(2, 3, 1, 3),
    color: theme.palette.secondary.secondary,
  },
  lastDetailLock: {
    padding: theme.spacing(2, 3, 1, 3),
    color: "#7E7E7E",
  },
  allText: {
    color: theme.palette.secondary.secondary,
    fontSize: `calc(0.6em + 0.4vw)`,
    fontFamily: "Muli, sans-serif",
  },
}));

const MenuDrawer = (props) => {
  const classes = useStyles();

  const [openProduct, setOpenProduct] = React.useState(false);
  const handleClickSetting = () => {
    setOpenSetting(!openSetting);
  };

  const [openSetting, setOpenSetting] = React.useState(false);
  const handleClickProduct = () => {
    setOpenProduct(!openProduct);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <div className={classes.title}>
          <h1 className={classes.module}>AVANA</h1>
        </div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Orders" />
          </ListItem>

          <ListItem button onClick={handleClickProduct}>
            <ListItemText primary="My Product" />
            {openProduct ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openProduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Product" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClickSetting}>
            <ListItemText primary="Settings" />
            {openSetting ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSetting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Invoicing" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
