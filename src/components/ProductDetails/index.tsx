import ArrowDownIcon from "@/assets/icons/arrowDownIcon";
import { useState } from "react";
import CustomInput from "../CustomInput";
import useStore from "@/store";

const ProductDetails = () => {
  const [isFocused, setIsFocused] = useState("");
  const { isOpened, setIsOpened } = useStore();
  const handleFocus = (fieldName: string) => setIsFocused(fieldName);
  const handleBlur = () => {
    setIsFocused("");
  };
  return (
    <div className="px-2  ">
      <div
        className=" cursor-pointer flex items-center justify-between pb-4 "
        onClick={setIsOpened}
      >
        <p className=" font-medium text-sm">Basic Details</p>
        <ArrowDownIcon />
      </div>
      {isOpened && (
        <form action="" className=" space-y-3">
          <CustomInput type="text" label="Product Title" name="product-title" />
          <div className="input-container">
            <label
              htmlFor="product-description"
              className={`input-label text-[#00000099] ${
                isFocused === "product-description" ? "input-focused" : ""
              }`}
            >
              Product Description
            </label>
            <textarea
              name="product-description"
              className="py-4 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[##000000E5] w-full focus:border-[#00000033] text-bold "
              onFocus={() => handleFocus("product-description")}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex items-center gap-2 ">
            <CustomInput type="number" label="Price" name="price" />
            <CustomInput type="number" label="Old Price" name="product-title" />
          </div>
          <div className="input-container">
            <label
              htmlFor="product-collection"
              className={`input-label text-[#00000099] ${
                isFocused === "product-collection" ? "input-focused" : ""
              }`}
            >
              Product Collection
            </label>
            <textarea
              name="product-collection"
              className="py-4 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[##000000E5] w-full focus:border-[#00000033] text-bold "
              onFocus={() => handleFocus("product-collection")}
              onBlur={handleBlur}
            />
          </div>
          <CustomInput
            type="number"
            label="Inventory Stocks"
            name="inventory-stocks"
          />
        </form>
      )}
    </div>
  );
};

export default ProductDetails;
