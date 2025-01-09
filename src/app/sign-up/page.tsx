"use client";
import ArrowBack from "@/assets/icons/arrowBackIcon";
import ProfileSetup from "@/components/CompleteProfile";
import CustomButton from "@/components/CustomButton";
import StepIndicator from "@/components/StepIndicator";
import StoreSetup from "@/components/StoreSetup";
import Verification from "@/components/Verification";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const Steps = [
    { step: <Verification /> },
    { step: <ProfileSetup /> },
    { step: <StoreSetup /> },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < Steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/create-product");
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      window.history.back();
    }
  };
  return (
    <div className="flex flex-col justify-between h-full gap-6 py-3">
      <div className="flex items-center gap-3 text-base font-medium  px-2">
        <ArrowBack onClick={handleBack} className="cursor-pointer" />
        <p>Get started</p>
      </div>
      <div className=" space-y-4 ">
        <StepIndicator currentStep={currentStep + 1} />
        <div className="px-6">{Steps[currentStep].step}</div>
      </div>
      <div className="border-t-[0.5px] border-t-[#0000001A] py-5 px-4">
        <CustomButton
          variant="primary"
          type="submit"
          text="Continue"
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};

export default Signup;
