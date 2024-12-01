import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const FashionCard = ({ fashion }) => {
  const { name, price, details, photo } = fashion;
  return (
    <div className="p-5 border rounded-lg">
      <img className="w-full h-[250px]" src={photo} alt="" />
      <div className="flex justify-between my-2">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-xl">
          <span className="font-bold">Price:</span> {price}
        </p>
      </div>
      <div>
        <p>{details}</p>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <button><FaEye size={35}/></button>
        <button><FaRegEdit size={35}/></button>
        <button className="text-red-600"><MdDelete size={35}/></button>
      </div>
    </div>
  );
};

export default FashionCard;
