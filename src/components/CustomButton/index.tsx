"use client";
import { Button } from "@chakra-ui/button";

type Props = {
  variant: "primary" | "secondary";
  onClick?: () => void;
  text: string;
  type: "button" | "submit" | undefined;
  disabled?: boolean;
  isLoading?: boolean;
};
const CustomButton = ({
  onClick,
  text,
  variant,
  type,
  disabled,
  isLoading,
}: Props) => {
  return (
    <span>
      <Button
        onClick={onClick}
        className={`${
          variant === "secondary" && "border-[#8A226F] text-[#8A226F] border "
        } ${
          variant === "primary" && "bg-[#8A226F] text-white"
        } p-[10px] text-sm font-medium rounded-[90px] whitespace-nowrap w-full disabled:cursor-not-allowed`}
        type={type}
        isDisabled={disabled}
        isLoading={isLoading}
      >
        {text}
      </Button>
    </span>
  );
};

export default CustomButton;
