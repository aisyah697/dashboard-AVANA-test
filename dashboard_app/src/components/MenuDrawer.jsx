import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
    minHeight: "100vh",
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
  },
  brand: {
    marginTop: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.secondary,
  },
  logo: {
    maxHeight: "1.75rem",
    textAlign: "center",
  },
  userProfile: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
  },
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  username: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    fontWeight: "bold",
    color: "#ffffff",
  },
  menu: {
    textTransform: "capitalize",
    color: "#ffffff",
  },
  nestedMenu: {
    color: "rgb(156, 164, 171)",
    textTransform: "capitalize",
  },
  button: {
    color: "rgb(156, 164, 171)",
  },
  accordion: {
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const MenuDrawer = (props) => {
  const classes = useStyles();

  const listMenu = props.dataMenu.listMenu;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <div className={classes.brand}>
          <img
            src={require("../assets/logo.png")}
            alt="logo"
            className={classes.logo}
          />
        </div>
        <div className={classes.userProfile}>
          <div className={classes.avatar}>
            <Avatar className={classes.medium}>AB</Avatar>
          </div>
          <div className={classes.username}>
            <span>Avriza Bramantyo</span>
          </div>
        </div>
        <div className={classes.content}>
          {listMenu ? (
            <div>
              {listMenu.map((value, index) => (
                <div key={index}>
                  {value.isShowed === true && value.isAllowed === true ? (
                    <div>
                      {value.childs ? (
                        <Accordion className={classes.accordion}>
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon className={classes.button} />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.menu}>
                              {value.id}
                            </Typography>
                          </AccordionSummary>
                          <div>
                            {value.childs.map((item, index) => (
                              <div key={index}>
                                {item.isShowed === true ? (
                                  <AccordionDetails>
                                    <Typography className={classes.nestedMenu}>
                                      {item.id}
                                    </Typography>
                                  </AccordionDetails>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </Accordion>
                      ) : (
                        <Accordion className={classes.accordion}>
                          <AccordionDetails>
                            <Typography className={classes.menu}>
                              {value.id}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
