import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import * as React from "react";
import img from "../../images/shoe.jpg";
import SocialIcons from "../Common/Shared/SocialIcons/SocialIcons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item md={6}>
              <img style={{ width: "100%", height: "auto" }} src={img} alt="" />
            </Grid>
            <Grid item md={6}>
              <Card>
                <CardContent sx={{ pb: 0 }}>
                  <Typography variant="h5" gutterBottom>
                    Product Name
                  </Typography>

                  {/* category & brand */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      Category: Category name
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      Brand: Brand name
                    </Typography>
                  </Box>

                  {/* price */}
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mt: 2 }}
                    gutterBottom
                  >
                    $ 40
                  </Typography>

                  {/* rating & reviews */}
                  <Box sx={{ display: "flex", mb: 2 }}>
                    <Rating readOnly value={3} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      (3 Reviews)
                    </Typography>
                  </Box>

                  {/* about product */}
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci repudiandae illo aliquam accusamus. Est natus
                    dolores, id impedit accusantium, minus debitis facere
                    officiis, voluptate inventore soluta. Quis placeat excepturi
                    possimus.
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <SocialIcons />
                    <Box
                      sx={{
                        display: "flex",
                        borderLeft: "2px solid gray",
                      }}
                    >
                      <Box className="primary-hover-effect">
                        <IconButton className="primary-hover-effect">
                          <ScaleOutlinedIcon fontSize="normal" />
                        </IconButton>
                      </Box>
                      <Box className="primary-hover-effect">
                        <IconButton className="primary-hover-effect">
                          <FavoriteBorderIcon fontSize="normal" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained">
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
