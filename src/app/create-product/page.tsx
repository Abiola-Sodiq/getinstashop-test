"use client";
import ArrowBack from "@/assets/icons/arrowBackIcon";
import CheckMark from "@/assets/icons/checkMark";
import MoreIcon from "@/assets/icons/moreIcon";
import Inventory from "@/components/Inventory";
import ProductDetails from "@/components/ProductDetails";
import ProductImages from "@/components/ProductImages";

const CreateProduct = () => {
  return (
    <div className=" space-y-5">
      <div className="flex items-center  text-base font-medium justify-between px-2">
        <div className=" flex items-center gap-3">
          <ArrowBack
            onClick={() => {
              window.history.back();
            }}
            className="cursor-pointer"
          />
          <p>Create a product</p>
        </div>
        <div className=" cursor-pointer">
          <MoreIcon />
        </div>
      </div>
      <div className=" flex items-center justify-between px-2 border-b-[0.5px] border-b-[#0000001A] pb-3">
        <div className=" border border-[#0000001A] py-1 px-2 rounded-[90px] flex items-center gap-2">
          <p className="text-xs font-medium">Draft </p>
          <CheckMark />
        </div>
        <button className="text-[#8A226F] text-xs font-medium">
          Preview product
        </button>
      </div>
      <div className="border-b-[0.5px] border-b-[#0000001A] pb-3">
        <ProductDetails />
      </div>
      <div className="border-b-[0.5px] border-b-[#0000001A] pb-3">
        <ProductImages />
      </div>
      <div className="border-b-[0.5px] border-b-[#0000001A] pb-3">
        <Inventory />
      </div>
    </div>
  );
};

export default CreateProduct;
