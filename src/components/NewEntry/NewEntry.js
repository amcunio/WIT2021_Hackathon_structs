import { DialogContent, DialogTitle, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import React from "react";
import { motion } from "framer-motion";
import Manual from "./Manual";
import Button from "@material-ui/core/Button";
import Automate from "./Automate";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: "-100vw",
    transition: { ease: "easeOut" },
  },
};

const NewEntry = ({ handleClose }) => {
  const [value, setValue] = React.useState("");
  const [showPrompt, setShowPrompt] = React.useState("block");
  const [isManual, setIsManual] = React.useState(false);
  const [isAuto, setIsAuto] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const handleChange = (event) => {
    const v = event.target.value;
    setValue(v);
    
    if (v === "Manual") {
      setIsManual(true);
      setShowPrompt("None");
    } else {
      setIsAuto(true);
    }
  };
  const getReady = () => {
    setIsReady(true)

  }
  return (
    <>
      <DialogContent>
        {showPrompt === "None" ? (
          isManual && <Manual handleClose={handleClose} />
        ) : (
          <motion.div
            style={{ display: showPrompt }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Typography>
              How do you like to record heart beat today?{" "}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup value={value} onChange={handleChange} row>
                <FormControlLabel
                  value="Manual"
                  control={<Radio />}
                  label="Manual"
                />
                <FormControlLabel
                  value="Automate"
                  control={<Radio />}
                  label="Automate"
                />
              </RadioGroup>
              {isAuto && (
                <Button variant="contained" color="primary" onClick={getReady}>
                  I am ready
                </Button>
              )}
              {isReady && <Automate handleClose={handleClose} />}
            </FormControl>
          </motion.div>
        )}
      </DialogContent>
    </>
  );
};

export default NewEntry;
