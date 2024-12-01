const AddFashion = () => {
  const handleAddFashion = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const fashion = { name, price, details, photo };    
    console.log(fashion);
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
