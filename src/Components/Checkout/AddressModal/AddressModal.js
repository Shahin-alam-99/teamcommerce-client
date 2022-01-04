import { MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContactModal({
  handleClose,
  openAddressModal,
  handleFieldData,
}) {
  const [option, setOption] = React.useState("");
  const options = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Office",
    },
    {
      id: 3,
      label: "Business",
    },
    {
      id: 4,
      label: "Academy",
    },
    {
      id: 5,
      label: "Others",
    },
  ];
  const handleOnChange = (e) => {
    setOption(e.target.value);
    handleFieldData(e);
  };
  return (
    <div>
      <Modal
        open={openAddressModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title
          </Typography>
          <TextField
            name="addressTitle"
            fullWidth
            onChange={handleOnChange}
            value={option}
            select
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Typography sx={{ mt: 2 }} variant="h6" component="h2">
            Address
          </Typography>
          <TextField
            name="address"
            onChange={handleFieldData}
            fullWidth
            multiline
            rows={5}
          />
        </Box>
      </Modal>
    </div>
  );
}
