import React from "react";
import NotFound from "./NotFound";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { likedSelect } from "../features/likedSlice";

function SinglePage() {
  const { id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();

  const isLiked = useSelector(likedSelect);

  const handleLiked = () => {
    dispatch({
      type: "Liked",
      payload: isLiked,
    });
    product.liked = isLiked;
  };

  const { product } = location.state || {};

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="w-full p-14 flex justify-center">
      <div className="w-[800px] flex items-center gap-7">
        <div className="w-1/2">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-9">
          <h3 className="text-3xl">{product.title}</h3>

          <div className="w-full flex flex-col gap-4">
            <h4 className="text-gray-600 text-2xl">Price: {product.price}$</h4>

            <p className="text-gray-400">rating: {product.rating.rate}</p>
          </div>

          <span className="text-2xl text-gray-500">{product.description}</span>

          <button className="w-8 h-8" onClick={handleLiked}>
            <BiSolidLike
              className={
                product.liked
                  ? "text-6xl text-red-500 transition-all"
                  : "text-6xl text-gray-500 transition-all"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;