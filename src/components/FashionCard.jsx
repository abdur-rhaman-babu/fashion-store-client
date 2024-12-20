import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FashionCard = ({ fashion, fashions, setFashions }) => {
  const { name, price, details, photo, _id } = fashion;

  const handleDeleteFashion = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4500/fashions/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = fashions.filter(
                (fashion) => fashion._id !== id
              );
              setFashions(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Fashion has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
        <button>
          <FaEye size={35} />
        </button>
        <Link to={`/updateFashion/${_id}`}>
          <button>
            <FaRegEdit size={35} />
          </button>
        </Link>
        <button
          onClick={() => handleDeleteFashion(_id)}
          className="text-red-600"
        >
          <MdDelete size={35} />
        </button>
      </div>
    </div>
  );
};

export default FashionCard;
