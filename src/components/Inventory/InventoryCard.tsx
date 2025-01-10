import DeleteIcon from "@/assets/icons/deleteIcon";
import OptionsIcon from "@/assets/icons/optionsIcon";
import useStore from "@/store";

const InventoryCard = () => {
  const { labelList, setLabelList, inputValue, setInputValue } = useStore();
  const handleAddLabel = () => {
    if (inputValue.trim()) {
      setLabelList([...labelList, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (indexToDelete: number) => {
    setLabelList(labelList.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div>
      <div className=" border-[0.5px] border-[#00000033] rounded-xl space-y-2 h-[112px]">
        <div className=" flex items-center justify-between border-b-[0.5px] border-b-[#00000033] px-3 ">
          <div className="">
            <p className=" text-[10px] text-[#00000099] ">Option 1</p>
            <p className=" text-sm text-[#000000E5]font-bold">Color</p>
          </div>
          <OptionsIcon />
        </div>
        <div>
          <ul className=" flex flex-wrap items-center gap-3">
            {labelList.map((label, index) => (
              <li
                key={index}
                className="bg-[#00000008] rounded-[90px] truncate flex items-center justify-between py-1 px-2 text-xs text-[#000000E5] gap-3"
              >
                {label}
                <button onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Value"
            className="  text-sm w-full outline-none"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleAddLabel();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
