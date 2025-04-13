import WizardStepper from "../../../../components/WizardStepper";

const page = () => {
  return (
    <div>
      <WizardStepper>
        <WizardStepper.StepList>
          <WizardStepper.Step>
            <p>step one</p>
          </WizardStepper.Step>
          <WizardStepper.Step>
            <p>step two</p>
          </WizardStepper.Step>
          <WizardStepper.Step>
            <p>step three</p>
          </WizardStepper.Step>
          <WizardStepper.Step>
            <p>step four</p>
          </WizardStepper.Step>
        </WizardStepper.StepList>
      </WizardStepper>
    </div>
  );
};

export default page;
