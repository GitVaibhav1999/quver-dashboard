import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { DoubleArrow, GamesOutlined } from "@material-ui/icons";
import CreateIcon from "@material-ui/icons/Create";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import NoteIcon from "@material-ui/icons/Note";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import logo from "./assets/logo.png";
import Home from "./components/Home/Home";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "grey",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#D5D5D5",
    [theme.breakpoints.up("sm")]: {
      width: "100vw",
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: "100vh",
    marginTop: "4rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    // <div style={{ height: "10%" }}>
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="flex-start"
      spacing={1}
      style={{ backgroundColor: "#C9C9C9" }}
    >
      <Grid style={{ width: "100%", backgroundColor: "#C9C9C9" }} item>
        <List>
        <ListItem button component={Link} to="/dashboard/coachings/home">
        <ListItemIcon>
        <HomeIcon/>

        </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Create New Paper" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Spam" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Spam" />
        </ListItem>
         
        </List>
      </Grid>
      <Grid
        style={{ display: "flex", width: "100%", alignItems: "flex-end" }}
        item
        xs={12}
      >
        <Grid
          style={{
            padding: "6%",
            backgroundColor: "#544E98",
            color: "white",
          }}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid style={{ paddingTop: "2%" }} item xs={2}>
            <ExitToAppIcon />
          </Grid>
          <Grid item alignItems="center" xs={5}>
            <Typography variant="h6">Logout</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <img style={{ width: "6rem" }} src={logo}></img>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className="main-div">
            <Home/>
            
      </div>
    </div>
  );
}

export default Navbar;