interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const totalSteps = 3;
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2">
      {steps.map((step) => (
        <div
          key={step}
          className={`w-full max-w-[30%] h-1 rounded-2xl ${
            step <= currentStep ? "bg-[#8A226F]" : "bg-[#E0E0E0]"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
