import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { Banknote, Clock, Dot } from "lucide-react";
import ReactStars from "react-stars";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
    >
        <div className="relative w-[150px] h-[150px] mb-2 ml-10">
          <img
            src={restaurant.imageUrl}
            className="rounded-md-full object-cover" 
            alt="Restaurant Logo" 
          />
        </div>
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
          {restaurant.restaurantName}
        </h3>
        <div id="card-content" className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-row flex-wrap">
            {restaurant.cuisines.map((item, index) => (
              <span className="flex">
                <span>{item}</span>
                {index < restaurant.cuisines.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-1 text-green-600">
              <Clock className="text-green-600" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-1">
              <Banknote />
              Delivery from ₹{(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
            <div className="flex items-center gap-1">
            <ReactStars
             count={5}
             value={restaurant.starRating || 0}
             size={24}
             color2={"#ffd700"}
             edit={false}
            />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
