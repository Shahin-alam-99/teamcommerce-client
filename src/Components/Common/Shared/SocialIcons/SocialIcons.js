import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SocialIcons = () => {
  return (
    <Box sx={{}}>
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
  );
};

export default SocialIcons;
