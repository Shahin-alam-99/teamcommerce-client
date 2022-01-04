import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Container, Divider, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 200;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <div>
      <Box sx={{ p: 1, display: "flex" }}>
        <TextField size="small" placeholder="Search products" />
        <Button variant="contained" endIcon={<SearchIcon />} />
      </Box>

      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/")}>
          Home
        </ListItem>
        <ListItem button>Shops</ListItem>
        <ListItem button>Products</ListItem>
        <ListItem button>Catagories</ListItem>
        <ListItem button>About</ListItem>
        <ListItem button>Contact Us</ListItem>
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          <ListItem button>Log in</ListItem>
        </Link>
      </List>

      <Divider />
      {/* social  */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <IconButton>
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="relative" color="secondary">
          <Container maxWidth="xl">
            <Toolbar sx={{ padding: "0 !important" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* ===============
              desktop main links
              =================== */}
              <Box
                sx={{
                  display: { sm: "flex", xs: "none" },
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    display: "block",
                  }}
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Shops
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Products
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Catagories
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  About
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  Contact Us
                </Button>
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Button
                    sx={{
                      color: "white",
                      fontSize: 17,
                      fontWeight: "600",
                      display: "block",
                    }}
                  >
                    Log In
                  </Button>
                </Link>
              </Box>
              {/*====================
               features
               ================== */}
              <Box sx={{ display: { xs: "flex", sm: "none" }, ml: "auto" }}>
                <Box className="primary-hover-effect">
                  <IconButton className="primary-hover-effect">
                    <ScaleOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="normal"
                    />
                  </IconButton>
                </Box>
                <Box sx={{ mx: 3 }} className="primary-hover-effect">
                  <IconButton className="primary-hover-effect">
                    <FavoriteBorderIcon
                      sx={{ color: "white" }}
                      fontSize="normal"
                    />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  className="primary-hover-effect"
                  onClick={() => navigate("/cart")}
                >
                  <IconButton className="primary-hover-effect">
                    <ShoppingCartOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="normal"
                    />
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box aria-label="mailbox folders">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
