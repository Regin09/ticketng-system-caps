import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import "./dashboardlayout.css";
import Avatar from '@mui/material/Avatar';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Logout } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';
import LogoWebsite from '../../assets/images/Logo Btech.png'
import {Helmet} from 'react-helmet';
import axios
 from 'axios';
import { useState } from 'react';


const drawerWidth = 230;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  zIndex:"10000",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  zIndex:"10000",
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "#CDE990!important",
  boxShadow: "none",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DashboardLayout = () => {
  const [userProfile, setUserProfile] = useState({});
  React.useEffect(() => {
    document.title = "User Profile";
    getUserProfileHandler();
  }, []);
  const getUserProfileHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/member/profile/",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setUserProfile(res.data.data);
      // console.log(userProfile);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(!open);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openavatar = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <Helmet>
          <style>{"body { background-color: #F5F8FB}"}</style>
        </Helmet>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar className="navbar">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "700px",
                height: "35px",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 1,
                  marginLeft: open ? "none" : 6,
                  color: "black",
                }}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <IconButton color="inherit">
              <Avatar
                alt={userProfile.name ? userProfile.name.toUpperCase() : ""}
                onClick={handleClick}
                src="/static/images/avatar/1.jpg"
              >
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openavatar}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link
                to="/userProfile-user"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
              </Link>
              <Divider />
              <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                <MenuItem
                  onClick={() => {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("role");
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Link>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} className="sidebar-menu">
          <DrawerHeader
            sx={{
              border: "none",
              display: "flex",
              justifyContent: "flex-start",
              background:
                "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
            }}
          >
            {open ? (
              <img
                src={LogoWebsite}
                alt="Logo"
                style={{
                  height: "90px",
                  width: "150px",
                  display: "flex",
                  alignSelf: "center",
                }}
              />
            ) : (
              <IconButton>
                <img src={LogoWebsite} alt="Logo" style={{ width: "30px" }} />
              </IconButton>
            )}
          </DrawerHeader>
          <div
            style={{
              background:
                "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
              height: "100%",
            }}
          >
            <List>
              {[
                {
                  title: "Overview",
                  icon: <RemoveRedEyeOutlinedIcon />,
                  link: "/overview-user",
                },
                {
                  title: "Tickets",
                  icon: <LocalActivityOutlinedIcon />,
                  link: "/tickets-user",
                },
                {
                  title: "Feedback",
                  icon: <ModeCommentOutlinedIcon />,
                  link: "/feedbacks-user",
                },
              ].map((listNavbar, index) => (
                <Link to={listNavbar.link} className="disable-link-style">
                  <ListItem
                    key={listNavbar.title}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {listNavbar.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={listNavbar.title}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginLeft: open ? "230px" : "64.2px" }}
        >
          <DrawerHeader />

          <Outlet />
        </Box>
      </>
    );
  }
export default DashboardLayout
