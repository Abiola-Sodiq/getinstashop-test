const StoreSetup = () => {
  return (
    <div>
      <form action="" className=" space-y-3">
        <div className=" flex justify-center items-center flex-col py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full">
          <input type="file" name="" id=""  />
          <p>Upload store logo</p>
        </div>
        <input
          type="text"
          className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033] text-bold"
          placeholder="Store name"
        />
        <input
          type="text"
          placeholder="Store tag name"
          className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
        />
        <input
          type="number"
          className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
          placeholder="Store phone number"
        />
        <input
          type="email"
          className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
          placeholder="Store email"
        />
        <input
          type="email"
          className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
          placeholder="Category"
        />
      </form>
    </div>
  );
};

export default StoreSetup;
