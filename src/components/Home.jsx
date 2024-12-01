import { useLoaderData } from "react-router-dom";
import FashionCard from "./FashionCard";
import { useState } from "react";

const Home = () => {
  const loadedFashion = useLoaderData();
  const [fashions, setFashions] = useState(loadedFashion);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-5">
        Fashion: {fashions.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fashions.map((fashion) => (
          <FashionCard
            key={fashion._id}
            fashion={fashion}
            fashions={fashions}
            setFashions={setFashions}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
