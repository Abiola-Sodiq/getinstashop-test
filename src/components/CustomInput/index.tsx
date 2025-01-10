import { useState } from "react";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = "text",
  required = false,
  className,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        value={inputValue || ""}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`py-4 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[##000000E5] w-full focus:border-[#00000033] text-bold ${className}`}
      />
      <label
        className={`input-label text-[#00000099] ${
          isFocused || inputValue ? "input-focused" : ""
        }`}
      >
        {label}
        {required && <span className="text-[#FF4B55]">*</span>}
      </label>
    </div>
  );
};

export default CustomInput;
