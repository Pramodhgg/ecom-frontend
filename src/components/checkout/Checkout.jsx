import { Step, StepLabel, Stepper } from "@mui/material";
import { act, useEffect, useState } from "react";
import Address from "./Address";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddresses } from "../../store/actions";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { address } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const steps = ["Address", "Payment Method", "Order Summary", "Payment"];
  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);
  return (
    <div className="p-10 min-h-[calc[100vh-100px]] flex gap-10  justify-center">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="w-80 bg-slate-200 p-10 max-h-90"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="bg-slate-200 p-10 flex-1 max-h-200 overflow-auto">
        {activeStep === 0 && <Address address={address} />}
      </div>
    </div>
  );
};
export default Checkout;
