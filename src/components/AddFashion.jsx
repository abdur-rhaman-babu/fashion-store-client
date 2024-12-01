import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddFashion = () => {
  const navigate = useNavigate()
  const handleAddFashion = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const fashion = { name, price, details, photo };    
    console.log(fashion);

    fetch('http://localhost:4500/fashions',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(fashion)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "success",
          text: "Fashion Successfully added",
          icon: "success"
        });
        navigate('/')
      }
    })
  };
  return (
    <div className="w-2/4 mx-auto">
      <form onSubmit={handleAddFashion} className="bg-slate-200 p-5">
        <h1 className="text-3xl text-center font-bold">Add Fashion</h1>
        <div className=" grid md:grid-cols-2 gap-5">
          <div className="w-full mt-2">
            <label>Name</label>
            <br />
            <input
              className="w-full p-2 outline-none"
              type="text"
              placeholder="name"
              name="name"
              required
            />
          </div>
          <div className="w-full mt-2">
            <label>Price</label>
            <br />
            <input
              className="w-full p-2 outline-none"
              type="text"
              placeholder="price"
              name="price"
              required
            />
          </div>
          <div className="w-full mt-2">
            <label>Details</label>
            <br />
            <input
              className="w-full p-2 outline-none"
              type="text"
              placeholder="details"
              name="details"
              required
            />
          </div>
          <div className="w-full mt-2">
            <label>Photo</label>
            <br />
            <input
              className="w-full p-2 outline-none"
              type="text"
              placeholder="photo"
              name="photo"
              required
            />
          </div>
        </div>
        <input
          className="bg-black text-white font-bold w-full p-2 mt-4 cursor-pointer"
          type="submit"
          value="Add Fashion"
        />
      </form>
    </div>
  );
};

export default AddFashion;
