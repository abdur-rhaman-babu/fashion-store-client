import { useLoaderData } from "react-router-dom";

const UpdateFashion = () => {
  const fashion = useLoaderData() 
  const {name, price, details, photo, _id} = fashion;
  const handleUpdateFashion = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedFashion = { name, price, details, photo };    
    console.log(updatedFashion);

    fetch(`http://localhost:4500/fashions/${_id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedFashion)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
    })

  };
  return (
    <div className="w-2/4 mx-auto">
      <form onSubmit={handleUpdateFashion} className="bg-slate-200 p-5">
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
              defaultValue={name}
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
              defaultValue={price}
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
              defaultValue={details}
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
              defaultValue={photo}
            />
          </div>
        </div>
        <input
          className="bg-black text-white font-bold w-full p-2 mt-4 cursor-pointer"
          type="submit"
          value="Update Fashion"
        />
      </form>
    </div>
  );
};

export default UpdateFashion;
