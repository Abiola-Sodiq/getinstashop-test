const Verification = () => {
  return (
    <div className=" text-left space-y-4">
      <p className="text-[#000000E5] font-medium text-[24px] leading-6">
        Enter your phone number or email to get started
      </p>
      <p className="text-sm font-normal text-[#00000099]">
        We will send you a verification code for confirmation
      </p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter phone number or email"
        className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
      />
    </div>
  );
};

export default Verification;
