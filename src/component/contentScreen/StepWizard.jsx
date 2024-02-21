import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import {
  Box,
  StepConnector,
  StepLabel,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Check } from "@mui/icons-material";

const MAX_STEP = 4;
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50%)",
    right: "calc(50% )",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#000",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: "#784af4",
      borderColor: "#000",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      //   theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      theme.palette.mode === "dark" ? "#000" : "#000",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  //   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  color: theme.palette.mode === "dark" ? "#000" : "#000",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    // color: "#784af4",
    color: "#000",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#000",
    zIndex: 1,
    fontSize: 18,
    width: 20,
    height: 20,
    backgroundColor: "#e8e51a",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  "& .QontoStepIcon-circle": {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-completedIcon">
          <Check fontSize="small" />
        </div>
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const StepWizard = ({ step }) => {
  return (
    <div>
      <Box sx={{ width: "50%", margin: "auto" }}>
        <Stepper
          alternativeLabel
          activeStep={step+""}
          connector={<QontoConnector />}
        >
          {Array(MAX_STEP)
            .fill("1")
            .map((label, index) => {
              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                </Step>
              );
            })}
        </Stepper>
      </Box>
    </div>
  );
};

export default StepWizard;
