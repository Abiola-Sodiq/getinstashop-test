import ArrowDownIcon from "@/assets/icons/arrowDownIcon";
import useStore from "@/store";
import InventoryCard from "./InventoryCard";

const Inventory = () => {
  const { isInventoryChecked, setIsInventoryChecked } = useStore();
  return (
    <div className="px-2 ">
      <div className=" cursor-pointer flex items-center justify-between pb-4 ">
        <p className=" font-medium text-sm">Inventory variations</p>
        <ArrowDownIcon />
      </div>
      <div>
        <button
          className=" flex  items-center gap-3 p-2  "
          onClick={() => {
            setIsInventoryChecked();
          }}
          id="inventory"
        >
          <input
            type="checkbox"
            name="inventory"
            id="inventory"
            checked={isInventoryChecked}
            className="cursor-pointer"
          />
          <label
            htmlFor="inventory"
            className="cursor-pointer text-sm text-[#00000099] font-normal"
          >
            This product is variable; has different colors, sizes,
            weight,materials, etc.
          </label>
        </button>
        {isInventoryChecked && <InventoryCard />}
      </div>
    </div>
  );
};

export default Inventory;
