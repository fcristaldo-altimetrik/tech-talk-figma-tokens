import React, { useState } from "react";
import ButtonComponent from "../../components/button/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import illustrator_icon from "../../assets/img/illustrator_modal.svg";
import { arrow_right } from "../logIn/LogIn";
import "./onboarding.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
};

const Onboarding = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal-onboarding">
        <div className="img mobile">
          <img
            src={illustrator_icon}
            title="illustrator_icon"
            alt="illustrator_icon"
          />
        </div>
        <div className="bg-dark-mobile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 modal-body">
            <div className="col-span-2">
              <h3>
                Simply dummy text of the printing and typesetting industry
              </h3>
              <p>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries
              </p>
            </div>
            <div className="img desktop">
              <img
                src={illustrator_icon}
                title="illustrator_icon"
                alt="illustrator_icon"
              />
            </div>
          </div>
          <div className="footer-modal grid grid-cols-1 md:grid-cols-2 gap-4">
            <ButtonComponent text="Skip" btnStyle="btn-outline" />
            <ButtonComponent
              text="Continue"
              btnStyle="btn-primary"
              icon={arrow_right}
              onClick={handleClose}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Onboarding;
